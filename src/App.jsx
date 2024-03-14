import { useRef, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const todos=useSelector(state=>state.todos.todos)
  const nameRef=useRef();
  const dispatch=useDispatch();
function  handleAdd(e) {
  e.preventDefault();
  if (nameRef.current.value) {
    let t={
      id:Math.trunc(Math.random()*1000),
      name:nameRef.current.value
    }
    dispatch({type:"TODO-ADD",payload:t })
  }

  nameRef.current.value='';
}

function handleDelete(id) {
    dispatch({type:'TODO-REMOVE',payload:id})
}
  return (
    <div className='container'>
      <h1>TODO</h1>
    <form className='form-wrapper'>
    <input ref={nameRef} type="text" placeholder='typing...' />
     <button onClick={handleAdd}>add</button>
    </form>

  {
   todos.length===0&&<div>
   <h4>you don't have any todos</h4>
   </div>
  }


  {
     todos.length>0 && todos.map((todo,index)=>{
      return(
        <div className='todo-item' key={index}>
        <p>{todo.name}</p>
        <button onClick={()=>{handleDelete(todo.id)}}>delete</button>
      </div>
  
      )
  }) 
  }
    </div>
  )
}

export default App

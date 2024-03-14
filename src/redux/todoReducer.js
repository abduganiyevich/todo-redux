const defaultState = {
    todos: []
  };
  
 export function todoReducer(state = defaultState, action) {
    switch (action.type) {
      case "TODO-ADD":
        let addCopied = JSON.parse(JSON.stringify(state.todos));
        addCopied.push(action.payload); 
        return { ...state, todos: addCopied };
  
      case "TODO-REMOVE":
        let removeCopied = JSON.parse(JSON.stringify(state.todos));
        removeCopied = removeCopied.filter(todo => todo.id !== action.payload); 
        return { ...state, todos: removeCopied };
  
      default:
        return state;
    }
  }
  
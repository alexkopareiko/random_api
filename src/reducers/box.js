const initialState = [];

export default function box(state = initialState, action) {
switch(action.type) {



  case "ADD":
     return [
       ...state,
       action.payload
     ]
    break;

    case "DELETE":
      const Id = action.payload;
      return state.filter(row => row.id !== Id);


      break;

  default:
    return state;
}
}

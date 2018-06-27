const initialState = ['initial state'];

export default function box(state = initialState, action) {
switch(action.type) {



  case "ADD":
     return [
       ...state,
       action.payload
     ]
    break;

  default:
    return state;
}
}

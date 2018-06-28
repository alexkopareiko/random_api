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


    case "UPDATE":
    return state.map( (item, index) => {

        if(item.id != action.payload.id) {
            // This isn't the item we care about - keep it as-is
            return item;
        }
        // Otherwise, this is the one we want - return an updated value

        return {
            ...item,
            ...action.payload
        };
      });

    break;

  default:
    return state;
}
}

import { add,delete_note,update_note} from '../src/actions/index';

describe('>>>A C T I O N --- ', ()=>{

    it('+++ actionCreator ADD', () => {
      let arr = {
         id: "1530188033035",
          name: "Arlie VonRueden",
          age: 21
        }
        const add_res = add(arr)
        expect(add_res).toEqual({ type:"ADD", payload: arr})
    });

    it('+++ actionCreator DELETE', () => {
      let arr = {
         id: "1530188033035"
        }
        const delete_note_res = delete_note(arr)
        expect(delete_note_res).toEqual({ type:"DELETE", payload:arr })
    });

    it('+++ actionCreator UPDATE', () => {
      let arr = {
         id: "1530188033035"
        }
        const update_note_res = update_note(arr)
        expect(update_note_res).toEqual({ type:"UPDATE", payload:arr })
    });
});

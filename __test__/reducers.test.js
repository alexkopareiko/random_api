import box from '../src/reducers/index'
describe('>>>R E D U C E R --- ',()=>{
    it('+++ reducer for ADD', () => {
      let arr = {
         id: "1530188033035",
          name: "Arlie VonRueden",
          age: 21
        }
        let state = {payload:arr}
        let arr_input = {
           id: "2340188033035",
            name: "Char Dupi",
            age: 24
          }
        state = box(state,{type:"ADD",payload:{arr, arr_input}})
        expect(state).toEqual({box: [{arr, arr_input}]})

    });
    /*it('+++ reducer for SUBTRACT_INPUT', () => {
        let state = {output:100}
        state = calculatorReducers(state,{type:"SUBTRACT_INPUTS",output:50})
        expect(state).toEqual({output:50})
    });*/
});

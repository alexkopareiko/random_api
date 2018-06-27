
export const add = (text) => {
  console.log('add');
  return {
    type: "ADD",
    payload: text
  }
};

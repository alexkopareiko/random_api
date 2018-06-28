
export const add = (text) => {
  console.log('add');
  return {
    type: "ADD",
    payload: text
  }
};

export const delete_note = (id) => {
  console.log('delete');
  return {
    type: "DELETE",
    payload: id
  }
};

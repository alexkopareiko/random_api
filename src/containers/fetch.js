export function fetch_random() {
  const promise = fetch(`https://randomapi.com/api/3066b6233bb9c30ddca472c45fcb6327`)
    .then(response => {
      if(response.status >= 400) {
        throw `Response invalid ( ${response.status} )`;
        return;
      }
      return response.json();
    })
    .then(({results}) => {
      return results;
    })
    .catch(error => {
      console.log(error);
    });

  return promise;
}

export default async function request(url) {
  console.log(url, "url");
  return fetch(url)
    .then(res => {
      console.log(res, "res");
      return res;
    })
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(err => {
      console.log(err, "err - 13");
    });
}

// export default async function request(url) {
//   console.log(url);
//   return fetch(url).then(res => res.json());
// }

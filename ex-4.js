// Exercise #4
/*let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
}; */
// Start coding here

let getJohnProfile = async () => {
  return await new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

function resultWhenSuccess(data) {
  return console.log(data);
}

getJohnProfile().then(resultWhenSuccess);

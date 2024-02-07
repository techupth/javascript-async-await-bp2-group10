// Exercise #5
/* let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
}; */
// Start coding here

let getJohnProfile = async () => {
  return await new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

// Start coding here

async function resultWhenUnsuccess() {
  try {
    let gotJohnProfile = await getJohnProfile();
    console.log(gotJohnProfile);
} catch (error) {
  let alsoGotJohnProfile = await getJohnProfile();
  console.log(alsoGotJohnProfile);
}
}

resultWhenUnsuccess();
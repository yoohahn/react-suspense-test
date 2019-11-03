import wrapPromise from "./wrap-promise";

const voff = simulateLoading =>
  new Promise(resolve => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(r => r.json())
      .then(dog =>
        setTimeout(() => {
          resolve(dog.message);
        }, simulateLoading)
      );
  });

export default (simulateLoading = 0) => {
  return wrapPromise(voff(simulateLoading));
};

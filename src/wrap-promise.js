const fetchingSound = "purr purr purr";
const errorSound = "WOOF WOOF!!!!!!";
const successSound = "ARH-WOOOOOOOOOOOOOOOOOOOO";

export default promise => {
  let status = fetchingSound;
  let result = "";
  let suspender = promise.then(
    response => {
      status = successSound;
      result = response;
    },
    error => {
      status = errorSound;
      result = error;
    }
  );

  return {
    read() {
      if (status === fetchingSound) {
        throw suspender;
      } else if (status === errorSound) {
        throw result;
      }

      return result;
    }
  };
};

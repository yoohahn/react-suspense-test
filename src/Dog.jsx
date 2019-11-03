import React from "react";

export default ({ dogResource }) => {
  const dogUrl = dogResource.read();

  return <img src={dogUrl} />;
};

import React from "react";
import Dog from "./Dog";
import getDogResource from "./dog-api";

export default () => {
  const simulateLoading = 2000;
  return (
    <React.Suspense fallback="Fetching a furry friend!">
      <Dog dogResource={getDogResource(simulateLoading)} />
    </React.Suspense>
  );
};

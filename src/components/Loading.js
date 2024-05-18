import React from "react";
import spinner from "./loading.png";

const Loading = () => {
  return (
    <div>
      <img src={spinner} alt="loading" />
    </div>
  );
};

export default Loading;

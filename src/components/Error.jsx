import React from "react";

const Error = (props) => {
  return (
    <div className="flex text-white w-screen justify-center">
      <span>{props.error}</span>
    </div>
  );
};

export default Error;

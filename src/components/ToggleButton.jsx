import React from "react";

const ToggleButton = () => {
  return (
    <form
      className="flex text-white w-screen justify-center pt-8 "
      action=""
      method="post"
    >
      <div className="w-full px-2  flex flex-col justify-end">
        <input
          className="bg-transparent "
          type="color"
          name="bg-color"
          id="bg-color"
          value="#FEC2A0"
        />
        <label className="font-thin " htmlFor="bg-color text-xs">
          change background color
        </label>
      </div>
    </form>
  );
};

export default ToggleButton;

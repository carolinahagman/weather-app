import React from "react";

const InputForm = () => {
  return (
    <form
      className="flex text-white w-screen justify-center "
      action=""
      method="post"
    >
      <div>
        <input type="color" name="bg-color" id="bg-color" value="#FEC2A0" />
        <label htmlFor="bg-color">change background color</label>
      </div>
    </form>
  );
};

export default InputForm;

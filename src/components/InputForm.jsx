import React from "react";

const InputForm = () => {
  return (
    <form
      className="flex text-white w-screen justify-center "
      action=""
      method="post"
    >
      <div className="flex flex-col m-4 ">
        <input
          className="bg-transparent border-b border-white w-64 focus:outline-none focus:bg-transparent"
          type="text"
          name="location"
          id="location"
        />
        <label htmlFor="location">change location</label>
      </div>
      <button className="bg-transparent border border-white rounded-lg h-8 mt-2 px-2 ">
        get weather
      </button>
    </form>
  );
};

export default InputForm;

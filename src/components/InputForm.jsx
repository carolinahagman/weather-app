import React from "react";

const InputForm = (props) => {
  return (
    <div>
      <div className="">{props.error ? error() : null}</div>
      <form
        className="flex text-white w-screen justify-center  "
        onSubmit={props.loadWeather}
        autocomplete="off"
      >
        <div className="flex flex-col m-4 ">
          <input
            className=" bg-transparent border-b border-white w-64 focus:outline-none focus:bg-transparent"
            type="text"
            name="location"
            id="location"
          />
          <label className="font-thin" htmlFor="location">
            change location
          </label>
        </div>
        <button className="bg-transparent border font-thin border-white rounded-lg h-8 mt-2 px-2 ">
          get weather
        </button>
      </form>
    </div>
  );
};

function error() {
  return <p className="text-center text-red-800">Please enter a valid city</p>;
}

export default InputForm;

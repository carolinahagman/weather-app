import React from "react";

const SearchField = (props) => {
  return (
    <div className="flex text-white w-screen justify-center  ">
      <div className="">{props.error ? error() : null}</div>

      <div className="flex flex-col m-4 ">
        <input
          className=" bg-transparent border-b border-white w-64 focus:outline-none focus:bg-transparent placeholder-white placeholder-opacity-50"
          type="text"
          name="location"
          id="location"
          placeholder="location"
          onChange={props.handleChange}
          value={props.value}
          onKeyPress={props.handleKeyPress}
          autoComplete="off"
        />
        <label className="font-thin" htmlFor="location">
          get weather
        </label>
      </div>
    </div>
  );
};

function error() {
  return <p className="text-center text-red-800">Please enter a valid city</p>;
}

export default SearchField;

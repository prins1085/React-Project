import React from "react";

const Input = (props) => {
  return (
    <div className="mb-2">
      <label className="mb-2" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className="border rounded w-full py-2 px-3"
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;

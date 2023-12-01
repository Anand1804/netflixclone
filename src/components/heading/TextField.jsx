import React from "react";

const TextField = ({ className, text }) => {
  return (
    <div>
      <h1 className={`${className}`}>{text}</h1>
    </div>
  );
};

export default TextField;

import React from "react";

const ElementCard = (props) => {
  return (
    <div className={`border-2 border-gray-400 h-96 w-96 overflow-y-scroll bg-white text-black p-5`}>
      {Object.keys(props).map((key, index) => {
        return <div><h1 className="text-2xl border-b-2 border-black pr-4 w-min capitalize">{key}</h1><p>{props[key]}</p></div>
      })}
    </div>
  );
};

export default ElementCard;

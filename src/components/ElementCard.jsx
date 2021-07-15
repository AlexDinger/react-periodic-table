import React from "react";

const ElementCard = ({ cardState }) => {
  return (
    // <div
    //   className={`flex justify-center items-center duration-1000 inset-0 transform  ${
    //     cardState ? "z-50 absolute scale-100" : "scale-0 static z-auto"
    //   }`}
    // >
    //   <div className="bg-black opacity-50 absolute inset-0 "></div>
    //   <div className="w-1/2 h-1/2 bg-white opacity-100 absolute rounded-sm transition duration-1000"></div>
    // </div>
    <div className="w-2/5 bg-red-500 h-full "></div>
  );
};

export default ElementCard;

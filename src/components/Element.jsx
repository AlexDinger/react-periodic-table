import React, { useState } from "react";
import classNames from "classnames";

const Element = ({ atomicNum, abbreveation, name, mass, id, type }) => {
  //   switch (type) {
  //     case "diatomic nonmetal":
  //       return "red";
  //     case "noble gas":
  //       return "orange";
  //     case "alkali metal":
  //       return "blue";
  //     case "alkaline earth metal":
  //       return "gray";
  //     case "metalloid":
  //       return "yellow";
  //     case "polyatomic nonmetal":
  //       return "green";
  //     case "diatomic nonmetal":
  //       return "pink";
  //     case "post-transition metal":
  //       return "red";
  //     case "transition metal":
  //       return "red";
  //     case "lanthanide":
  //       return "red";
  //     case "actinide":
  //       return "red";
  //   }
  const backgroundColor = classNames({
    "diatomic-nonmetal": type == "diatomic nonmetal",
    "alkali-metal": type == "alkali metal",
    "noble-gas": type == "noble gas",
    "alkaline-earth-metal": type == "alkaline earth metal",
    metalloid: type == "metalloid",
    "polyatomic-nonmetal": type == "polyatomic nonmetal",
    "post-transition-metal": type == "post-transition metal",
    "transition-metal": type == "transition metal",
    lanthanide: type == "lanthanide",
    actinide: type == "actinide",
    unknown: type,
  });

  return (
    <div
      className={`${backgroundColor} flex flex-col justify-center items-start text-xs p-1 rounded-sm border-2 border-transparent hover:border-gray-800 cursor-pointer`}
      data-id={id}
    >
      <span className="self-start text-sm">{atomicNum}</span>
      <span className="capitalize text-2xl">{abbreveation}</span>
      <span className="capitalize">{name}</span>
      <span className="">{mass}</span>
    </div>
  );
};

export default Element;

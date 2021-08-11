import React from "react";
import classNames from "classnames";

const ElementIcon = (props) => {
  // prettier-ignore
  const backgroundColor = classNames({
    "diatomic-nonmetal": props.category === "diatomic nonmetal",
    "alkali-metal": props.category === "alkali metal",
    "noble-gas": props.category === "noble gas",
    "alkaline-earth-metal": props.category === "alkaline earth metal",
    "metalloid": props.category === "metalloid",
    "polyatomic-nonmetal": props.category === "polyatomic nonmetal",
    "post-transition-metal": props.category === "post-transition metal",
    "transition-metal": props.category === "transition metal",
    "lanthanide": props.category === "lanthanide",
    "actinide": props.category === "actinide",
  });


  return (

        <div
        className={`bg-blue-100 ${backgroundColor} flex flex-col justify-between items-start text-xs h-full ${props.cardState ? 'p-5' : 'p-2'}`}
      >
        <span className={`self-start ${props.cardState ? "text-4xl" : "text-sm"}`}>
          {props.number}
        </span>
        <span className={`capitalize ${props.cardState ? "text-9xl" : "text-xl"}`}>
          {props.symbol}
        </span>
        <span className={`capitalize ${props.cardState ? "text-4xl" : ""}`}>
          {props.name}
        </span>
        <span className={`${props.cardState ? "text-4xl" : ""}`}>{props.atomic_mass}</span>
      </div>

  );
};

export default ElementIcon;

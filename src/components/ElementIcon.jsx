import React from "react";
import classNames from "classnames";

const ElementIcon = ({
  atomicNum,
  abbreveation,
  name,
  mass,
  type,
  cardState,
}) => {
  // prettier-ignore
  const backgroundColor = classNames({
    "diatomic-nonmetal": type === "diatomic nonmetal",
    "alkali-metal": type === "alkali metal",
    "noble-gas": type === "noble gas",
    "alkaline-earth-metal": type === "alkaline earth metal",
    "metalloid": type === "metalloid",
    "polyatomic-nonmetal": type === "polyatomic nonmetal",
    "post-transition-metal": type === "post-transition metal",
    "transition-metal": type === "transition metal",
    "lanthanide": type === "lanthanide",
    "actinide": type === "actinide",
  });

  return (
    <div
      className={`${backgroundColor} flex flex-col justify-between items-start h-full text-xs ${
        cardState ? "w-auto p-7" : "p-2 w-full"
      }`}
    >
      <span className={`self-start ${cardState ? "text-4xl" : "text-sm"}`}>
        {atomicNum}
      </span>
      <span className={`capitalize ${cardState ? "text-9xl" : "text-xl"}`}>
        {abbreveation}
      </span>
      <span className={`capitalize ${cardState ? "text-4xl" : ""}`}>
        {name}
      </span>
      <span className={`${cardState ? "text-4xl" : ""}`}>{mass}</span>
    </div>
  );
};

export default ElementIcon;

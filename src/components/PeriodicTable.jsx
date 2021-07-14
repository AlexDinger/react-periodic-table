import React, { useState, useEffect } from "react";
import Element from "../components/Element.jsx";
import { elementData } from "../../PeriodicTable.js";

const PeriodicTable = () => {
  return (
    <div className="grid grid-flow-row grid-cols-18 gap-1 grid-rows-7 p-5 border-2 rounded-sm bg-white shadow-2xl text-gray-700">
      {elementData.map((element, index) => {
        console.log(element.category);
        let id = index + 1;
        if (id > 57 && id < 72) return;
        if (id > 89 && id < 104) return;
        return (
          <Element
            atomicNum={element.number}
            abbreveation={element.symbol}
            name={element.name}
            mass={element.atomic_mass}
            key={index}
            type={element.category}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default PeriodicTable;

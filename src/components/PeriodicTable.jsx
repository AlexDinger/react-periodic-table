import React, { useState, useEffect } from "react";
import Element from "../components/Element.jsx";
import { elementData } from "../../PeriodicTable.js";

const PeriodicTable = () => {
  return (
    <div className="border-2 border-gray-400 rounded-sm p-5 pb-1 w-full  shadow-2xl relative">
      <div className="grid grid-flow-row grid-cols-18 gap-2 grid-rows-7 bg-white pb-5 text-gray-700  overflow-scroll  periodic">
        {elementData.map((element, index) => {
          let id = index + 1;
          if (id > 57 && id < 72) return;
          if (id > 89 && id < 104) return;
          return (
            <Element
              // atomicNum={element.number}
              // abbreveation={element.symbol}
              // name={element.name}
              // mass={element.atomic_mass}
              // key={index}
              // type={element.category}
              // id={id}
              {...element}
            />
          );
        })}
      </div>
    </div>
    
  );
};

export default PeriodicTable;

import React, { useState } from "react";

import ElementCard from "./ElementCard.jsx";
import ElementIcon from "./ElementIcon.jsx";

const Element = (props) => {
  const [cardState, setCardState] = useState(false);

  return (
    // Element
    <div
      className={` ${
        cardState ? "" : ""
      }  rounded-sm border-2 border-transparent cursor-pointer overflow-hidden`}
      data-id={props.id}
      onClick={() => setCardState(!cardState)}
    >
      {cardState ? (
        <div className="bg-black absolute inset-0 z-40 opacity-70"></div>
      ) : (
        ""
      )}

      {
        // Element Wrapper
      }
      <div
        className={`${
          cardState
            ? "absolute inset-5 space-x-5 -translate-x-1/2 -translate-y-1/2 z-50 p-3 hover:scale-100 filter-none"
            : "static translate-x-0 translate-y-0 z-0 p-0 space-x-0 hover:scale-105"
        }  flex flex-row justify-between items-center transform transition duration-300 top-1/2 left-1/2 antialiased outline-white w-24 h-24`}
      >
        <ElementIcon {...props} cardState={cardState} />
        {cardState ? <ElementCard cardState={cardState} /> : ""}
      </div>
    </div>
  );
};

export default Element;

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
      }  rounded-sm border-2 border-transparent hover:border-black cursor-pointer overflow-hidden`}
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
            ? "absolute inset-5 space-x-5 -translate-x-1/2 -translate-y-1/2 z-50 p-3 "
            : "static translate-x-0 translate-y-0 z-0 p-0 space-x-0"
        }  flex flex-row justify-between items-center transform top-1/2 left-1/2`}
      >
        <ElementIcon {...props} cardState={cardState} />
        {cardState ? <ElementCard cardState={cardState} /> : ""}
      </div>
    </div>
  );
};

export default Element;

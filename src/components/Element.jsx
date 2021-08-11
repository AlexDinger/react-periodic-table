import React, { useState } from "react";

import ElementCard from "./ElementCard.jsx";
import ElementIcon from "./ElementIcon.jsx";
import ElementOverlay from "./ElementOverlay.jsx";

const Element = (props) => {
  const [cardState, setCardState] = useState(false);

  return (
    <div
      className={`rounded-sm ${cardState ? '' : 'cursor-pointer'} w-24 h-24 overflow-hidden`}
      data-id={props.number}
      onClick={cardState ? null : () => setCardState(!cardState)}
    >
      {cardState ? null : <ElementIcon {...props} cardState={cardState} /> }
      {cardState ? <div className={`bg-black ${cardState ? 'opacity-75' : 'opacity-0'} w-full h-full absolute top-0 left-0`} /> : null }


      <ElementOverlay {...props} cardState={cardState} setCardState={setCardState} /> 

      
    </div>
  );
};

export default Element;

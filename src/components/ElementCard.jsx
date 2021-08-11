import React from "react";
import CardListItem from "./CardListItem";

const ElementCard = (props) => {


  return (
    <div className={`border-2 border-gray-400 h-96 overflow-y-scroll bg-white text-black max-w-lg`}>
      <div className="border-b-2 border-gray-400 px-5 py-4 flex flex-col  justify-between space-y-2">
            <h1 className="text-2xl font-bold text-black text-left">Summary</h1>
            <p>{props.summary}</p>
        </div>
      <CardListItem title='Appearance' text={props.appearance} />
      <CardListItem title='Category' text={props.category} />
      <CardListItem title='Atomic Mass' text={props.atomic_mass} />
      <CardListItem title='Boiling Point' text={props.boil} />
      <CardListItem title='Melting Point' text={props.melt} />
      <CardListItem title='Density' text={props.density} />
      <CardListItem title='Period' text={props.period} />
      <CardListItem title='Phase' text={props.phase} />
      <CardListItem title='Source' text={props.source} />
    </div>
  );
};

export default ElementCard;
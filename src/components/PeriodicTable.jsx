import React, { useState, useEffect } from 'react'
import Element from '../components/Element.jsx';
import { elementData } from '../../PeriodicTable.js'

const PeriodicTable = () => {

    return (
        <div className="grid grid-flow-row grid-cols-18 gap-1 grid-rows-9">
            {elementData.map((element, index) => {
                return <Element atomicNum={element.number} abbreveation={element.symbol} name={element.name} mass={element.atomic_mass} key={index}/>
            })}
        </div>
    )
}

export default PeriodicTable

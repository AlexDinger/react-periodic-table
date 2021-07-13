import React from 'react'

const Element = ({ atomicNum, abbreveation, name, mass }) => {
    return (
        <div className="flex flex-col justify-center items-start text-xs text-black border-2 border-black w-20 p-2 space-y-1">
            <span className="self-start text-sm">{ atomicNum }</span>
            <span className="capitalize text-2xl">{ abbreveation }</span>
            <span className="capitalize">{ name }</span>
            <span className="">{ mass }</span>
        </div>
    )
}

export default Element

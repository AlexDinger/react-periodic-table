import React from 'react'

const CardListItem = ({ title, text }) => {
    return (
        <div className={`${title === 'Source' ? '' : 'border-b-2 border-gray-400'} px-5 py-2 flex flex-row items-center justify-between`}>
            <h1 className="text-lg font-bold text-black">{title}</h1>
            {title === 'Source' ? <a href={`${text}`}>{text}</a> : <p className="text-right capitalize">{text}</p>}
        </div>
    )
}

export default CardListItem

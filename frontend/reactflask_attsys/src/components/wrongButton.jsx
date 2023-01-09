import React from 'react'

function wrongButton({ index, symbol, title, setColor }) {

    const handleClick = () => { 
        setColor((prev) => {
            const newColor = [...prev]
            newColor[index] === 'black' ?
            newColor[index] = 'red' : newColor[index] = 'black'
            return newColor
        })
        console.log('ex button, index is: ' + index)
    }
    return (
        <div>
            <button title={title} onClick={handleClick} className='border-2 border-gray-400 w-20 rounded-sm hover:bg-red-300'>
                {symbol}
            </button>
        </div>
    )
}

export default wrongButton
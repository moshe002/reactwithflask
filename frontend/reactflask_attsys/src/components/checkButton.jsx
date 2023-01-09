import React from 'react'

function CheckButton({ index, symbol, title, setColor }) { 

    const handleClick = () => {
        setColor((prev) => {
            const newColor = [...prev]
            newColor[index] === 'black' ?
            newColor[index] = 'green' : newColor[index] = 'black'
            return newColor
        })
        console.log('check button, index is: ' + index)
    }

    return (
        <div>
            <button title={title} onClick={handleClick} className='border-2 border-gray-400 w-20 rounded-sm hover:bg-green-300'>
                {symbol}
            </button>
        </div>
  )
}

export default CheckButton
import React from 'react'

function wrongButton({ index, symbol, title, setIsPresent, setIsSelected }) {

    const handleClick = () => { 
        console.log('ex button, index is: ' + index)
        setIsPresent("red")
        setIsSelected(index)
    }
    return (
        <div>
            <button title={title} onClick={handleClick} className='border-2 border-gray-400 w-20 rounded-sm hover:bg-blue-300'>
                {symbol}
            </button>
        </div>
    )
}

export default wrongButton
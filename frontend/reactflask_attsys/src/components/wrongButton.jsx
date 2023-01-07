import React from 'react'

function wrongButton({ index, symbol, title, setIsPresent }) {

    const handleClick = () => { 
        console.log('ex button, index is: ' + index)
        setIsPresent("red")
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
import React from 'react'

function CheckButton({ index, symbol, title, setIsPresent  }) { 

    const handleClick = () => {
        console.log('check button, index is: ' + index)
        setIsPresent("green")
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
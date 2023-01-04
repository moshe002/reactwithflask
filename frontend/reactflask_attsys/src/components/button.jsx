import React from 'react'

function Button({ index, id, symbol, title, setIsPresent }) { 

    const handleClick = () => { 
        if (id === 'ex') {
            console.log('exed')
            setIsPresent(false)
            console.log(index)
        }
        else {
            console.log('checked')
            setIsPresent(true)
            console.log(index)
        }
    }

    return (
        <div>
            <button title={title} onClick={handleClick} className='border-2 border-gray-400 w-20 rounded-sm hover:bg-blue-300'>
                {symbol}
            </button>
        </div>
  )
}

export default Button
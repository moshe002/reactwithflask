import React from 'react'

function CheckButton({ index, symbol, title, setAttend, attendance, setAttendance }) { 

    const handleClick = () => {
        if (index !== undefined) {
            setAttend(index)
        }
        console.log('index is: ' + index)
        attendance.push(index)
        setAttendance(attendance)
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

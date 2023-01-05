import React from 'react'

function ExportAttendanceButton() {

    const handleClick = () => {
        console.log('export attendance')
    }

    return (
        <button 
        onClick={handleClick}
        className='bg-green-300 w-40 p-3 rounded-sm mt-10 hover:bg-blue-300'>Export Attendance</button>
    )
}

export default ExportAttendanceButton
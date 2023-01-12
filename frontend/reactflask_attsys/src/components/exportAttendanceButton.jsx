import React from 'react'

// data is an array of objects (the data in the backend (students))
// attendance is an array 
function ExportAttendanceButton({ data, attendance }) {

    const handleClick = () => {
        for(let i = 0; i < data.length; i++){
            console.log(data[i].firstname, data[i].lastname) 
        }
        console.log(attendance)
    }

    return (
        <button 
        onClick={handleClick}
        className='bg-green-300 w-40 p-3 rounded-sm mt-10 hover:bg-blue-300'>Export Attendance</button>
    )
}

export default ExportAttendanceButton
import React, { useState } from 'react'

/* 
    how to get the attendance?
    get data.firstname 
    and if the color of the firstname is green then the student is present
    else absent        
*/

function ExportAttendanceButton({ data, setColor }) {

    const [attendance, setAttendance] = useState("")

    const handleClick = () => {
        console.log('export attendance')
        for(let i = 0; i < data.length; i++){
            console.log(data[i].firstname)     
        }
    }

    return (
        <button 
        onClick={handleClick}
        className='bg-green-300 w-40 p-3 rounded-sm mt-10 hover:bg-blue-300'>Export Attendance</button>
    )
}

export default ExportAttendanceButton
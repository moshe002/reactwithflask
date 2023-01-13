import React from 'react'

// data is an array of objects (the data in the backend (students))
// attendance is an array 
function ExportAttendanceButton({ data, attendance }) {

    const handleClick = () => {
        // this for loop logs the students full name
        for(let i = 0; i < data.length; i++){
            console.log(`Student: ${data[i].firstname} ${data[i].lastname}`) 
        }
        // this for loop logs the row on which students are present
        let Attendance = [];
        for(let x = 0; x < attendance.length; x++){
            Attendance.push(`Student in row ${attendance[x] + 1} is present.\n`)
        }
        const finalAtt = Attendance.toString().replace(',', '');
        console.log(finalAtt);
        fetch("http://localhost:5000/export", {
            method: 'POST',
            body: JSON.stringify({ text: finalAtt }),
            headers: { 'Content-Type': 'application/json' },
          })
            .then((response) => {
              if (response.ok) {
                response.blob().then((blob) => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = url;
                    a.download = 'attendance.txt';
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(a);
                });
              }
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    }

    return (
        <button 
        onClick={handleClick}
        className='bg-green-300 w-40 p-3 rounded-sm mt-10 hover:bg-blue-300'>Export Attendance</button>
    );
}

export default ExportAttendanceButton;
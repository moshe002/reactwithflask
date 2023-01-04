import React, { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/members").then(res => res.json()).then(data => {
      setData(data)
      console.log(data)
    })
  }, [])

  return (
    <div className="App">
      <div className='flex flex-col justify-center items-center text-center p-10'>
      <h1 className='text-blue-500 text-3xl font-semibold'>Attendance</h1>
        <table className='table-fixed w-full mt-10'>
          <thead>
            <tr>
              <th>Course</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>ID no.</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
          {(data.map((data, index) => (
              <tr key={index}>
                <td>{data.course}</td>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.idno}</td>
                <td>{data.level}</td>
              </tr>
            ))
          )}
        </tbody>
        </table>
      </div>
    </div>
  )
}

export default App

// cd reactflask_attsys
// npm run dev 
// press 'q' to end
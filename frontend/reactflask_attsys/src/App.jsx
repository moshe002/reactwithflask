import React, { useState, useEffect } from 'react'
import './App.css'

import Button from './components/button'

function App() {

  const [data, setData] = useState([])
  const [isPresent, setIsPresent] = useState()

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {(data.map((data, index) => (
              <tr key={index}>
                <td>{data.course}</td>
                <td className={`${isPresent ? 'text-green-500' : 'text-red-500'}`}>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.idno}</td>
                <td>{data.level}</td>
                <td className='flex justify-center items-center gap-3'>
                  <Button symbol="&#10003;" index={index} id='check' title="Present" setIsPresent={setIsPresent} />
                  <Button symbol="&#65794;" index={index} id='ex' title="Absent" setIsPresent={setIsPresent} />
                </td>
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
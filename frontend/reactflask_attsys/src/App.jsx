import React, { useState, useEffect } from 'react'
import './App.css'

import CheckButton from './components/checkButton'
import WrongButton from './components/wrongButton'
import AddStudentButton from './components/addStudentButton'
import ExportAttendanceButton from './components/exportAttendanceButton'

function App() {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isPresent, setIsPresent] = useState()
  const [isSelected, setIsSelected] = useState(-1)

  useEffect(() => {
    fetch("http://localhost:5000/members").then(res => res.json()).then(data => {
      setData(data)
      console.log(data)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className="App">
      <div className='flex flex-col justify-center items-center text-center p-10'>
        <h1 className='text-blue-500 text-4xl font-bold'>Attendance</h1>
        <AddStudentButton />
        {isLoading ? 
          <h1 
          className='my-20 text-4xl font-bold'>Loading...</h1>
          : 
          <table className='table-fixed w-full mt-10 border-2'>
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
                    <td className={index === isSelected ? `text-${isPresent}-500` : 'text-black'}>{data.firstname}</td>
                    <td>{data.lastname}</td>
                    <td>{data.idno}</td>
                    <td>{data.level}</td>
                    <td className='flex justify-center items-center gap-3'>
                      <CheckButton symbol="&#10003;" index={index} title="Present" setIsPresent={setIsPresent} setIsSelected={setIsSelected} />
                      <WrongButton symbol="&#65794;" index={index} title="Absent" setIsPresent={setIsPresent} setIsSelected={setIsSelected} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          }
          <ExportAttendanceButton />
      </div>
    </div>
  )
}

export default App

// <button className='border-2 border-gray-400 w-20 rounded-sm hover:bg-blue-300' onClick={handleCheckButtonClick}>&#10003;</button>
// <button className='border-2 border-gray-400 w-20 rounded-sm hover:bg-blue-300' onClick={handleWrongButtonClick}>&#65794;</button>

// cd reactflask_attsys
// npm run dev 
// press 'q' to end
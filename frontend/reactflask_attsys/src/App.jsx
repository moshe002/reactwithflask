import React, { useState, useEffect } from 'react'
import './App.css'

import CheckButton from './components/checkButton'
import AddStudentButton from './components/addStudentButton'
import ExportAttendanceButton from './components/exportAttendanceButton'
import AddStudentModal from './components/addStudentModal'

function App() {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [attend, setAttend] = useState(-1)
  const [isModal, setIsModal] = useState(false)
  const [attendance, setAttendance] = useState([])

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
        <h1 className='text-blue-500 text-4xl font-bold'>Attendance of Students</h1>
        <AddStudentButton setIsModal={setIsModal} />
        { isModal && <AddStudentModal setIsModal={setIsModal} /> }
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
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
              {(data.map((data, index) => (
                  <tr key={index}>
                    <td>{data.course}</td>
                    <td className={attend === index ? `text-green-500` : 'text-red-500'}>{data.firstname}</td>
                    <td>{data.lastname}</td>
                    <td>{data.idno}</td>
                    <td>{data.level}</td>
                    <td className='flex justify-center items-center gap-3'>
                      <CheckButton symbol="&#10003;" index={index} title="Present" setAttend={setAttend} attendance={attendance} setAttendance={setAttendance} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          }
          <ExportAttendanceButton data={data} attendance={attendance} />
      </div>
    </div>
  )
}

export default App

// cd reactflask_attsys
// npm run dev 
// press 'q' to end
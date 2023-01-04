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
      <p>hello world</p>
      {(data.map((data, index) => (
          <p key={index}>{data.course}, {data.firstname}, {data.lastname}, {data.idno}, {data.level}</p>
        ))
      )}
    </div>
  )
}

export default App

// cd reactflask_attsys
// npm run dev 
// press 'q' to end
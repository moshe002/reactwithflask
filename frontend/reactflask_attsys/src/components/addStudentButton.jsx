import React from 'react'

function AddStudentButton() {
  
    const handleClick = () => {
        console.log('add student')
    }
  
    return (
    <button 
    onClick={handleClick}
    className='bg-gray-300 w-32 p-1 rounded-sm mt-10 hover:bg-blue-300'>Add Student +</button>
  )
}

export default AddStudentButton
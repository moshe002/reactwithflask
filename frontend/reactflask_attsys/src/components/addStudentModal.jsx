import React, { useState } from 'react'

function AddStudentModal({ setIsModal }) {

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        fetch("http://localhost:5000/savestudent", {
            method: 'POST',
            body: formData,
          }).then(res => res.json())
          .then(response => console.log('Success:', JSON.stringify(response)))
          .catch(error => console.error('Error:', error))
          alert("Student Added!")
    }

  return (    
    <div className='fixed w-full h-full top-0 left-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
        <div className='pt-5 pb-10 px-10 relative bg-green-200 rounded-sm shadow-2xl'>
            <button 
            //close button
            className='absolute w-12 p-1 right-6 text-2xl hover:bg-blue-300 rounded-sm'
            onClick={() => setIsModal(false)}>&#65794;</button>
            <br /><br />
            <h1 className='mb-5 font-bold text-lg'>Add Student Form</h1>
            <form onSubmit={handleSubmit} method='POST' action='/savestudent'>
                <div>
                    <label htmlFor="idno">ID Number: </label>
                    <input className='outline-none p-1' name='idno' id='idno' type="number" required />
                </div>
                <br />
                <div>
                    <label htmlFor="firstname">Firstname: </label>
                    <input className='outline-none p-1' name='firstname' id='firstname' type="text" required />
                </div>
                <br />
                <div>
                    <label htmlFor="lastname">Lastname: </label>
                    <input className='outline-none p-1' name='lastname' id='lastname' type="text" required />
                </div>
                <br />
                <div>
                    <label htmlFor="level">Level: </label>
                        <select className='outline-none p-1' name="level" id="level" required >
                            <option value="1">1st Year</option>
                            <option value="2">2nd Year</option>
                            <option value="3">3rd Year</option>
                            <option value="4">4th Year</option>
                        </select>
                </div>
                <br />
                <div>
                    <label htmlFor="course">Course: </label>
                        <select className='outline-none p-1' name="course" id="course" required >
                            <option value="bsit">BSIT</option>
                            <option value="bscs">BSCS</option>
                            <option value="bsis">BSIS</option>
                            <option value="bscompe">BSCompE</option>
                        </select>
                </div>
                <br />
                <button
                className='w-24 p-1 bg-gray-300 hover:bg-blue-300 rounded-sm'
                type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AddStudentModal
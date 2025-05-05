import React, { useState } from 'react'

const FormApp = () => {
    const [username , setusername] = useState('');
    const [email , setemail] = useState('');

    const handleSunmit = (e) => {
        e.preventDefault();
        console.log(username);
    }
  return (
    <div>
      <form onSubmit={handleSunmit} >
        <input type="text" placeholder='Enter Username.' onChange={(e) => setusername(e.target.value) } />
        <input type="Email" value={email} placeholder='Enter Email.' onChange={(e) => setemail(e.target.value) } />
        <button type='submit'>Submit.</button>
      </form>
    </div>
  )
}

export default FormApp

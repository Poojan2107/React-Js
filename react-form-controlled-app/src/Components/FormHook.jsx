import React from 'react'
import { useForm } from 'react-hook-form'

const FormHook = () => {
   const {register, handleSubmit} = useForm();

   const onSubmit = (data) => {
    alert(`Username: ${data.Username}, Email: ${data.Email}`);
    console.log(data)
   }
return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("Username")} placeholder='Enter Username...' />
        <input {...register("Email")} placeholder='Enter Email...' />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormHook;

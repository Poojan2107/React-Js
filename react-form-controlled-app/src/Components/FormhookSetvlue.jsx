import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const FormHook = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`Name: ${data.name}, Email: ${data.email}`);
    console.log(data);
  };

  const fillForm = () => {
    setValue('name', 'Poojan Shrivastav');
    setValue('email', 'poojan@example.com');
  };

  useEffect(() => {
    fillForm();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name', { required: true })}
          placeholder="Enter Name..."
        />
        {errors.name && <p>Name is required</p>}

        <input
          {...register('email', { required: true })}
          placeholder="Enter Email..."
        />
        {errors.email && <p>Email is required</p>}

        <button type="submit">Submit</button>
        <button type="button" onClick={fillForm}>Fill</button>
        <button type="button" onClick={() => reset()}>Reset</button>
      </form>
    </div>
  );
};

export default FormHook;

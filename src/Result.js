import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const state = useSelector(state => state)
  const navigate = useNavigate()

  const onSubmit = () => {
    
    navigate("./submit")

  };
  

  return (
    <>
      <h1 className='text-4xl	'>Review</h1>
      <div className="h-5 divider"></div>
      <p className='text-2xl'>Your Name: {state.firstName} {state.lastName}</p>
      <p className='text-2xl'>Your Email: {state.email} </p>
      <p className='text-2xl'>Your Password: {state.password} </p>
      <p className='text-2xl'>Your Age: {state.age} </p>
      <p className='text-2xl'>Your Gender: {state.gender} </p>
      <p className='text-2xl'>Your Phone Number: {state.phoneNumber} </p>
      <p className='text-2xl'>Your Adress: {state.adress} </p>
      
      <form onSubmit={(onSubmit)}>
      <input className='mt-4 btn w-full max-w-xs text-white' type="submit" value="Submit" />
      </form>
    </>
  )
};

export default Result;
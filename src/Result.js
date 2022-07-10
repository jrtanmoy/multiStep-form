import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

const Result = () => {
  const state = useSelector(state => state)
  const navigate = useNavigate()

  const onSubmit = () => {

    navigate("./submit")

  };


  return (
    <>
      <h1 className='text-4xl	text-center'>Review</h1>
      <div className="h-5 divider"></div>
      <div className=''>
        <p className='text-2xl'>Your Name: {state.firstName} {state.lastName}</p>
        <p className='text-2xl'>Your Email: {state.email} </p>
        <p className='text-2xl'>Your Password: {state.password} </p>
        <p className='text-2xl'>Your Age: {state.age} </p>
        <p className='text-2xl'>Your Gender: {state.gender} </p>
        <p className='text-2xl'>Your Phone Number: {state.phoneNumber} </p>
        <p className='text-2xl'>Your Adress: {state.adress} </p>
      </div>

      <form onSubmit={(onSubmit)}>
        <div className="flex justify-center">
          <input className='mt-4 btn w-full max-w-xs text-white' type="submit" value="Submit" />
        </div>
        <Link className="flex justify-center" to="/step2/step3/step4"><button class="mt-2 btn w-full max-w-xs text-white">Back</button></Link>
      </form>
    </>
  )
};

export default Result;
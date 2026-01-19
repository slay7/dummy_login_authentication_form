import React from 'react'
import { Link } from 'react-router-dom'
import Email from '../utils/Email'
import Password from '../utils/Password'
import Button from '../utils/Button'
import Name from '../utils/Name'


const Register = () => {
  
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#E7F1FC] via-[#F3F8FF] to-[#DCEBFF] flex items-center justify-center'>
      <div className='w-[500px] h-[500px] bg-white rounded-[30px] shadow-xl flex flex-col'>
        <div className='mt-5 flex justify-center text-3xl font-semibold'>
          Register Now !!
        </div>
        <div className='mt-1 flex justify-center text-xs text-gray-600'>
          Please create your account
        </div>
        <div className= 'mt-4 flex justify-center'>
          <Name/>
        </div>
        <div className= 'mt-4 flex justify-center'>
          <Email/>
        </div>
        <div className='mt-4 flex justify-center'>
          <Password label="Password"/>
        </div>
        <div className='mt-4 flex justify-center'>
          <Password label="Confirm Password"/>
        </div>
        <div className='mt-5 flex justify-center'>
          <Button label="Register"/>
        </div>
        <p className='mt-auto mb-5 text-center text-sm'>
          <span className='text-gray-500'>Already have an account?</span> {" "}
          <Link to="/" className="text-blue-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
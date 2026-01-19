import React, {useEffect, useState} from 'react'
import {useNavigate, Link} from "react-router-dom"
import Email from '../utils/Email'
import Password from '../utils/Password'
import Button from '../utils/Button'
import Options from '../utils/Options'


const Login = () => {
  const [isLogin, setLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    if(isLogin){
      navigate("/home");
    }
  }, [isLogin, navigate]);

  const handleSign=()=> {
    setLogin(true);
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#E7F1FC] via-[#F3F8FF] to-[#DCEBFF] flex items-center justify-center'>
      <div className='w-[500px] h-[500px] bg-white rounded-[30px] shadow-xl flex flex-col'>
        <div className='mt-5 flex justify-center text-3xl font-semibold'>
          Welcome Back !! 
        </div>
        <div className='mt-1 flex justify-center text-xs text-gray-600'>
          Please sign in to your account
        </div>
        <div className= 'mt-4 flex justify-center'>
          <Email/>
        </div>
        <div className='mt-4 flex justify-center'>
          <Password label="Password"/>
        </div>
        <div className='mt-5 flex justify-center' onClick={handleSign}>
          <Button label="Login"/>
        </div>
        <div className='mt-4 flex justify-center'>
          <span className='text-gray-500 text-sm'>Don't remember your password?</span> {"  "}
          <Link to="/forget" className="text-blue-600 text-sm font-semibold hover:underline">
            Forget Password
          </Link>
        </div>
        <div className='mt-5 flex flex-col items-center gap-3'>
          <label className='font-semibold text-sm'>Login With</label>
          <Options/>
        </div>
        <p className='mt-auto mb-5 text-center text-sm'>
          <span className='text-gray-500'>Don’t have an account?</span> {" "}
          <Link to="/register" className="text-blue-600 font-semibold hover:underline">
            Register now
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
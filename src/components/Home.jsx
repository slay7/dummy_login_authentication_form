import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
  <>   
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800">
        Home
      </h1>
    </div>
    <Link to ="/" className="absolute top-5 right-5 text-red-700 font-semibold hover:underline">
      Logout
    </Link>  
  </>
  )
}

export default Home
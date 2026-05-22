import React from 'react'
import { Link } from 'react-router'

const LoginPage = () => {
  return (
    <div className='w-full h-screen bg-blue-200 flex flex-col items-center justify-center gap-4'>
      <Link className='bg-blue-500 text-white p-4 px-6 rounded-lg shadow-lg w-48 text-center uppercase font-semibold'  to='/login/student'>Student Login</Link>
      <Link className='bg-green-500 text-white p-4 px-6 rounded-lg shadow-lg w-48 text-center uppercase font-semibold' to='/login/faculty'>Faculty Login</Link>
    </div>
  )
}

export default LoginPage
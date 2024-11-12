import React from 'react';
import { useFormik } from 'formik';
import {SignupForm} from './components/userForm/userForm'
import {userCreate} from './components/userCreate/userCreate'
import './App.css'

function App() {

  return (
    <>
    {/* <userCreate/> */}
      <SignupForm/>
    </>
  )
}

export default App

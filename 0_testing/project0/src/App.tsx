import { ReactElement, useState } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import {userContext} from './components/context/userContext'
import { SignupForm } from './components/userForm/userForm';
//<Dashboard user={user.name} email={user.email}/> 



export default function App():ReactElement {
const userY = {
  name: 'Иван Петров',
  email: 'email@ya.ru'
}
const [user] = useState({name: userY.name, email: userY.email});

  return (
    <>
    <userContext.Provider value={user}>
      <Dashboard/> 
    </userContext.Provider>
    {/* <Dashboard/> */}
      <SignupForm/>
    </>
  )
}


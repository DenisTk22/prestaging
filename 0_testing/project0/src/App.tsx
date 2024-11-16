import { ReactElement, useState } from 'react';
// import Dashboard from './components/dashboard/Dashboard';
// import {UserContext} from './components/context/userContext'
import { SignupForm } from './components/userForm/userForm';
//<Dashboard user={user.name} email={user.email}/> 



export default function App(): ReactElement {
  const user = {
    name: 'Иван Петров',
    email: 'email@ya.ru'
  }
  const [name, setName] = useState({ name: user.name });
  const [email, setEmail] = useState({ email: user.email })

  return (
    <>
      {/* <UserContext.Provider value={user}>
      <Dashboard/> 
    </UserContext.Provider> */}
      {/* <Dashboard/> */}
      <SignupForm />
    </>
  )
}


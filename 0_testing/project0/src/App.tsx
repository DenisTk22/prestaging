import { ReactElement } from 'react';
import Dashboard from './components/dashboard/Dashboard';

const user:{name:string, email:string} = {
  name: 'Иван Иванов',
  email: 'email@ya.ru'
}

//<Dashboard user={user.name} email={user.email}/> 

function App():ReactElement {

  return (
    <>
      <Dashboard/> 
      {/* <SignupForm/> */}
    </>
  )
}

export default App

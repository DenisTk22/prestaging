import { ReactElement } from 'react';
import Employees from './components/employees/Employees';
import Calculator from './components/Calculator';

export default function App(): ReactElement {

  return (
    <div>
      <Calculator/>
      <Employees />
    </div>
  )
}

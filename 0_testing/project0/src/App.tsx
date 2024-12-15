import { ReactElement } from 'react';
import Product from './components/product/Product';
import User from './components/user/User';
import Employees from './components/employees/Employees';

export default function App(): ReactElement {
  // const salary1 = 100000;
  // const salary2 = 155000;
  // const salary3 = 200000;

  // const employees = [
  //   { id: 1, surname: 'Petrov', name: 'Petr', patronymic: 'Vadimuch', salary: salary1, inCart: false },
  //   { id: 2, surname: 'Ivanov', name: 'Ivan', patronymic: 'Ivanovich', salary: salary2, inCart: false },
  //   { id: 3, surname: 'Tkachev', name: 'Denis', patronymic: 'Vadimovich', salary: salary3, inCart: false},
  // ]

  // const staff = employees.map(employee => {
  //   return <Employees 
  //     key={employee.id}
  //     />
  // })
  return (
    <div>
      {/* {staff} */}
      <Employees />
    </div>
    
  )
}

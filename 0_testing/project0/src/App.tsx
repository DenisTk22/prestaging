import { ReactElement } from 'react';
import Product from './components/product/Product';
import User from './components/user/User';
import Employees from './components/employee/Employee';

export default function App(): ReactElement {
  const salary1 = 100000;
  const salary2 = 155000;
  const salary3 = 200000;

  const employees = [
    { id: 1, surname: 'Petrov', name: 'Petr', patronymic: 'Vadimuch', salary: salary1, inCart:false, addToCart:{}  },
    { id: 2, surname: 'Ivanov', name: 'Ivan', patronymic: 'Ivanovich', salary: salary2 },
    { id: 3, surname: 'Tkachev', name: 'Denis', patronymic: 'Vadimuch', salary: salary3 },
  ]

  const staff = employees.map(employee => {
    return <Employees key={employee.id} id={employee.id} surname={employee.surname} name={employee.name} patronymic={employee.patronymic} salary={employee.salary} inCart={false} addToCart={}  />
  })
  return (
    <div>
      {staff}
    </div>
  )
}

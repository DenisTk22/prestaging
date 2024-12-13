import React, { useState } from 'react'
import Employee from '../employee/Employee'

const initEmployees = [
    { id: 1, surname: 'Petrov', name: 'Petr', patronymic: 'Vadimuch', salary: 100000, inCart: false },
    { id: 2, surname: 'Ivanov', name: 'Ivan', patronymic: 'Ivanovich', salary: 150000, inCart: false },
    { id: 3, surname: 'Tkachev', name: 'Denis', patronymic: 'Vadimuch', salary: 200000, inCart: false },
]

export default function Employees() {

   const [empls, setEmpls] = useState(initEmployees);

   const addToCart = (id:number) => {
    setEmpls(empls.map(empl => {
        if(empl.id === id) {
            empl.inCart = true;
        }
        return empl
    }));
   }

    const items = empls.map(empl => {
        return <Employee 
            key={empl.id}
            id={empl.id}
            surname={empl.surname}
            salary={empl.salary}
            name={empl.name}
            inCart={empl.inCart}
            addToCart={addToCart}
            />
    });

    return <div>
        {items}
    </div>;
}
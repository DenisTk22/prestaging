import React, { useState } from 'react'
import Employee from '../employee/Employee'

const initEmployees = [
    { id: 1, surname: 'Petrov', name: 'Petr', patronymic: 'Vadimuch', salary: 100000 },
    { id: 2, surname: 'Ivanov', name: 'Ivan', patronymic: 'Ivanovich', salary: 150000 },
    { id: 3, surname: 'Tkachev', name: 'Denis', patronymic: 'Vadimuch', salary: 200000 },
]

export default function Employees() {

   const [empls, setEmpls] = useState(initEmployees);

    const items = empls.map(empl => {
        return <Employee 
            key={empl.id}
            surname={empl.surname}
            salary={empl.salary}
            name={empl.name}       />
    })

    return <div>
        {items}
    </div>;
}
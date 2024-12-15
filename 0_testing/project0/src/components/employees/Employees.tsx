import React, { useState } from 'react'
import Employee from '../employee/Employee'
import { Field } from 'formik';
import { string } from 'yup';

const initEmployees = [
    { id: 1, surname: 'Petrov', name: 'Petr', patronymic: 'Vadimuch', salary: 100000, inCart: false, isBan: false, isEdit: false },
    { id: 2, surname: 'Ivanov', name: 'Ivan', patronymic: 'Ivanovich', salary: 155000, inCart: false, isBan: false, isEdit: false },
    { id: 3, surname: 'Tkachev', name: 'Denis', patronymic: 'Vadimuch', salary: 200000, inCart: false, isBan: false, isEdit: false },
]

export default function Employees() {

    const [empls, setEmpls] = useState(initEmployees);

    const addToCart = (id: number) => {
        setEmpls(empls.map(empl => {
            if (empl.id === id) {
                empl.inCart = true;
            }
            return empl
        }));
    }

    const addToBan = (id: number) => {
        setEmpls(empls.map(empl => {
            if (empl.id === id) {
                empl.isBan = true;
            }
            return empl
        }));
    }

    const toggleMode = (id: number) => {
        setEmpls(empls.map(empl => {
            if (empl.id === id) {
                empl.isEdit = !empl.isEdit;
            }
            return empl
        }));
    }

    type fieldInputs = {
        [key: string]: string | number;

    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const editEmpl = (id: number, field: fieldInputs, event: { target: { value: string; } }) => {
        setEmpls(empls.map(empl => {
            if (empl.id === id) {
                empl[field] = event.target.value
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
            isBan={empl.isBan}
            addToBan={addToBan}
            isEdit={empl.isEdit}
            toggleMode={toggleMode}
            editEmpl={editEmpl}
        />
    });

    return <div>
        {items}
    </div>;
}
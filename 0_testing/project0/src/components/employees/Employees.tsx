import { useState } from 'react'
import Employee from '../employee/Employee'

const initEmployees = [
    { id: 1, surname: 'surname1', name: 'name1', patronymic: 'patronymic1', salary: 'salary1', inCart: false, isBan: false, isEdit: false },
    { id: 2, surname: 'surname2', name: 'name2', patronymic: 'patronymic2', salary: 'salary2', inCart: false, isBan: false, isEdit: false },
    { id: 3, surname: 'surname3', name: 'name3', patronymic: 'patronymic3', salary: 'salary3', inCart: false, isBan: false, isEdit: false },
]

export default function Employees() {

    const [empls, setEmpls] = useState(initEmployees);


    type fieldInputs = {
        [key: string]: string | number;

    }

    const editEmpl = (id: number, field: fieldInputs, event: { target: { value: string; } }) => {
        setEmpls(empls.map(empl => {
            if (empl.id === id) {
                empl[field] = event.target.value
            }
            return empl
        }));
    }

    const rows = empls.map(empl=> {
        return <Employee
            key={empl.id}
            id={empl.id}
            surname={empl.surname}
            salary={empl.salary}
            name={empl.name}
            editEmpl={editEmpl}
        />
    })

    return <div>
        <table>
            <tbody>
                {rows}
            </tbody>
        </table>
    </div>;
}
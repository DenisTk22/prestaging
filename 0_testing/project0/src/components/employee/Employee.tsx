import EmptField from "../emptField/EmptField"

interface employeeData {
    id: number,
    surname: string,
    name: string,
    patronymic?: string,
    salary: number | string,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    editEmpl:Function
}

const Employee = ({ id, surname, name, salary, editEmpl  }: employeeData) => {

    return (
        <tr>
            <EmptField 
                id={id}
                text={name}
                type='name'
                editEmpt={editEmpl}
            />,
            <EmptField
                id={id}
                text={surname}
                type='surname'
                editEmpt={editEmpl}
            />,
            <EmptField
                id={id}
                text={salary}
                type='salary'
                editEmpt={editEmpl}
            />
        </tr>
    )
}

export default Employee;
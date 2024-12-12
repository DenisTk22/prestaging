
interface employeeData {
    id?: number,
    surname: string,
    name: string,
    patronymic?: string,
    salary: number
}

const Employee = ({ surname, name, salary }: employeeData) => {

    return <p>
        name: <span>{name}</span>
        surname: <span>{surname}</span>
        salary: <span>{salary}</span>
    </p>
}

export default Employee;

interface employeeData {
    id?: number,
    surname: string,
    name: string,
    patronymic?: string,
    salary: number,
    inCart: boolean,
    addToCart: Function,
    
}

const Employee = ({ id, surname, name, salary, inCart, addToCart }: employeeData) => {

    return <p>
        id: <span>{id}</span>,
        name: <span>{name}</span>,
        surname: <span>{surname}</span>,
        salary: <span>{salary}</span>,
        <span>{inCart ? 'in cart' : 'not in cart'}</span>
        <button onClick={() => addToCart(id)}>to cart</button>
    </p>
}

export default Employee;
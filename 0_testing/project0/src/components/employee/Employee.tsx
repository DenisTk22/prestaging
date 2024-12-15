
interface employeeData {
    id: number,
    surname: string,
    name: string,
    patronymic?: string,
    salary: number,
    inCart?: boolean,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    addToCart: Function,
    isBan: boolean,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    addToBan: Function,
    isEdit: boolean,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    toggleMode:Function,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    editEmpl:Function
}

const Employee = ({ id, surname, name, salary, inCart, addToCart, isBan, addToBan, isEdit, toggleMode, editEmpl  }: employeeData) => {

    return (
        <p>
            id: <span>{id}</span>,
            name: {isEdit ? <input name="name" value={name} onChange={event => editEmpl(id, 'name', event)}/>:<span>{name}</span>},
            surname: {isEdit ? <input name="surname" value={surname} onChange={event => editEmpl(id, 'surname', event)}/>:<span>{surname}</span>},
            salary: {isEdit ? <input name="salary" value={salary} onChange={event => editEmpl(id, 'salary', event)}/>:<span>{salary}</span>}<br />
            {/* <span>{inCart ? ' in cart' : ' not in cart'}</span>
            <button onClick={() => addToCart(id)}>to cart</button><br/> */}
            <span>{isBan ? ' banned ' : ' not banned '}</span>
            <button onClick={() => addToBan(id)}>Ban</button><br />
            <button onClick={() => toggleMode(id)}>{isEdit ? 'save' : 'edit'}</button>
        </p>
    )
}

export default Employee;
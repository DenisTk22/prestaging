import { ReactElement } from "react"
interface waterData {
    temp: number
}

const Verdict = ({temp}:waterData):ReactElement => {
    if (temp <= 0) {return (
        <p>Вода замерзла</p>
    )} else if (temp > 0 && temp < 100) {
        return <p>Вода жидкая</p>
    } else return <p>Вода испарилась</p>
}

export default Verdict
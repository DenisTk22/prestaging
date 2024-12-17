import { ReactElement } from "react"
interface waterData {
    temp: number
}

const Verdict = ({temp}:waterData):ReactElement => {
    const f = (temp*9/5)+32
    if (temp <= 0) {return (
        <p>Вода замерзла, в Фарингейтах {f} градусов</p>
    )} else if (temp > 0 && temp < 100) {
        return <p>Вода жидкая, в Фарингейтах {f} градусов</p>
    } else return <p>Вода испарилась, в Фарингейтах {f} градусов</p>
}

export default Verdict
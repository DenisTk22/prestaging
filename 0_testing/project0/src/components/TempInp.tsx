interface waterData {
    temp: number
    setTemp: Function
}

const TempInp = ({temp, setTemp}:waterData) => {

    return (
        <input  onChange={() => setTemp(temp)}  />
    )
}

export default TempInp
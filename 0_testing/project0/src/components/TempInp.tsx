interface waterData {
    setTemp: Function
}

const TempInp = ({setTemp}:waterData) => {

    return (
        <input onChange={(e) => setTemp(e.target.value)}  />
    )
}

export default TempInp
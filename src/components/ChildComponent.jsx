const Greet = ({name,counter}) => {
    
    return (
        <div>
            <p>Привет, {name}! Текущий счетчик: {counter}</p>
        </div>
    )
}
export default Greet;
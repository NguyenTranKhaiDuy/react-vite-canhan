
const TodoNew = (props) => {
    // console.log(">>> check point:", props)
    const { addNewTodo } = props;
    // addNewTodo("Duy");

    // fire: khai hỏa / chạy 
    const handleClick = () => {
        alert("click me")
    }

    const handleOnChange = (name) => {
        console.log(">>> handleInChange", name)
    }
    return (
        <div className="todo-new">
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
        </div>
    )
}

export default TodoNew;
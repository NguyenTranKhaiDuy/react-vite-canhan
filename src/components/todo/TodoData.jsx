
const TodoData = (props) => {

    //props la 1 object {}
    // {
    //     name: "Khai Duy",
    //     age: 25,
    //     data: {}
    // }
    const {name, age, data} = props;
    console.log(">>> check props:", props)
    return (
        <div className='todo-data'>
            <div>My name is {name} </div>
            <div>Age {age}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
        </div>
    )
}

export default TodoData;
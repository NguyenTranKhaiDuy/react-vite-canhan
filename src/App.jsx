import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';

const App = () => {

  const hoidanit = 'Khai Duy';
  const age = 21;
  const data = {
    address: "Tien Giang",
    coutry: "Viet Nam"
  }

  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }

  //truyền prop từ cha sang con: {key: value}
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={hoidanit}
        age={age}
        data={data}

      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
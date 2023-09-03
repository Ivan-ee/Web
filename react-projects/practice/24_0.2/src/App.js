import './App.css';
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState([])

    const addTodoHandler = (text) => {
        setTodos([...todos, text])
    }
    const deleteTodoHandler = (index) => {
        setTodos(todos.filter((_, idx) => idx !== index))
    }

    return (
        <div className="App">
            <h1>ToDo App</h1>
            <TodoForm addTodo={addTodoHandler}/>
            <TodoList todos={todos} deleteTodo={deleteTodoHandler}/>
        </div>
    );
}

export default App;

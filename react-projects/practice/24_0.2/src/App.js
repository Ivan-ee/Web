import './App.css';
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";
import TodoActions from "./components/Todo/TodoActions";
import {useState} from "react";
import {v4 as uuid} from 'uuid'

function App() {
    const [todos, setTodos] = useState([])

    const addTodoHandler = (text) => {
        const newTodo = {
            text: text,
            isCompleted: false,
            id: uuid(),
        }
        setTodos([...todos, newTodo])
    }
    const deleteTodoHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const resetTodosHandler = () => {
        setTodos([])
    }

    const deleteCompletedTodoHandler = () => {
        setTodos(todos.filter(todo => !todo.isCompleted))
    }

    const toggleTodoHandler = (id) => {
        setTodos(todos.map(todo => {
            return todo.id === id
                ? {...todo, isCompleted: !todo.isCompleted}
                : {...todo}
        }))
    }

    const completedTodosCount = todos.filter(todo => todo.isCompleted).length

    return (
        <div className="App">
            <h1>ToDo App</h1>
            <TodoForm addTodo={addTodoHandler}/>

            {!!todos.length &&
                <TodoActions
                    competedTodosExist={!!completedTodosCount}
                    resetTodos={resetTodosHandler}
                    deleteCompletedTodo={deleteCompletedTodoHandler}/>}
            <TodoList todos={todos}
                      deleteTodo={deleteTodoHandler}
                      toggleTodo={toggleTodoHandler}/>
            {!!completedTodosCount && <h2>{`You have ${completedTodosCount} completed ${completedTodosCount > 1
                ? 'todos'
                : 'todo'}`}</h2>}
        </div>
    );
}

export default App;

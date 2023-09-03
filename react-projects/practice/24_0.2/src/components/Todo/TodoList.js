import Todo from "./Todo";
import styles from './TodoList.module.css'

function TodoList({todos, deleteTodo}) {
    return (
        <div className={styles.todoListContainer}>
            {todos.length
                ? todos.map((todo, index) => <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo}/>)
                : <h2>Todo list is empty</h2>}
        </div>
    )
}

export default TodoList
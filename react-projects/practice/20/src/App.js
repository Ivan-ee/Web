import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [todo, setTodo] = useState(null)
    console.log(todo)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setTodo(json))
    }, []);

    console.log(todo)

    return (
        <div className="App">

        </div>
    );
}

export default App;

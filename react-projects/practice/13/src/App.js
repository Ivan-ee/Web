import {useState} from "react";
import './App.css';
import Button from './components/Button';
import Counter from "./components/Counter";

const texts = ['Click Me', 'Hello', 'Good van', 'Please!']

function App() {
    const [count, setCount] = useState(0)
    const incrementCounter = () => {
        setCount(count + 1)
    }

    return (
        <div className="App">
            <Counter count={count}/>
            {texts.map(text => {
                return <Button onClick={incrementCounter} text={text}/>
            })}
        </div>
    );
}

export default App;

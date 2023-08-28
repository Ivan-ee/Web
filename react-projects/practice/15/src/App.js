import {useState} from "react";
import './App.css';
import Counter from "./components/Counter";
import Button from "./components/Button";
import ResetButton from "./components/ResetButton";

const texts = ['Click Me', 'Hello', 'Biba', 'Good Van!']

function App() {
    const [count, setCount] = useState(0)
    const incrementCounter = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(0)
    }

    return (
        <div className="App">
            <Counter count={count}/>

            {texts.map((text) => {
                return <Button onClick={incrementCounter} text={text}/>
            })}

            <ResetButton count={count} onClick={resetCount}/>

        </div>
    );
}

export default App;

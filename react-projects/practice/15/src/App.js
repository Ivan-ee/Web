import {useState} from "react";
import './App.css';
import Counter from "./components/Counter";
import Button from "./components/Button";

const texts = ['Click Me', 'Hello', 'Biba', 'Good Van!']

function App() {
    const [count, setCount] = useState(0)
    const incrementCounter = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(0)
    }

    const buttonStyle = {backgroundColor: 'red'}

    return (
        <div className="App">
            <Counter count={count}/>

            {texts.map((text) => {
                return <Button onClick={incrementCounter} text={text}/>
            })}

            {count > 0 && (
                <div>
                    <button style={buttonStyle} onClick={resetCount}>Reset</button>
                </div>
            )}

        </div>
    );
}

export default App;

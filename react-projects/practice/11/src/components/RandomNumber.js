import {useState} from "react";
import GenerateRandomNumber from "./GenerateRandomNumber";

function RandomNumber({maxValue}) {
    const [randomNum, setRandomNum] = useState(GenerateRandomNumber(maxValue))
    const changeRandomNumber = () => {
        setRandomNum(GenerateRandomNumber(maxValue))
    }

    return (
        <div>
            <h1>{randomNum}</h1>
            <button onClick={changeRandomNumber}>Generate new number</button>
        </div>
    )
}

export default RandomNumber
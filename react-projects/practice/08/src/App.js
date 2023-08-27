import './App.css';
import MyComponent from "./components/MyComponent";
import SomeText from "./components/SomeText";

function App() {
    return (
        <div className="App">
            <MyComponent/>
            <SomeText/>
            <MyComponent/>
            <MyComponent/>
        </div>
    );
}

export default App;

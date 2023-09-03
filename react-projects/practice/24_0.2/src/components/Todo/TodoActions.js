import Button from "../UI/Button";
import {RiDeleteBin2Line, RiRefreshLine} from "react-icons/ri";

function TodoActions({resetTodos, deleteCompletedTodo, competedTodosExist}) {
    return (
        <>
            <Button title="Reset todos" onClick={resetTodos}><RiRefreshLine/></Button>
            <Button title="Delete complete todos" onClick={deleteCompletedTodo}
                    disable={!competedTodosExist}><RiDeleteBin2Line/></Button>
        </>
    )
}

export default TodoActions
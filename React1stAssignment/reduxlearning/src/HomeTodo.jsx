import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './HomeTodo.css'
function HomeTodo (){
    const todos = useSelector(state=> state.todos.list);
    return(
        <>
        <div className="Home-section">
            <h2 className="heading">ALL Todos</h2>
            {todos.map(todo=>(
                <li className="todo-list" key={todo.id}>
                    {todo.text}
                </li>
            ))}
        </div>
        <h2><Link to='/'> Add Todo</Link></h2>
        </>
    )
}
export default HomeTodo;
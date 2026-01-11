import { useState } from "react"
import { useDispatch , useSelector } from "react-redux"
import { addTodo,DeleteTodo } from "./Utils.js/TodoSlice"
import { Link } from "react-router-dom";
import './Todo.css'
function Todo(){
const [text , SetText] = useState('');
const todos = useSelector(state => state.todos.list);
const dispatch = useDispatch();


 return(
    <>
    <div >
      <h2>
         My Todo
      </h2>
      <div className="todo-section">
       
         <input type="text" placeholder="Add To Todo"  value={text} onChange={(e) =>SetText(e.target.value)}>
         </input>
         <button className="button" onClick={()=>{
            dispatch(addTodo(text))
            SetText('')

         }}>
            Add ToDo
         </button>

      </div>

      <div className="todos">
         {todos.map(todo =>(
            <li className="todo-display" key={todo.id}>
               {todo.text}
             <button  className="deletetodo" onClick={()=>dispatch(DeleteTodo(todo.id))}>Delete</button>
            </li>
         ))}
      </div>
   
      </div>
      <h2 className="routing"><Link to="/abouttodos"> About Todo</Link></h2>
    </>
 )   
}

export default Todo
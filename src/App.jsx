 import { tododispatch, todoselector } from "./redux/hooks"; 
import { useState } from "react";
import { addtodo, removetodo } from "./redux/slice/todoslice";
import './App.css';
const Todoapp = () => {
  const dispatch = tododispatch(); 
  const todos = todoselector((state) => state.todo.todos); 

  const [data,setdata]=useState('');
  const inputhandle=(e)=>{
    e.preventDefault();
    setdata(e.target.value);
  }
  const clickhandle=(e)=>{
    e.preventDefault();
    if(data.length>1){
    dispatch(addtodo(data));
    setdata('');
    }
  }
  return (
    <>
    <div className="todo">
      <p className="todoname">TODOAPP</p>
    
      <div className="todobox1">
        <input className="todoinput" placeholder="Enter" value={data} onChange={inputhandle}></input>
        <button className="button" onClick={clickhandle}>ADD</button>
      </div>
      <div>
        <ul>
          {todos.map((todo) => (
            <li className="listitem"
            key={todo.id}>
              <input className="checkbox" type="checkbox"></input>
              <div className="listtext">{todo.text}</div>
            <button className="button1"  onClick={()=> dispatch(removetodo(todo.id))}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </>
  );
};

export default Todoapp;

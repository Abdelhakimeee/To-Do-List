import './App.css';
import React, {useState, useRef, } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const inputRef = useRef()

  const handleAddTodo =()=>{
    let text = inputRef.current.value;
    let newItem = {completed: false, text}
    setTodos([...todos, newItem])
    inputRef.current.value = "";
  }
  const handleItemDone = (index)=>{
    let newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }
  const handleDeleteItem =(index)=>{
    let newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  console.log(todos)
  return (
    <div className="App">
      <h2>To Do List</h2>

      <div className='todo-container'>
        <ul>
          {todos.map((todos, index)=>{
            return <div key={index} className='tod'> 
            <li 
             className={todos.completed ? 'done' : ""}
             onClick={()=>handleItemDone(index)}
             >{todos.text}
             </li>

             <span  
             onClick={()=>handleDeleteItem(index)}
             >❌</span>
             </div>
          })}
        </ul>

        <input className='tod-input' ref={inputRef} placeholder='Enter item...' />

        <button className='tod-button' onClick={handleAddTodo} >
          Add
        </button>
      </div>
    </div>
  );
}

export default App;

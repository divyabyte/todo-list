import './App.css';
import React, { useState } from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from './components/TodoList';

function App() {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="container">
      <header className="App-header">
        <div>
          <Header/>
        </div>
        <div>
          <Form 
            task={task}
            setTask={setTask}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div className="list-align">
          <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
        </div>
      </header>
    </div>
  );
}

export default App;

import React, {useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

const Form = ({task, setTask, todos, setTodos, editTodo,  setEditTodo}) => {

    const updateTodo = (title,id, completed) => {
        const newTodo = todos.map((todo) => 
            todo.id === id? { title, id, completed } : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    };

    useEffect(() => {
        if(editTodo)
        {
            setTask(editTodo.title);
        }else{
            setTask("");
        }
    }, [setTask, editTodo]);

    const onInputChange = (event) =>{
        setTask(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodo)
        {
            setTodos([...todos, { id : uuidv4(), title: task, completed: false}]);
            setTask("");
        }
        else{
            updateTodo(task,editTodo.id, editTodo.completed);
        }
        // setTodos([...todos, { id : uuidv4(), title: task, completed: false}]);
        // setTask("");
    }

    return (
        <div className="form">
            <form onSubmit ={onFormSubmit}>
                <input 
                    type="text" 
                    placeholder=" &#xf550; &nbsp; Add a task..." 
                    className="task-input"
                    value={task}
                    required
                    onChange={onInputChange} />
                <button className="button-add" type="submit">
                     {editTodo ? "OK" : "ADD"}
                </button>
            </form>
        </div>
    )
}

export default Form

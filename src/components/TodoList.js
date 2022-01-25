import React from 'react'

const TodoList = ({todos, setTodos, setEditTodo}) => {

    const completeTask = (todo) =>{
        setTodos(
            todos.map((item)=> {
                if(item.id === todo.id){
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        );
    };

    const editTask = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };

    const deleteTask = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    };

    return (
        <div>
            {todos.map((todo) =>(
                <li className="list-item" key={todo.id}>
                    {/* <button className="button-complete task-button" onClick= {()=> completeTask(todo)}>
                        <i className="fa fa-check-circle"></i>
                    </button> */}
                    <input type="checkbox" className="button-complete task-button" onChange= {()=> completeTask(todo)} />
                    <input 
                    type="text"
                    value={todo.title}
                    className="list"
                    onchange= {(event)=> event.preventDefault()}/>
                    <button className="button-edit task-button" onClick= {()=> editTask(todo)}>
                        <i className="fa fa-edit"></i>
                    </button>
                    <button className="button-delete task-button" onClick= {()=> deleteTask(todo)}>
                        <i className="fa fa-trash"></i>
                    </button>                  
                </li>
            ))}
        </div>
    )
}

export default TodoList

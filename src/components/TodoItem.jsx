import React  from "react"
import { useState } from "react"
import { TodoList } from './TodoList'

function TodoItem() {

    const [inputValue, setinputValue] = useState('')
    const [todos, setTodos] = useState([])

    const addTodo = () => {
        setTodos([...todos, {text: inputValue}])
    }

    return <div>
        <h1>Todo List </h1>
        <input value={inputValue} onChange={(e) => setinputValue(e.target.value) } type='text' style={{width: '720px', height: '30px'}}></input>
        <button onClick={addTodo} style={{width: '80px', height: '40px'}}>Add</button>
        {
            todos.map((el, id ) => {
                return <TodoList todo='todo' key={id}/>
            })
        }
    </div>

}

export default TodoItem
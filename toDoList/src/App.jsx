import { useState } from "react"
import "./App.css"

function App() {
 
  const [newItem, setNewItem] = useState("")
  const [toDos, setToDos] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()

    setToDos((currentToDos)=>{
      return [...currentToDos, { id: crypto.randomUUID(), title: newItem, completed: false}]
    })
  
  setNewItem("")
  }
    
  const ToggletoDo =(id, completed) => {
    setToDos((currentToDos => {
      return currentToDos.map(todo=>{
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    }))
  }

  const deleteToDo =(id) => {
    setToDos(currentToDos => {
      return currentToDos.filter(todo => todo.id !==id)
    })
  }



  return (
    <>
    <form onSubmit={submitHandler} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem} type="text" id="item" onChange={e => setNewItem(e.target.value)}/>

      </div>
      <div className="btn-container">
        <button className="btn">Add</button>
      </div>
      
    </form>
    <h1 className="header">ToDo List</h1>
    <ul className="list">
      {toDos.length === 0 && "No toDos"}
      {toDos.map(todo => {
        return (
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked ={todo.completed}
              onChange={e => ToggletoDo(todo.id, e.target.checked)}/>
              {todo.title}
            </label>
            <button onClick={()=> deleteToDo(todo.id)} className="btn-danger">Delete</button>
          </li>
              )
      })}
      
    </ul>
      
    </>
  )
}

export default App

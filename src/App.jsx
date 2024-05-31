import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import '../src/bootstrap.min.css';
import { addTodo, deleteTodo, toggleSaveTodo } from './redux/TodoSlice';

function App() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    dispatch(addTodo({
      id: Date.now(),
      text: todo
    }))
    setTodo('')
  }

  const totalSaved = todos.filter(todo => todo.saved).length;

  return (
    <div className="d-flex justify-content-center" style={{ height: "100vh", marginTop: "50px" }}>
      <div className="container text-center">
        <h1>TODO App</h1>

        <div className="d-flex align-items-center justify-content-center mb-5">
          <input
            type="text" className="form-control w-50" placeholder="Add todo"
            value={todo} onChange={(e) => setTodo(e.target.value)} required/>
          <button className="btn btn-primary ms-3" onClick={handleAddTodo}>Add</button>
        </div>

        <div className="d-flex align-items-center justify-content-center">
          <table className="table table-striped w-50">
            <thead>
              <tr>
                <th>Save</th>
                <th>Todo</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <td>
                    <input type="checkbox" 
                      checked={todo.saved} onChange={() => dispatch(toggleSaveTodo({ id: todo.id }))}/>
                  </td>
                  <td>{todo.text}</td>
                  <td>
                    <button className="btn btn-danger btn-md ms-4"
                      onClick={() => dispatch(deleteTodo({ id: todo.id }))}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-3">
          <h3>Total completed todo: {totalSaved}</h3>
        </div>
        
      </div>
    </div>
  );
}

export default App;

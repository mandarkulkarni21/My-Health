import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import "./Todo.css";

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();
    return (
        <div style={{backgroundColor:"#ffff80" , marginTop:"-20px"}}>
            <div >
                <div   className="text_todo">
                    
                        <h1>Todo App</h1>
                        </div>

                    <div>
                        <input className="todo_input" type="text" placeholder="write here....."
                            value={inputData}
                            onChange={(event) => setInputData(event.target.value)}
                        />
                              <div className="button_add">
                            <button type="button" onClick={() => dispatch(addTodo(inputData),
                            setInputData(''))} className="btn btn-success" >Add</button>
                            </div>
                    </div>

                    <div>

                        {
                            list.map((elem) => {
                                return (
                                    <>
                                    <div key="elem.id">
                                        <h3 className="data_todo">{elem.data}</h3>
                                        </div>
                                        
                                    <div className="icon_todo">
                            <button type="button" onClick={() => dispatch(deleteTodo(elem.id))} className="btn btn-danger" >Delete</button>
                            </div>
                                    </>
                                    
                                )

                            })
                        }

                    </div>
                    
                      <div className="todo_search">
                     
                      <button  type="button" className="btn btn-outline-primary"
                          onClick={()=>dispatch(removeTodo())}
                          ><span>Remove list</span></button>
                      </div>

                
            </div>
            <h1 style={{marginTop:"500px"}}>-</h1>
            <footer  className="bg-dark text-light py-3">
            <p className="text-center">
            Copyright &copy; My-Health.com
            </p>
        </footer>
        </div>
    )
}

export default Todo

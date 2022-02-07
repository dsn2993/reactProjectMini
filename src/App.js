import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ToDoLists from "./ToDoLists";


function App() {

  const [InputItem, setInputItem] = useState("");
  const [InputItem2, setInputItem2] = useState([]);

  function inputEvent(e) {
    setInputItem(e.target.value)
  }

  function submit() {
    setInputItem2((oldItem) => {
      return [...oldItem, InputItem]
    });
    setInputItem("");
  }

  function deleteItem(id){
    console.log("Item Deleted");

    setInputItem2((oldItem) => {
        return oldItem.filter((arrElement, index)=>{
          return index !== id;
        })
    })
  }


  return (
    <div className="App">

      <div className="center-div">
        <br />
        <h1>To-Do List</h1>
        <br />

        <div>
          <input type="text" placeholder="Add Items" onChange={inputEvent} value={InputItem} />
          <button onClick={submit}> + </button>

        </div>

        <br />

        <ol>

          {/* <li>{InputItem2}</li> */}

          {
            InputItem2.map((InputItemElement,index) => {
            
              return <ToDoLists 
                text = {InputItemElement} 
                key = {index}
                id = {index}
                onSelect = {deleteItem}
              />
            })
          }

        </ol>

      </div>

    </div>
  );
}
export default App;

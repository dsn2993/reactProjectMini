import './App.css';
import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ToDoLists from "./ToDoLists";


function App() {

  const [OldItem, setOldItem] = useState("");
  const [NewItem, setNewItem] = useState([]);

  function inputEvent(e) {
    setOldItem(e.target.value)
  }

  function submit() {
    setNewItem((Item) => {
      return [...Item, OldItem]
    });
    setOldItem("");
  }

  function deleteItem(id){
    console.log("Item Deleted");

    setNewItem((element) => {
        return element.filter((arrElement, index)=>{
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
          <input type="text" placeholder="Add Items" onChange={inputEvent} value={OldItem} />
          <button onClick={submit}> + </button>

        </div>

        <br />

        <ol>

          {/* <li>{NewItem}</li> */}

          {
            NewItem.map((InputItemElement,index) => {
            
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

import React from "react";
import { useState } from "react";
import ToDoLists from "./ToDoLists";

const App = () => {
  const [inputList, setInputList] = useState("");

  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="top"> Add Whatever You Like!! </div>
      <div className="main_div">
        <div className="center_div">
          <br />

          <h1>Todo List</h1>

          <br />

          <input
            className="data"
            type="text"
            placeholder="Add an Item"
            onChange={itemEvent}
            value={inputList}
          />

          <button onClick={listOfItems}> + </button>

          <ol>
            {Items.map((itemval, index) => {
              return (
                <ToDoLists
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;

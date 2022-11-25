import React, { useState } from "react";

export const AddWorkItem = ({ handleAddNewItem }) => {
  const [newItem, setNewItem] = useState([]);
  const setMessege = (a) => {
    setNewItem(a.target.value);
  };
  const addNewItem = () => {
    handleAddNewItem(newItem);
    setNewItem("");
  };
  return (
    <div>
      <h1>Today work items that should be done</h1>
      <div className="input-group mb-3 addTask">
        <input
          id="task"
          type="text"
          className="form-control"
          placeholder="Add new task"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={setMessege}
          value={newItem}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={addNewItem}
        >
          Add task
        </button>
      </div>
    </div>
  );
};

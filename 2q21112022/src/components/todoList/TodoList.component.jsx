import React from "react";

import { WorkItem } from "../workItem/WorkItem.component";
import "./styleTodo.css";

export const TodoList = (props) => {
  return (
    <div className="cont">
      <h1>Today work items that should be done</h1>
      <div class="input-group mb-3 addTask">
        <input
          id="task"
          type="text"
          class="form-control"
          placeholder="Add new task"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={addTaskToTheList()}
        >
          Add task
        </button>
      </div>
      <WorkItem></WorkItem>
    </div>
  );
};

const addTaskToTheList=()=>{
    
}
import React, { useState } from "react";
import { AddWorkItem } from "../addWorkItem/AddWorkItem.component";

import { WorkItem } from "../workItem/WorkItem.component";
import "./styleTodo.css";

export const TodoList = (props) => {
  const [itemsArr, setItemsArr] = useState([]);
  const handleDelete = (id) => {
    setItemsArr(
      itemsArr.filter((c) => {
        return c.id !== id;
      })
    );
  };
  const handleAddNewItem = (newItem) => {
    let nc = {
      id: itemsArr.length,
      value: newItem,
    };
    setItemsArr((prev) => [...prev, nc]);
  };
  return (
    <div className="cont">
      <AddWorkItem handleAddNewItem={handleAddNewItem}></AddWorkItem>
      <div>
        {itemsArr &&
          itemsArr.map((i) => {
            return (
              <WorkItem
                key={i.id}
                handleDelete={handleDelete}
                itemId={i.id}
                itemValue={i.value}
              ></WorkItem>
            );
          })}
      </div>
    </div>
  );
};

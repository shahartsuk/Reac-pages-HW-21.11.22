import React from "react";
import "./style.css";
export const WorkItem = ({ handleDelete, itemId, itemValue }) => {
  const deleteItem = () => {
    handleDelete(itemId);
  };
  return (
    <div>
      <div className="card border-secondary mb-3">
        <div className="card-header cardTask">Task</div>
        <div className="card-body text-secondary cardTask">
          <h5 className="card-title">{itemValue}</h5>
          <p className="card-text">
            <button
              onClick={deleteItem}
              type="button"
              className="btn btn-primary"
            >
              Done
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

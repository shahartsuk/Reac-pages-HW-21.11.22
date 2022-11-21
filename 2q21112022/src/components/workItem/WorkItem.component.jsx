import React from "react";
import "./style.css";
export const WorkItem = (props) => {
  return (
    <div className="container">
      <div className="card border-secondary mb-3">
        <div className="card-header cardTask">Task</div>
        <div className="card-body text-secondary cardTask">
          <h5 className="card-title">hi</h5>
          <p className="card-text">
            <button type="button" className="btn btn-primary">
              Done
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

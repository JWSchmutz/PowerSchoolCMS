import React from "react";
import "./GradesTopInfo.css";

const GradesTopInfo = props => {
  return (
    <div className="level">
      <div className="level-item">
        <div className="card grades-top-info-card">
          <div className="grades-top-info-card-content card-content">
            <p className="subtitle has-text-centered ">GPA</p>
            <p className="title is-1 has-text-centered grades-top-info-title">
              3.45
            </p>
          </div>
        </div>
      </div>
      <div className="level-item">
        <div className="card grades-top-info-card ">
          <div className="grades-top-info-card-content card-content">
            <p className="subtitle has-text-centered">Missing Assignments</p>
            <p className="title is-1 has-text-centered grades-top-info-title">
              0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradesTopInfo;
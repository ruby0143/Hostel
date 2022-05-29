import React from "react";
import './submit.css';

const submit = () => {
  return (
    <div>
      <div className="submit">
        <h3>Thank You for your response.</h3>
        <div className="mg5">
          <a href="/" className="logout">
            <button class="btn btn-primary">Logout</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default submit;

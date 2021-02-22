import React from "react";

import "./Char.scss";

// Individual japanese charachters and tag

function Char({ title, tag }) {
  return (
    <div className="char">
      <h1>{title}</h1>
      <p>{tag}</p>
    </div>
  );
}

export default Char;

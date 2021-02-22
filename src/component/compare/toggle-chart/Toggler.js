import React, { useState } from "react";
import HiraChart from "../hiragana-chart/HiraChart";
import KataChart from "../katakana-chart/KataChart";

import "./Toggler.scss";

/* Toggles between the hiragana and katakana chart 
based on true or flase toggle state */

function Toggler() {
  const [toggle, setToggle] = useState(false);

  console.log(toggle);

  const compare =
    toggle == false ? <HiraChart></HiraChart> : <KataChart></KataChart>;

  return (
    <div className="toggler">
      <button className="btn" onClick={() => setToggle(!toggle)}>
        <h2>{toggle == false ? "Hiragana" : "Katakana"}</h2>
      </button>

      <div className="compare">{compare}</div>
    </div>
  );
}

export default Toggler;

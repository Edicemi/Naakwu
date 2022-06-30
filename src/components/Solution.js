import React from "react";
import Solution1 from "./Solution1";

import "./Solution.css";
function Solution() {
  return (
    <div className="Solution">
      <div className="Solution1">
        <h1>Our Solution</h1>
        <p>
          We are an internal incubator that builds digital products to help
          solve problems in Africa, primarily focused on Blockchain, Artificial
          intelligence and Finance.
        </p>
      </div>
      <div className="length">
<Solution1 />
<button className="read">Read more</button>
</div>
      </div>
  );
}

export default Solution;

import React from "react";
import "./Newsletter.css";
function Newsletter() {
  return (
    <div className="Newsletter">
      <h1>Our Newsletter</h1>
      <p>
        Our newsletter is aimed at helping Tech enthusiasts with freshly curated
        ideas to be more productive, stay inspired and think critically.
      </p>
      <form action="">
            <input type="email" placeholder="miracle@naakwu.ng"/> 
            <button>Subscribe</button>
        </form>
    </div>
  );
}

export default Newsletter;

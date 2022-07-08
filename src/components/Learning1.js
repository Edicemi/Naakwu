import React from "react";
import app1 from "./assets/Rectangle 57 (1).jpg";
import app2 from "./assets/Rectangle 17 (4).jpg";
import app3 from "./assets/Rectangle 57.jpg";
import Learning from "./Learning";
import './Learning1.css'
function Learning1() {
  return (
    <div>
            <div className="Learning1"> 

      <Learning
        src={app1}
        alt="Logos"
        heading="E-Learning app design and how to make it better"
        description='kids who are used to all kinds of gadgets from a very small age.'
        footer="#DESIGN"
      />
      <Learning
        src={app2}
        alt="app"
        heading="How to integrate combine with swift UI to make better apps"
        description="Kids and adults are becoming more and more tech-savy, especially the
          kids who are used to all kinds of gadgets from a very small age."
        footer="#MANAGEMENT"
        footer2="#DEVELOPMENT"
      />
      <Learning
        src={app3}
        alt="app"
        heading="E-Learning app design and how to make it better"
        description="Kids and adults are becoming more and more tech-savy, especially the
          kids who are used to all kinds of gadgets from a very small age."
        footer="#DESIGN"
      />
    </div>
    </div>

  );
}

export default Learning1;

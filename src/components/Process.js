import React,{useState} from "react";
import one from "./assets/1 (1).png";
import two from "./assets/Rectangle 59.png";

import "./Process.css";
function Process() {
  const [nextField, setNextField]=useState('tab_1')
  return (
    <div className="Process">
      <h1>Our Process</h1>
      <div className="heading">
      <h6 onClick={()=>setNextField('tab_1')}>Design and Estimation</h6>
      <h6 onClick={()=>setNextField('tab_2')} >Development and Implementation</h6>
      <h6 onClick={()=>setNextField('tab_3')}>Production and Growth</h6>
      </div>



      {nextField === 'tab_1' &&  
      
      
      <div className="Design">
        <div className="estimation">
        <img src={one} alt="one" />
        <h5>Design and Estimation</h5>
        </div>
        <div className="estimate">
        <p>
          Our human-centered design process is grounded in the principles of
          Design Thinking. It's the driving force behind our projects and teams.
          Designers keep this process alive by helping our teams understand user
          problems and needs. Together, we collaboratively and continuously
          ideate, build, and learn.
        </p>
        <div className="bullet1">
        <div className="bullet">
        <img className="dot" src={two} alt="two" />
        <p>Design Discovery</p>
        </div>
        <div className="bullet">
        <img className="dot" src={two} alt="two" />
        <p>User Experience Design</p>
        </div>
        </div>
        <div className="bullet1">
        <div className="bullet">
        <img className="dot" src={two} alt="two" />
        <p>User Interface Design</p>
        </div>
        <div className="bullet">
        <img className="dot" src={two} alt="two" />
        <p>Prototype and Estimation</p>
        </div>
        </div>
      </div>
    </div>

}
      {nextField === 'tab_2' &&  
      
      
      <div className="Design">
        <div className="estimation">
        <img src={one} alt="one" />
        <h5>Development and Implementation</h5>
        </div>
        <div className="estimate">
        <p>
          Our human-centered design process is grounded in the principles of
          Design Thinking. It's the driving force behind our projects and teams.
          Designers keep this process alive by helping our teams understand user
          problems and needs. Together, we collaboratively and continuously
          ideate, build, and learn.
        </p>
        <div className="bullet1">
        <div className="bullet">
        <img className="dot" src={two} alt="two" />
        <p>Design Discovery</p>
        </div>
        <div className="bullet">
        <img className="dot" src={two} alt="two" />
        <p>User Experience Design</p>
        </div>
        </div>
        <div className="bullet1">
        <div className="bullet">
        <img className="dot" src={two} alt="two" />
        <p>User Interface Design</p>
        </div><div className="bullet">
        <img className="dot" src={two} alt="two" />
        <p>Prototype and Estimation</p>
        </div>
        </div>
      </div>
    </div>

}
      {nextField === 'tab_3' &&  
      
      
      <div className="Design">
        <div className="estimation">
        <img src={one} alt="one" />
        <h5>Production and Growth</h5>
        </div>
        <div className="estimate">
        <p>
          Our human-centered design process is grounded in the principles of
          Design Thinking. It's the driving force behind our projects and teams.
          Designers keep this process alive by helping our teams understand user
          problems and needs. Together, we collaboratively and continuously
          ideate, build, and learn.
        </p>
        <div className="bullet1">
        <div className="bullet">
        <img className="dot" src={two} alt="two" />
        <p>Design Discovery</p>
        </div>
        <div className="bullet">
        <img className="dot" src={two} alt="two" />
        <p>User Experience Design</p>
        </div>
        </div>
        <div className="bullet1">
        <div className="bullet">
        <img className="dot" src={two} alt="two" />
        <p>User Interface Design</p>
        </div><div className="bullet">
        <img className="dot" src={two} alt="two" />
        <p>Prototype and Estimation</p>
        </div>
        </div>
      </div>
    </div>

}
    </div>
  );
}

export default Process;

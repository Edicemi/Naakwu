import React from 'react'
import Solution1 from './Solution1'

function Solution2(props) {
  return (
    <div>
        <div className="blockchain">
          <img className="plus" src={props.src} alt={props.app} />
          <div className="chain">
            <h1 className="width_heading">{props.heading}</h1>
            <p className="width_description">{props.description}</p>
          </div>
      </div>

    </div>
  )
}

export default Solution2
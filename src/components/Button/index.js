import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <div className="list-group">
      {props.lists.map((list, index) => {
          if (list === "Map")
            return (
              <Link to="/" key="index">
                <a className="list-group-item list-group-item-action" onClick={props.option}>
                  {list}
                </a>
              </Link>
            )
          else 
            return (
              <Link to="/about-me" key={index}>
                <a className="list-group-item list-group-item-action" key={index} onClick={props.option}>
                  {list}
                </a>
              </Link>
            )
        })}
    </div>
  )
}

export default Button;
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  return (
      <div className="Card">
          <Link to={'/crewDetails/'+ props.id}>
          <h2 className="name">{props.name}</h2>
          <h3 className="color">{"color: " + props.color}</h3>
          <h3 className="age">{"age: " + props.age}</h3>
          <p className="description">{props.description}</p>
          {/* <button className="betButton" onClick={updateCount} >👍 Bet Count: {count}</button> */}
          </Link>
      </div>
  );
};

export default Card;
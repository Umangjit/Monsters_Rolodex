import React from "react";
import "./card.css";


export const Card = (props) =>  (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${(props.monster.id)}?set=set1`}></img>
       <h3>{props.monster.company.name}</h3>
      <h1>{props.monster.name}</h1>
    </div>
  );


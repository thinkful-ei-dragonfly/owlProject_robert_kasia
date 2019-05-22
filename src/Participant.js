import React from 'react';

export default function Participant(props) {
return ( 
  <div className='Participants'>
    <h2>{props.name}</h2>
    <img src = {props.avatar} alt={props.name}></img>
    <p>{props.displayStatus}</p>
  </div>
  );
}


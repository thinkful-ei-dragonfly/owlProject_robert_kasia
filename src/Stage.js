import React from "react"; 

export default function Stage(props) {
    let participants = props.participants;
    const stageParticipants = participants.filter(person => person.onStage); 
    const onStage = stageParticipants.map(person =>{
        return (
            <div>
                <img src={person.avatar} alt={person.name}></img>
                <p>{person.name}</p>
            </div>
        )
        });
    return (
      <div className="Stage">
          {onStage}
      </div>
      );
    }
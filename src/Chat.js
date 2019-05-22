import React from "react"; // syntax??

// <Chat events={...} participants={...} />

export default function Chat(props) {
  // const { events, participants } = props;
  
  const allEvents = props.events;

  const allParticipants = props.participants;



  console.log(allEvents, allParticipants);
  
  const listOfEvents = allEvents.map(event => {
    const participant = allParticipants.find(participant => participant.id === event.participantId);
    if (event.type === "message") {
      return <li>
        <p>{participant.name}</p>
        <p>{event.message}</p>
        <span>{event.time}</span>
      </li>
    } else if (event.type === "clap") {   
      return <li>
        <p>{participant.name}</p>
      < p>Clap</p>
      </li>
    } else if (event.type === "thumbs-up") {   
        return <li>
        <p>{participant.name}</p>
        <p>Thumb-up</p>
        </li>
    }
    else if (event.type === "thumbs-down") {   
        return <li>
        <p>{participant.name}</p>
        <p>Thumb-down</p>
        </li>
    }
    else if (event.type === "raise-hand"){   
        return <li>
          <p>{participant.name}</p>
          <p>raise hand</p>
        </li>
    } else if (event.type === "join") {
      participant.inSession = true; // turn them into being active in the session  
      return <li>
        <p>{participant.name} joined the session</p>
      </li>
    } else if (event.type === "leave") {
      participant.inSession = false; // turn them into not being active in the session    
      return <li>
        <p>{participant.name} left the session</p>
      </li>
    } else if (event.type === "join-stage") {
      participant.onStage = true; // turn them to be on stage
      return <li>
        <p>{participant.name} joined the stage</p>
      </li>
    } else if (event.type === "leave-stage") {
      participant.onStage = false; // turn them into off the stage    
      return <li>
        <p>{participant.name} left the stage</p>
      </li>
  }});

  return (
    <div className="Chat">
      <ul>
        {listOfEvents}
      </ul>
    </div>
  )
}






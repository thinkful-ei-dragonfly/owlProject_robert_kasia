/* Consider making this Event component to feed up into chat. Because we somehow need to assign keys to these
   and I think we would have to do that in the Chat Component. Otherwise I think the list is getting jumbled   */



import React from 'react';

export default function Event(props) {

  const eventType = props.type;
  // const participant ?? store participant?

  if (eventType)

  if (eventType === "message") {
    return <li>
      <p>{participant.name}</p>
      <p>{event.message}</p>
      <span>{event.time}</span>
    </li>
  } else if (eventType === "clap") {   
    return <li>
      <p>{participant.name}</p>
    < p>Clap</p>
    </li>
  } else if (eventType === "thumbs-up") {   
      return <li>
      <p>{participant.name}</p>
      <p>Thumb-up</p>
      </li>
  }
  else if (eventType === "thumbs-down") {   
      return <li>
      <p>{participant.name}</p>
      <p>Thumb-down</p>
      </li>
  }
  else if (eventType === "raise-hand"){   
      return <li>
        <p>{participant.name}</p>
        <p>raise hand</p>
      </li>
  } else if (eventType === "join") {
    participant.inSession = true; // turn them into being active in the session  
    return <li>
      <p>{participant.name} joined the session</p>
    </li>
  } else if (eventType === "leave") {
    participant.inSession = false; // turn them into not being active in the session    
    return <li>
      <p>{participant.name} left the session</p>
    </li>
  } else if (eventType === "join-stage") {
    participant.onStage = true; // turn them to be on stage
    return <li>
      <p>{participant.name} joined the stage</p>
    </li>
  } else if (eventType === "leave-stage") {
    participant.onStage = false; // turn them into off the stage    
    return <li>
      <p>{participant.name} left the stage</p>
    </li>


}
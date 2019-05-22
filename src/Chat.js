import React from "react"; // syntax??

// <Chat events={...} participants={...} />

export default function Chat(props){
  const { events, participants } = props;
  console.log(events, participants);
  const listOfEvents = events.map(event => {
    const participant = participants.find(participant => participant.id === event.participantId);
    if(event.type === "message"){
      return <li>
        <p>{participant.name}</p>
        <p>{event.inSession}</p>
        <p>{event.message}</p>
        <span>{event.time}</span>
      </li>
    }else if(event.type === "clap"){   
      return <li>
        <p>{participant.name}</p>
      < p>Clap</p>
      </li>
    }
    else if(event.type === "clap"){   
        return <li>
        <p>{participant.name}</p>
        < p>Thumb-up</p>
        </li>
    }
    else if(event.type === "clap"){   
        return <li>
          <p>{participant.name}</p>
        < p>Thumb-down</p>
        </li>
    }
    else if(event.type === "clap"){   
        return <li>
          <p>{participant.name}</p>
        < p>Wave</p>
        </li>
    }
  });
  return (
    <div className="Chat">
      <ul>
        {listOfEvents}
      </ul>
    </div>
  )
}






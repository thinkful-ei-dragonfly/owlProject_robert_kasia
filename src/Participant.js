import react from 'React'


export default function Participant(props) {
 let displayStatus;

  if (props.inSession && props.onStage) {
    displayStatus = "On Stage";
  } else if (props.inSession) {
    displayStatus = "In Session";
  } else {
    displayStatus = "Left Session";
  }
  
  //this.id = props.id;

return (
  <div>
    <h2>props.name</h2>
    <img src = {props.avatar} ></img>
    <p>{displayStatus}</p>
  </div>
  );
}


  id: 1,
      name: 'Koren Templeton',
      avatar:
          'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: true
    



}








   ! ID ! is the tying in factor !!


           Window
           /                 
  ParticipantList ----------\      
    /           \            \
ChatHistory      \          Stage
    \              \
                   \
               Participant


                 ID





id: 1, // NEED YET?? LATER?
name: 'Koren Templeton',
avatar:
    'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
inSession: true,
onStage: true
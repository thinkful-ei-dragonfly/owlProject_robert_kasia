import react from "react"; // syntax??
import Participant from './Participant'



function Sidebar(props) {
 const list = props.STORE.Participants;
 const presentPeople = list.map(person => {
    if (person.inSession && person.onStage) {
        displayStatus = "On Stage";
      } else if (person.inSession) {
        displayStatus = "In Session";
      } else {
        displayStatus = "Left Session";
      }
    return <Participant  id={person.id} name={person.name} avatar={person.avatar} displayStatus={displayStatus}/>
 })
    return (
        <ul>
           {presentPeople}
        </ul>
    )
  
}
export default Sidebar;



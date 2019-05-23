import React from "react"; // syntax??
import Participant from './Participant'



function Sidebar(props) {
 const list = props.participants;
 let displayStatus;
 const presentPeople = list.map(person => {
    if (person.inSession && person.onStage) {
        displayStatus = "On Stage";
      } else if (person.inSession) {
        displayStatus = "In Session";
      } else {
        displayStatus = "Left Session";
      }
    return <Participant key={person.id} name={person.name} avatar={person.avatar} displayStatus={displayStatus}/>
 })
    return (
        <div className='Sidebar'>
          <ul>
             {presentPeople}
          </ul>
        </div>
    );
  
}
export default Sidebar;



import React from 'react';
import classes from './ChoresList.module.css';

class ChoresList extends React.Component {
   render() {
const chores= ["Call HR Department", "Finish Assignment 5", "Start Laundry"];

return(
   <div>
      <h3 className= {classes.choresHeading}> To-do List </h3>
      <ul>
         <li className= {classes.ChoresText}>{chores[0]}</li>
         <li className= {classes.ChoresText}>{chores[1]}</li>
         <li className= {classes.ChoresText}>{chores[2]}</li>
      </ul>
   </div>
)

   }
}

export default ChoresList
import React from 'react';
import classes from './MovieList.module.css';

export default function HobbyLinks(){
    let hobbyLinks= ["https://www.brandonsanderson.com/tag/creative-writing/", "https://www.hearthstonetopdecks.com/"]
    return (
        <div>
        <a href= {hobbyLinks[0]}> Brandon Sanderson's creative writing class at BYU</a>
        <a href={hobbyLinks[1]}> Top Hearthstone Decks Today </a>
   </div> );
};
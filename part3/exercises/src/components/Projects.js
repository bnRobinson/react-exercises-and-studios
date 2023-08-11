import data from './../data.json'
import { useState } from 'react';

export default function MyProjects(){
    const [index, setIndex]= useState(0);

    let hobbyProjects= data.projects;
    let hobbyIndex= data.projects[index];

    function handleClick(){
        if (index < data.projects.length-1)
   {
      setIndex(index + 1);
   }
   else 
   {
      setIndex(0);
   }
    }

    return(
        <div>
<button onClick={handleClick}>Next!</button>

<div>
    <h3>Writing Ideas</h3>
    <img src= {data.projects[index].image} alt="Image Inspiration" height="300px" width="500px"></img>
<p>
    Title: {data.projects[index].title}
    Main Character: {data.projects[index].mainCharacter}
    Premise: {data.projects[index].premise}
    Genre: {data.projects[index].genre}
</p>
</div>

        </div>
        
    );
};
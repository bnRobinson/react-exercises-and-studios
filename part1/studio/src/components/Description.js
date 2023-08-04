import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor(){

    let authorLink= "https://sallysbakingaddiction.com/french-macarons/";
    let authorPhoto= "https://sallysbakingaddiction.com/wp-content/uploads/2023/01/profile-sally-300x300.jpg" ;
    let authorName= "Sally McKenney";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Sally McKenney" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Sally's French Macaron Recipe</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render(){
     return (   
    <div> 
                <div>
                <h1>French Macarons</h1>
                    <p> In-depth beginner's guide to homemade French Macarons</p>
                </div>
                <RecipeAuthor />
    </div>
     );
    }

}

export default RecipeDescription;
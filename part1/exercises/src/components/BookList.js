import React from 'react';
import classes from './BookList.module.css'

export default function BookList() {
   let booksILove = "Books I Love";
   let book1 = "https://m.media-amazon.com/images/I/61Ywd1BZE1L._SL500_.jpg";
   let book2 = "https://images.booksense.com/images/734/404/9780756404734.jpg";
   let book3 = "https://m.media-amazon.com/images/I/61yt-aCI16L._SL500_.jpg";

   return (
      <div>
         <h3 className={StyleSheet.bookheading}>{booksILove}</h3>
         <img src={book1} alt="The Name of the Wind by Patrick Rothfuss" />
         <img src={book2} alt="A Wise Man's Fear by Patrick Rothfuss" />
         <img src={book3} alt="Strange the Dreamer by Laini Taylor" />
      </div>      
   );
}
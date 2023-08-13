import './styles.css';

function Button() {
   function onLearnMore(){
      alert("Waves Crashing")
   };
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;
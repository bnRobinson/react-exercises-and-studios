import './styles.css';

function Button() {
   let onLearnMore= function(){
      alert("Waves Crashing")
   }
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;
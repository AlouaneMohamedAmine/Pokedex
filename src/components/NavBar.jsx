
function NavBar({ onPrev, onNext }) {
    return (
      <div>
        <button onClick={onPrev}>Précédent</button>
        <button onClick={onNext}>Suivant</button>
      </div>
    );
  }
  
  export default NavBar;
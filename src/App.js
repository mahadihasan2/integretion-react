import './App.css';
import Bazar from './Components/Bazars/Bazar';
import Cosmetics from './Components/Cosmetics/Cosmetics';
import Datageneretor from './Components/Datageneretor/Datageneretor';
import Mobile from './Components/Mobile/Mobile';
import Showes from './Components/Showes/Showes';

function App() {
  return (
    <div className="App">
      <Mobile name='Mahadi Hasan'></Mobile>
      <Cosmetics></Cosmetics>
      <Showes></Showes>
      <Bazar></Bazar>
      <Datageneretor></Datageneretor>
    </div>
  );
}

export default App;

import './App.css';
import Bazar from './Components/Bazars/Bazar';
import Cosmetics from './Components/Cosmetics/Cosmetics';
import Datageneretor from './Components/Datageneretor/Datageneretor';
import Featchapi from './Components/Featchapi/Featchapi';
import Showheading from './Components/Headingapi/Showheading';
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
      <Showheading></Showheading>
      <Featchapi></Featchapi>


    </div>
  );
}

export default App;

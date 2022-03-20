import './App.css';
import Cosmetics from './Components/Cosmetics/Cosmetics';
import Mobile from './Components/Mobile/Mobile';
import Showes from './Components/Showes/Showes';

function App() {
  return (
    <div className="App">
      <Mobile name='Mahadi Hasan'></Mobile>
      <Cosmetics></Cosmetics>
      <Showes></Showes>
    </div>
  );
}

export default App;

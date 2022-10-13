import './App.css';
import { Route, Routes } from 'react-router-dom'
import Starships from './pages/Starships/Starships';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Starships />} />
        <Route path='/starship' element={<StarshipDetails />} />
      </Routes>
    </div>
  );
}

export default App;

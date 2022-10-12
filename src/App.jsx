import './App.css';
import { Route, Routes } from 'react-router-dom'
import Starships from './pages/Starships/Starships';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Starships />} />
      </Routes>
    </div>
  );
}

export default App;

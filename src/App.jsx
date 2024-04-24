import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SinglePlayer from './components/SinglePlayer';
import AllPlayers from './components/AllPlayers';
import NewPlayer from './components/NewPlayer';
import NavBar from './components/NavBar';
import DeletePage from './components/DeletePage';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<AllPlayers />} />
        <Route path='/singleplayer/:playerId' element={<SinglePlayer />} />
        <Route path='/newplayer' element={<NewPlayer />} />
        <Route path='/deleteplayer/:playerId' element={<DeletePage />} />
      </Routes>
    </Router>
    </>
  )

}

export default App

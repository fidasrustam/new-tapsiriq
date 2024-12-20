import './App.css';
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import Hour from './Components/Hour';
import Stopwatch from './Components/Stopwatch';
import Timer from './Components/Timer';
function App() {
  return (
    <div className="App">
      <div className='menu-container'>
      <NavLink className='menu' to='/Hour'>Saat</NavLink>
      <NavLink className='menu' to='/stopwatch'>Saniyəölçən</NavLink>
      <NavLink className='menu' to='/timer'>Taymer</NavLink>
      </div>

     <Routes>
        <Route path='/hour' element={<Hour />} />
        <Route path='/stopwatch' element={<Stopwatch />} />
        <Route path='/timer' element={<Timer />} />
     </Routes>
    </div>
  )
}

export default App;
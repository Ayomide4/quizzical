import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz'




function App() {

  const [menuActive, setMenuActive] = useState(false)

  return (
    <div className='app-container'>

      {menuActive ? <MainMenu menuActive={menuActive} setMenuActive={setMenuActive} /> : <Quiz/>}
    </div>
  );
}

export default App;

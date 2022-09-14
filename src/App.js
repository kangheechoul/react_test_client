// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


import {Schedules} from './pages/schedule';
import {Notice} from './pages/notice';
import {Login} from './pages/login';
import {Main} from './pages/main';


const App = () =>{
  
  return(
    <div className="" style={{width:"90%", marginLeft:"5%"}}>
      
      <BrowserRouter>
        <Routes>
          <Route path="/schedules" element={<Schedules/>}/>
          <Route path="/notice" element={<Notice/>}/>
          <Route path="/login" element={<Login name = "희철" status = "1"/>}/>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

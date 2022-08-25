// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Schedules} from './pages/schedule';
import {Notice} from './pages/notice';
import {Login} from './pages/login';

const App = () =>{
  
  return(
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/schedules" element={<Schedules/>}/>
          <Route path="/notice" element={<Notice/>}/>
          <Route path="/login" element={<Login name = "희철" status = "1"/>}/>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

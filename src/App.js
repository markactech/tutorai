 import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landingpage from './components/Landingpage/Landingpage';
import Mainpage from './components/Mainpage';
import Header from './components/Landingpage/Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={ <Landingpage/> } />
    <Route path="/search" element={ <Mainpage/> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

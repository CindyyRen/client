// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Robot from './components/Robot';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { navLists } from './utils/constants';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Header /> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/robot" element={<Robot />} />
          <Route path="/" element={<Home />} /> {/* 默认路由 */}
          {/* {navLists.map(item=><Route path={`/${item.link}`} element={}/>)} */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

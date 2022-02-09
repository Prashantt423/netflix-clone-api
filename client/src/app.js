import './app.scss';
import { Home } from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';

import Login from './pages/login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoardHome from './pages/admin/home/Home';
export default function app() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/watch' element={<Watch />} />
        <Route path='/dashboard/*' element={<DashBoardHome />} />
      </Routes>
    </Router>
  );
}

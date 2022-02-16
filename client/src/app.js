import './app.scss';
import { Home } from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoardHome from './pages/admin/home/Home';
import { useContext } from 'react';
import { AuthContext } from './contextApi/authContext/AuthContext';
import LoginDashB from './pages/admin/Login/Login';
export default function App() {
  const { user } = useContext(AuthContext);
  const { dashBuser } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={user ? <Home /> : <Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/dashboard/*'
          element={dashBuser ? <LoginDashB /> : <DashBoardHome />}
        />
        {user && (
          <>
            <Route path='/series' element={<Home type='series' />} />
            <Route path='/movies' element={<Home type='movies' />} />
            <Route path='/watch' element={<Watch />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

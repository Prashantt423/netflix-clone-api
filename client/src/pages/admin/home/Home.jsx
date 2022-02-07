import Sidebar from '../../../components/dashboard/sidebar/Sidebar';
import Topbar from '../../../components/dashboard/topbar/Topbar';
import InnerHomePage from '../dashBoardHomePage/InnerHomePage';
import './home.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from '../userList/UserList';
export default function Home() {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<InnerHomePage />} />
          <Route path='/users' element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

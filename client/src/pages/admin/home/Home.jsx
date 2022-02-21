import Sidebar from '../../../components/dashboard/sidebar/Sidebar';
import Topbar from '../../../components/dashboard/topbar/Topbar';
import InnerHomePage from '../dashBoardHomePage/InnerHomePage';
import './home.scss';
import { Routes, Route } from 'react-router-dom';
import UserList from '../userList/UserList';
import User from '../user/User';
import NewUser from '../newUser/NewUser';
import ProductList from '../productList/ProductList';
import Product from '../product/Product';
import NewProduct from '../newProduct/NewProduct';
import Login from '../Login/Login';
import { useContext } from 'react';
import { AuthContext } from '../../../contextApi/authContext/AuthContext';
import ListList from '../listList/ListList';
import MovieList from '../list/MovieList';
import NewList from '../newList/NewList';
export default function DashBoardHome() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route
            exact
            path='/'
            element={user ? <InnerHomePage /> : <Login />}
          />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/user/newuser' element={<NewUser />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/movies' element={<ProductList />} />
          <Route path='/movie/view/:productId' element={<Product />} />
          <Route path='/movie/newmovie' element={<NewProduct />} />
          <Route exact path='/lists/:id' element={<MovieList />} />
          <Route exact path='/movies/lists' element={<ListList />} />
          <Route exact path='/movies/list/newlist' element={<NewList />} />
        </Routes>
      </div>
    </div>
  );
}

import Sidebar from '../../../components/dashboard/sidebar/Sidebar';
import Topbar from '../../../components/dashboard/topbar/Topbar';
import InnerHomePage from '../dashBoardHomePage/InnerHomePage';
import './home.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import UserList from '../userList/UserList';
import User from '../user/User';
import NewUser from '../newUser/NewUser';
import ProductList from '../productList/ProductList';
import Product from '../product/Product';
import NewProduct from '../newProduct/NewProduct';
export default function DashBoardHome() {
  return (
    <div>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<InnerHomePage />} />
          <Route exact path='/user/:userId' element={<User />} />
          <Route exact path='/user/newuser' element={<NewUser />} />
          <Route exact path='/users' element={<UserList />} />
          <Route exact path='/products' element={<ProductList />} />
          <Route exact path='/product/:productId' element={<Product />} />
          <Route exact path='/product/newproduct' element={<NewProduct />} />
        </Routes>
      </div>
    </div>
  );
}

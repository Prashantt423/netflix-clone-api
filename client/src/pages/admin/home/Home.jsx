import Sidebar from '../../../components/dashboard/sidebar/Sidebar';
import Topbar from '../../../components/dashboard/topbar/Topbar';
import InnerHomePage from '../dashBoardHomePage/InnerHomePage';
import './home.scss';
export default function Home() {
  return (
    <div>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <InnerHomePage />
      </div>
    </div>
  );
}

import FeaturedInfo from '../../../components/dashboard/featuredInfo/FeaturedInfo';
import Chart from '../../../components/dashboard/chart/Chart';
import './InnerHomePage.scss';
export default function InnerHomePage() {
  return (
    <div className='dashBoardHomePage'>
      <div className='dashBoardHomePageWrapper'>
        <FeaturedInfo />
        <Chart />
      </div>
    </div>
  );
}

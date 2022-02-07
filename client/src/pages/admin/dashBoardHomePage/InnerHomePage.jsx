import FeaturedInfo from '../../../components/dashboard/featuredInfo/FeaturedInfo';
import Chart from '../../../components/dashboard/chart/Chart';
import './InnerHomePage.scss';
import WidgetLg from '../../../components/dashboard/widgetLg/WidgetLg';
import WidgetSm from '../../../components/dashboard/widgetSm/WidgetSm';
export default function InnerHomePage() {
  return (
    <div className='dashBoardHomePage'>
      <div className='dashBoardHomePageWrapper'>
        <FeaturedInfo />
        <Chart />
        <div className='dashBhomeWidgets'>
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </div>
  );
}

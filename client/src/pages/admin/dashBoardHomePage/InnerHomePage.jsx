import FeaturedInfo from '../../../components/dashboard/featuredInfo/FeaturedInfo';
import Chart from '../../../components/dashboard/chart/Chart';
import './InnerHomePage.scss';
import WidgetLg from '../../../components/dashboard/widgetLg/WidgetLg';
import WidgetSm from '../../../components/dashboard/widgetSm/WidgetSm';
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../../contextApi/authContext/AuthContext';
export default function InnerHomePage() {
  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get('/users/stats', {
          headers: {
            token: 'Bearer ' + user.accessToken,
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], 'New User': item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);
  return (
    <div className='dashBoardHomePage'>
      <div className='dashBoardHomePageWrapper'>
        <FeaturedInfo />
        <Chart
          data={userStats}
          title='User Analytics'
          grid
          dataKey='New User'
        />
        <div className='dashBhomeWidgets'>
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </div>
  );
}

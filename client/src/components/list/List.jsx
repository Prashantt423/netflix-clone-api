import ListItem from '../listitem/ListItem';
import './list.scss';
import Carousel from 'react-elastic-carousel';
import { useEffect, useState } from 'react';

export default function List() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: windowDimensions.width / 230 },
    { width: 1800, itemsToShow: windowDimensions.width / 230 },
  ];
  return (
    <div className='list'>
      <span className='listTitle'>Continue to watch</span>
      <div className='wrapper'>
        <Carousel
          pagination={false}
          className='carouselBox'
          breakPoints={breakPoints}
        >
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </Carousel>
      </div>
    </div>
  );
}

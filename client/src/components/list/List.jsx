import ListItem from '../listitem/ListItem';
import './list.scss';
import Carousel from 'react-elastic-carousel';
import { useEffect, useState } from 'react';

export default function List({ lists }) {
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
    <>
      {lists && (
        <div className='list'>
          <span className='listTitle'>{lists.title}</span>
          <div className='wrapper'>
            <Carousel
              pagination={false}
              className='carouselBox'
              breakPoints={breakPoints}
            >
              {lists?.content.map((item, i) => (
                <ListItem item={item} key={i} />
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
}

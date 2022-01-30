import ArrowBackOutlined from '@mui/icons-material/ArrowBackOutlined';
import './watch.scss';

export default function Watch() {
  return (
    <div className='watch'>
      <div className='back'>
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className='video'
        autoPlay
        progress='true'
        controls
        src='https://www.youtube.com/watch?v=ljGYf7xd9Vk'
      />
    </div>
  );
}

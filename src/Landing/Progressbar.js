import { Progress } from 'rsuite';
import ReactDOM from 'react-dom';


const style = {
  width: 120,
  display: 'inline-block',
  marginRight: 10
};

const Progressbar = () => (
  <>
    
    <div className='m-4'>
    <div style={style}>
      <Progress.Circle percent={30} strokeColor="#FDFFAB" trailColor="#ccc" />
    </div>
    <div style={style}>
      <Progress.Circle percent={90} strokeColor="#B0D9B1" trailColor="#ccc" />
    </div>
    <div style={style}>
      <Progress.Circle percent={10} strokeColor="#EF9595" trailColor="#ccc" />
    </div>
    </div>
    
  </>
);


export default Progressbar
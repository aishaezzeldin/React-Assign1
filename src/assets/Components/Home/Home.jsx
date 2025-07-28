import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import avater from '../../Images/avataaars.svg';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';

function Home() {
    return ( 
      <>
      <div className='container-fluid home-bg-color py-4 '>
        <div className='d-flex justify-content-center align-items-center '>
        <img  src={avater} alt="avater" style={{ width: '250px' }} />
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center'>
        <h2 className=' home-h2 text-center text-white'>START FRAMEWORK</h2>
        <FontAwesomeIcon className='text-center m-3 text-white' icon={faStar}/>
        </div>
          <div className='text-center text-white '>
        Graphic Artist - Web Designer - Illustrator
      </div>
      </div>
      </>
     );
}

export default Home;
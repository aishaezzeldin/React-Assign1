import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Information.css'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Information() {
    return ( 
        <>

        <div className="container-fluid m-0 p-0">
  <div className="row text-center py-5 Information-bg-color text-white">
    <div className="col-md-4">
      <h3>LOCATION</h3>
      <p>2215 John Daniel Drive</p>
      <p>Clark, MO 65243</p>
    </div>

    <div className="col-md-4">
      <h3>AROUND THE WEB</h3>
      <div className="icons-container d-flex justify-content-center gap-3 mt-3">
        <div className="icon-container mx-2">
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
        <div className="icon-container mx-2">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
        <div className="icon-container mx-2">
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className="icon-container mx-2">
          <FontAwesomeIcon icon={faGlobe} />
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <h3>ABOUT FREELANCER</h3>
      <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
    </div>
  </div>
</div>

        
        
        </>
     );
}

export default Information;




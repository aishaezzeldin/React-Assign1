import { faStar } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";
import './About.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function About() {
    return ( <>
        {/* <Navbar/> */}
        <div className='container-fluid home-bg-color about-bg-color py-5 '>
                
                <div className='d-flex flex-column justify-content-center align-items-center'>
                <h2 className=' home-h2 text-center text-white'>ABOUT COMPONENT</h2>
                <FontAwesomeIcon className='text-center m-3 text-white' icon={faStar}/>
                </div>

                <div className="col-md-6 float-end px-5 text-white">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-6 px-5 text-white">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
        
                
        </div>



    </>  );
}

export default About;
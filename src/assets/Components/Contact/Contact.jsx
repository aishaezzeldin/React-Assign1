import { faStar } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Contact.css'

function Contact() {
    return ( <>
        {/* <Navbar/> */}
            <div className=" container">
                                
                <div className='d-flex flex-column justify-content-center align-items-center'>
                <h2 className=' Portfolio-h2 text-center '>CONTACT SECTION</h2>
                <FontAwesomeIcon className='star port-main-color text-center m-3 ' icon={faStar}/>
                </div>
<form >
             <div class="form-prop my-5 ">
                <input type="text" class="inputText" required/>
                <label class="floating-label">userName</label>
                </div>
                <div class="form-prop my-5 ">
                <input type="text" class="inputText" required/>
                <label class="floating-label">userAge</label>
                </div>
                <div class="form-prop my-5 ">
                <input type="text" class="inputText" required/>
                <label class="floating-label">userMail</label>
                </div>
                <div class="form-prop my-5 ">
                <input type="text" class="inputText" required/>
                <label class="floating-label">userPassword</label>
                </div>

            <div class="text-center mt-4">
    <button type="submit" class="btn btn-primary">Send Message</button>
  </div>

</form>

        

    </div>


    </>
);
}

export default Contact

import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import poert1 from '../../Images/poert1.png';
import poert2 from '../../Images/port2.png';
import poert3 from '../../Images/port3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Portfolio.css'

function Portfolio() {
    return ( <>

    <div className=" container">
                    
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h2 className=' Portfolio-h2 text-center '>ABOUT COMPONENT</h2>
                    <FontAwesomeIcon className='star port-main-color text-center m-3 ' icon={faStar}/>
                    </div>
                    <div className="row m-3 ">
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="mx-1 my-3">
                                <div className="img-item">
                                <img className="rounded" src={poert1} alt="home" style={{ width: '400px', cursor: 'pointer' }}/>
                                <div className="img-layer d-flex justify-content-center align-items-center"  data-bs-toggle="modal" data-bs-target="#homeModal">
                                            <FontAwesomeIcon className="plus-prop" icon={faPlus}/>
                                        </div> 
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="mx-1 my-3">
                                <div className="img-item">
                                <img className="rounded" src={poert2} alt="cake" style={{ width: '400px', cursor: 'pointer' }}/>
                                <div className="img-layer d-flex justify-content-center align-items-center"  data-bs-toggle="modal" data-bs-target="#cakeModal">
                                            <FontAwesomeIcon className="plus-prop" icon={faPlus}/>
                                        </div> 
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="mx-1 my-3">
                                <div className="img-item">
                                <img className="rounded" src={poert3} alt="circus" style={{ width: '400px', cursor: 'pointer' }}/>
                                <div className="img-layer d-flex justify-content-center align-items-center"  data-bs-toggle="modal" data-bs-target="#circusModal">
                                            <FontAwesomeIcon className="plus-prop" icon={faPlus}/>
                                        </div> 
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="mx-1 my-3">
                                <div className="img-item">
                                <img className="rounded" src={poert1} alt="home" style={{ width: '400px', cursor: 'pointer' }}/>
                                <div className="img-layer d-flex justify-content-center align-items-center"  data-bs-toggle="modal" data-bs-target="#homeModal">
                                            <FontAwesomeIcon className="plus-prop" icon={faPlus}/>
                                        </div> 
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="mx-1 my-3">
                                <div className="img-item">
                                <img className="rounded" src={poert2} alt="cake" style={{ width: '400px', cursor: 'pointer' }}/>
                                <div className="img-layer d-flex justify-content-center align-items-center"  data-bs-toggle="modal" data-bs-target="#cakeModal">
                                            <FontAwesomeIcon className="plus-prop" icon={faPlus}/>
                                        </div> 
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="mx-1 my-3">
                                <div className="img-item">
                                <img className="rounded" src={poert3} alt="circus" style={{ width: '400px', cursor: 'pointer' }}/>
                                <div className="img-layer d-flex justify-content-center align-items-center"  data-bs-toggle="modal" data-bs-target="#circusModal">
                                            <FontAwesomeIcon className="plus-prop" icon={faPlus}/>
                                        </div> 
                                </div>
                                </div>
                            </div>

                    </div>
    </div>

            {/* models */}
    
    
            <div className="modal fade" id="homeModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content">
                <div className="modal-body position-relative">
                    <img
                    className="rounded "  src={poert1} alt="home" style={{ width: '100%', cursor: 'pointer' }} 
                    />
                </div>
                </div>
            </div>
            </div>
            <div className="modal fade" id="cakeModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered my-auto">
                <div className="modal-content">
                <div className="modal-body position-relative">
                    <img
                    className="rounded "  src={poert2} alt="cake" style={{ width: '100%', cursor: 'pointer' }} 
                    />
                </div>
                </div>
            </div>
            </div>
            <div className="modal fade" id="circusModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered my-auto">
                <div className="modal-content">
                <div className="modal-body position-relative">
                    <img
                    className="rounded "  src={poert3} alt="circus" style={{ width: '100%', cursor: 'pointer' }} 
                    />
                </div>
                </div>
            </div>
            </div>
            <div className="modal fade" id="homeModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered my-auto">
                <div className="modal-content">
                <div className="modal-body position-relative">
                    <img
                    className="rounded "  src={poert1} alt="home" style={{ width: '100%', cursor: 'pointer' }} 
                    />
                </div>
                </div>
            </div>
            </div>
            <div className="modal fade" id="cakeModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered my-auto">
                <div className="modal-content">
                <div className="modal-body position-relative">
                    <img
                    className="rounded "  src={poert2} alt="cake" style={{ width: '100%', cursor: 'pointer' }} 
                    />
                </div>
                </div>
            </div>
            </div>
            <div className="modal fade" id="circusModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered my-auto">
                <div className="modal-content">
                <div className="modal-body position-relative">
                    <img
                    className="rounded "  src={poert3} alt="circus" style={{ width: '100%', cursor: 'pointer' }} 
                    />
                </div>
                </div>
            </div>
            </div>
    </> );
}

export default Portfolio;
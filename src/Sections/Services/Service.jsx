import { } from 'react'

// Styles
import './Service.style.css'
import { Row, Col } from 'react-bootstrap'
import img1 from '../../assets/Images/Lightingdesignicon.png'
import img2 from '../../assets/Images/Interiordesignicon.png'
import img3 from '../../assets/Images/Outdoordesignicon.png'


function Service() {
    return (
        <>
            <section className='containerUser serviceParent'>

                <div className="serviceTitle">
                    <div className="drawLine"></div>
                    <h2>Our Services</h2>
                </div>


                <div className="serviceContent">
                    <Row>
                        <Col lg='4' md='6' sm='12' className='mb-3'>
                            <div className="serElement">
                                <div className="serIcon">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="serElementContent">
                                    <h4>Lighting Design</h4>
                                    <p>Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg='4' md='6' sm='12' className='mb-3'>
                            <div className="serElement">
                                <div className="serIcon">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="serElementContent">
                                    <h4>Interior Design</h4>
                                    <p>From concept to completion, we oversee every detail to bring your vision to life efficiently</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg='4' md='6' sm='12' className='mb-3'>
                            <div className="serElement">
                                <div className="serIcon">
                                    <img src={img3} alt="" />
                                </div>
                                <div className="serElementContent">
                                    <h4>Outdoor Design</h4>
                                    <p>Celebrate the changing seasons with our seasonal outdoor decor services</p>
                                </div>
                            </div>
                        </Col>
                    </Row>







                </div>
            </section>
        </>
    )
}

export default Service

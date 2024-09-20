import { } from 'react'

// Styles
import './Service.style.css'
import { Row, Col } from 'react-bootstrap'


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
                                    <img src="../../../public/Images/Lighting design icon.png" alt="" />
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
                                    <img src="../../../public/Images/Interior design icon.png" alt="" />
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
                                    <img src="../../../public/Images/Outdoor design icon.png" alt="" />
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

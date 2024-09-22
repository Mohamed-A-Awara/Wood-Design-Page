import { } from 'react'
import { Row, Col } from 'react-bootstrap'
import { GrAdd } from "react-icons/gr";

// Style
import './Design.style.css'
import img from '../../assets/Images/Maskgroup.png'

function Design() {
    return (
        <>
            <section className='containerUser designParent'>
                <Row>
                    <Col lg='6' sm='12' className='text-center'>
                        <img
                            src={img}
                            alt="image"
                        />
                    </Col>
                    <Col lg='6' sm='12' >
                        <div className="designContent">
                            <h2>Designing Your Dream With Brilliance</h2>
                            <p className='designContent-text'>Elevate your spaces with bespoke interior designs that reflect your unique style and aspirations, crafted with precision and brilliance for an unforgettable living experience</p>

                            <div className="designContent-living">
                                <h4>Living Room Interior Design</h4>
                                <p> <GrAdd/> </p>
                            </div>
                            <div className="designContent-living">
                                <h4>Commercial Office Room Interior Design</h4>
                                <p> <GrAdd/> </p>
                            </div>

                            <button>Learn More</button>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Design
import { } from 'react'
// Style
import './Home.style.css'
import { GoArrowDown } from "react-icons/go";

function Home() {
    return (
        <>
            <section className='homeParent'>
                <div className='containerUser'>
                    <div className="homePartsParent">

                        {/* Start Part One */}
                        <div className='homePartOne'>
                            <div className="partOneContent">
                                <h1>Interior Design</h1>
                                <p>Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and
                                    cutting-edge modern Innovation, Allowing you to transform your living spaces into the epitome of luxury and sophistication
                                </p>
                            </div>

                            <div className="partOneImg">
                                <img
                                    src="../../../public/Images/homePartOne.png"
                                    alt="image Part One"
                                    className='partOneImg-box'
                                />
                            </div>
                        </div>
                        {/* End Part One */}

                        {/* Start Part Two */}
                        <div className='homePartTwo'>

                            <div className="partTwoContent">
                                <button>Start Project</button>

                                <div className="counterBlock">
                                    <div className="counterOne">
                                        <p className='number'>400+</p>
                                        <p className='number-title'>Project Complete</p>
                                    </div>
                                    <div className="counterOne">
                                        <p className='number'>600+</p>
                                        <p className='number-title'>Satisfied Clients</p>
                                    </div>
                                    <div className="counterOne">
                                        <p className='number'>100+</p>
                                        <p className='number-title'>Unique Styles</p>
                                    </div>
                                </div>
                            </div>

                            <div className="partTwoImgBox">
                                <img
                                    src="../../../public/Images/homePartTwo.png"
                                    alt="Image Part Two"
                                    className='partTwoImg'
                                />
                                <div className='drawBox'></div>
                                <div className='drawArrow'>
                                    <p>
                                    <GoArrowDown/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* End Part Two */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
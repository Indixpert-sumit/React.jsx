import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function NoTransitionExample() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % 3);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + 3) % 3);
    };

    return (
        <div>

            <Carousel activeIndex={index} onSelect={handleSelect} >
                {/* Slide 1 */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wowslider.com/sliders/demo-44/data1/images/bridge.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Slide 2 */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Slide 3 */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

            {/* Next & Previous Buttons */}
            <div className="d-flex justify-content-center gap-3 mt-3">
                <button className="btn btn-primary" onClick={handlePrev}>
                    Previous
                </button>
                <button className="btn btn-primary" onClick={handleNext}>
                    Next
                </button>
            </div>

        </div>
    );
}

export default NoTransitionExample;

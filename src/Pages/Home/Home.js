import {Carousel} from 'react-bootstrap';
import image1 from '../../assets/img/image1.jpg';
import image2 from '../../assets/img/image2.jpg';
import image3 from '../../assets/img/image3.jpg';
import logo from '../../assets/img/logo.png';
function Home(){
    return(
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={image2}
                alt="Second slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={image3}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Home;
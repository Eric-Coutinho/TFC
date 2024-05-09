import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './styles.module.scss';

import Cubo from '../../img/Cubo.png';
import Hamburg from '../../img/hamburg.jpg'

export default function CarrouselHome() {
    const images = [Cubo, Hamburg];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} className={styles.itemCarrossel}>
                    <img className={styles.img} src={image} alt={`Image ${index}`} />
                </div>
            ))}
        </Slider>
    );
}
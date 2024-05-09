import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './styles.module.scss';

import Cubo from '../../img/Cubo.png';
import Hamburg from '../../img/hamburg.jpg';
import CarrouselHome from '../../components/carousselHome';

export default function HomePage() {
    const images = [Cubo, Hamburg];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Row className={styles.row}>
            <Col sm={12} lg={12}>
                <CarrouselHome />
            </Col>
        </Row>
    );
}

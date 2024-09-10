import React from 'react';
import './Highlights.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from '../assets/Image.png';
import image2 from '../assets/hula.png';
import image3 from '../assets/volcano.png'

const Highlights = () => {
    const highlightsData = [
        {
            id: "surfing",
            title: "Surfing",
            text: "Best Hawaiian island for surfing",
            imgSrc: image1
        },
        {
            id: "hula",
            title: "Hula",
            text: "Try it yourself",
            imgSrc: image2,
        },
        {
            id: "volcanoes",
            title: "Volcanoes",
            text: "Volcanic conditions can change at any time",
            imgSrc: "https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
    ];

    return (
        <Container>
            <h4 className="mb-4 mt-5 ">Highlights</h4>
            <div className="card-scroll ml-5">
                <Row className="g-4">
                    {highlightsData.map((highlight) => (
                        <Col xs={12} md={4} lg={4} key={highlight.id} id={highlight.id}>
                            <Card style={{ width: '24rem' }} id={`card-${highlight.id}`}>
                                <Card.Img variant="top" className='hiImg' src={highlight.imgSrc} />
                                <Card.Body>
                                    <Card.Title>{highlight.title}</Card.Title>
                                    <Card.Text>{highlight.text}</Card.Text>
                                    <i className="bi bi-arrow-right-circle arrow-icon"></i>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
}

export default Highlights;

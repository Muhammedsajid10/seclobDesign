
import React from 'react';
import { MdArrowForward } from 'react-icons/md'; // Ensure this is uncommented
import { Container, Row, Col, Button } from 'react-bootstrap'; 
import guideImg from '../assets/Head.jpg'; // Ensure the image path is correct

const categories = ['Adventure', 'Culinary', 'Eco-tourism', 'Family', 'Sport'];

const Categories = () => {
    return (
        <div className='Cate w-full mt-16 sm:mt-0'>
            <Container>
                <Row className='h-full'>
                    {/* Categories List */}
                    <Col xs={12} md={6}>
                        <h1 className="mb-4 mt-5 ml-5 font-weight-bold border-bottom text-2xl">Categories</h1>
                        <div className='space-y-4'>
                            {categories.map((category, index) => (
                                <div 
                                    key={index} 
                                    className="d-flex justify-content-between align-items-center bg-light p-4 rounded shadow-sm cursor-pointer">
                                    <span className="text-lg font-medium">{category}</span>
                                    <MdArrowForward size={24} className="text-primary" />
                                </div>
                            ))}
                        </div>
                    </Col>

                    {/* Travel Guide Section */}
                    <Col xs={12} md={6}>
                        <h1 className="mb-4 mt-5 font-weight-bold border-bottom text-2xl">Travel Guide</h1>
                        <div className="d-flex justify-content-between align-items-center bg-light p-8 rounded shadow-sm cursor-pointer">
                            {/* Guide Information */}
                            <div>
                                <p className="text-3xl font-weight-bold">Muhammad Sajid</p>
                                <p className="text-muted">Guide since 2015</p>
                                <Button variant="outline-primary" className="mt-4">Contact</Button>
                            </div>
                            {/* Guide Image */}
                            <div>
                                <img className="rounded-circle w-32 h-32 object-cover" src={guideImg} alt="Guide" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Categories;

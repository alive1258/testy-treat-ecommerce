import React from 'react';
import logo from '../../assets/images/res-logo.png';
import { Container, Row, Col ,ListGroup, ListGroupItem} from "reactstrap";
import '../../styles/footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3' md='4'sm='6'>
                    <div className="logo footer_logo text-start">
                        <img src={logo} alt="logo" />
                         <h5>Testy Treat</h5>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Veniam odit cumque.</p>
                        </div>

                    </Col>
                    <Col lg='3' md='4'sm='6'>
                    <h5 className='footer_title'>Delivery Time</h5>
                    <ListGroup className='delivery-time-list'>
                        <ListGroupItem className='delivery_time-item border-0 ps-0'>
                            <span> Sunday - Thursday</span>
                            <p>10:00am - 11:00pm</p>
                           
                        </ListGroupItem>

                        <ListGroupItem className='delivery_time-item border-0 ps-0'>
                            <span> Friday - Saturday</span>
                              <p>off day</p>

                        </ListGroupItem>
                    </ListGroup>
                 </Col>

                    <Col lg='3' md='4'sm='6'>
                    <h5 className='footer_title'>Contact</h5>
                    <ListGroup className='delivery-time-list'>
                    <ListGroupItem className='delivery_time-item border-0 ps-0'>
                            <p>Location: Uttara, Sector-11, Road-7 ,House-46, Dhaka</p>
                            
                           
                        </ListGroupItem>
                        <ListGroupItem className='delivery_time-item border-0 ps-0'>
                            <span> Phone: 017233442453</span>
                            
                           
                        </ListGroupItem>

                        <ListGroupItem className='delivery_time-item border-0 ps-0'>
                            <span>Email: example@gmail.com</span>
                              

                        </ListGroupItem>
                    </ListGroup>
                    </Col>
                    <Col lg='3' md='4'sm='6'>
                        <h5 className='footer_title'>Newsletter</h5>
                        <p>Subscribe our newsletter</p>
                        <div className='newsletter'>
                            <input type="email" placeholder='Enter your email' />
                            <span>
                                <i class='ri-send-plane-line'></i>
                            </span>

                        </div>

                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col lg='6' md='6' >
                        <p className="copyright_text">
                            Copyright - 2022, website made by Zamirul Kabir .All Rrights Reserved

                        </p>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="social_links d-flex align-items-center gap-4 justify-content-end">
                            <p className='m-0'>Follow:</p>
                            <span>
                                <Link to="https://www.facebook.com/"><i class="ri-facebook-line"></i></Link>
                            </span>
                            <span>
                                <Link to="https://www.youtube.com/"><i class="ri-youtube-line"></i></Link>
                            </span>
                            <span>
                                <Link to="https://www.linkedin.com/"><i class="ri-linkedin-line"></i></Link>
                            </span>
                            <span>
                                <Link to="https://www.github.com/"><i class="ri-github-line"></i></Link>
                            </span>
                           
                        </div>
                    </Col>
                </Row>

            </Container>
   
        </footer>
    
      
    );
};

export default Footer;
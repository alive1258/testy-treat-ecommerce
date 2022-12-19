import React,{useState, useEffect} from 'react';

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col,ListGroup ,ListGroupItem} from 'reactstrap';

import heroImg from '../assets/images/hero.png';
import '../styles/hero-section.css';

import { Link } from 'react-router-dom';
import Category from '../components/UI/category/Category.jsx';
import '../styles/home.css'

import featureImg01 from '../assets/images/service-01.png';
import featureImg02 from '../assets/images/service-02.png';
import featureImg03 from '../assets/images/service-03.png';

import products from '../assets/fake-data/products.js';

import foodCategoryImg01 from '../assets/images/hamburger.png';
import foodCategoryImg02 from '../assets/images/pizza.png';
import foodCategoryImg03 from '../assets/images/bread.png';

import ProductCard from '../components/UI/product-card/ProductCard.jsx';

import whyImg from '../assets/images/location.png';

import networkImg from '../assets/images/network.png';

import TestimonialSlider from '../components/UI/slider/TestimonialSlider.jsx';



const fertureData =[
    {
        title:'Quick Delivery',
        imgUrl: featureImg01,
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus eius aspernatur tempore.',
    },
    {
        title:'Super Dine In',
        imgUrl: featureImg02,
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus eius aspernatur tempore.',
    },
    {
        title:'Easy Pick Up',
        imgUrl: featureImg03,
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus eius aspernatur tempore.',
    },
]


const Home = () => {
    // all product filter er jonnjo nice usestetuse kora hoicy 
    const [category, setCategory] = useState('ALL')
    const [allProducts, setAllProducts] = useState(products)

    const [hotPizza, setHotPizza] = useState([])

    useEffect( ()=>{
        const filteredPizza = products.filter(item => item.category === 'Pizza')
        const slicePizza = filteredPizza.slice(0,4)
        setHotPizza(slicePizza)
    },[])

    useEffect( ()=>{
        if(category === 'ALL'){
            setAllProducts(products)
        }
        if(category === 'BURGER'){
            const filteredProducts = products.filter(item=> item.category === 'Burger')
            setAllProducts(filteredProducts)
        }
        if(category === 'PIZZA'){
            const filteredProducts = products.filter(item=> item.category === 'Pizza')
            setAllProducts(filteredProducts)
        }
        if(category === 'BREAD'){
            const filteredProducts = products.filter(item=> item.category === 'Bread')
            setAllProducts(filteredProducts)
        }
      

    },[category])

    return (
       <Helmet title='Home'>
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero_content">
                            <h5 className='mb-3 '>Easy way to make an order</h5>
                            <h1 className='mb-4 hero_title'><span>Hungry ?</span> Just wait <br /> food at <span> Your door</span></h1>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus 
                                in earum debitis fugiat, eligendi tenetur!

                            </p>
                            <div className='hero_btns d-flex align-items-center gap-5 mt-4'>
                                <button className='order_btn d-flex align-items-center justify-content-betwen'>
                                    Order Now <i className='ri-arrow-right-s-line'></i>
                                    </button>
                                
                                <button className='all_foods-btn '>
                                    <Link to='/foods'>See all foods</Link>
                                </button>
                            </div>
                            <div className='hero_service d-flex align-items-center gap-5 mt-5'>
                                <p className='d-flex align-items-center gap-2'>
                                    <span className='shipping_icon '>
                                        <i className='ri-car-line'></i>
                                 
                                    </span>{" "}
                                     No Shipping Charge
                                </p>
                                <p className='d-flex align-items-center gap-2'>
                                    <span className='shipping_icon '>
                                        <i className='ri-shield-check-line'></i>
                                     
                                    </span>{" "} 
                                      100% secure checkout
                                </p>
                            </div>
                        </div>
                    </Col>
               
                   
                </Row>
            </Container>
        </section>

        <section className='pt-0'>
            <Category />
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='text-center'>
                        <h5 className='feature_subtitle mb-4'>What we serve</h5>
                        <h2 className='feature_title'>Just sit back at home</h2>
                        <h2 className='feature_title'>we will  <span>take care</span></h2>
                        <p className='mb-1 mt-4 feature_text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga .
                         </p>
                        <p className='feature_text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga .
                            {" "}
                         </p> 
                    </Col>

                   
                    {
                        fertureData.map((item,index)=>(
                            <Col lg='4' md='6' sm='6' key={index} className="mt-5">
                            <div className="ferture_item text-center px-5 py-3">
                                <img src={item.imgUrl} alt="feature-img"  className='w-25 mb-3'/>
                                <h5 className='fw-bold mb-3'>{item.title} </h5>
                                <p>{item.desc} </p>
    
                            </div>
                   
                            </Col>
                        ))
                    }
                   
                    
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg='12' className='text-center'>
                        <h2>Populer Foods</h2>
                    </Col>
                    <Col lg='12'>
                        <div className='food_ctegory d-flex align-items-center justify-content-center gap-4'>

                            <button 
                                className={`all_btn ${category === 'ALL' ? 'foodBtnActive' : ''}`}
                                onClick={()=> setCategory('ALL')}> All
                            </button>

                            <button 
                                className={`d-flex align-items-center gap-2 ${category === 'BURGER' ? 'foodBtnActive' : ''}`}
                                onClick={()=> setCategory('BURGER')}>
                                <img src={foodCategoryImg01} alt="" />
                                Burger
                             </button>
                            <button 
                                 className={`d-flex align-items-center gap-2 ${category === 'PIZZA' ? 'foodBtnActive' : ''}`}
                                onClick={()=> setCategory('PIZZA')}>
                                <img src={foodCategoryImg02} alt="" />
                                Pizza
                             </button>

                            <button 
                                className={`d-flex align-items-center gap-2 ${category === 'BREAD' ? 'foodBtnActive' : ''}`}
                                onClick={()=> setCategory('BREAD')}>
                                    <img src={foodCategoryImg03} alt="" />
                                    
                            
                                Bread
                            </button>
                            


                        </div>
                    </Col>
                    {
                        allProducts.map((item)=>(
                            <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                                <ProductCard item={item} />

                             </Col>

                        ))
                    }
                    
                </Row>
            </Container>
        </section>

        <section className='why_choose-us'>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <img src={whyImg} alt="why-testy-treat" className='w-100'/>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="why_testy-treat">
                            <h2 className="testy_treat-title mb-4">Why <span>Testy Treat?</span> </h2>
                            <p className='testy_treat-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio cum dolor a quaerat! Voluptatibus laudantium veritatis sequi quos,
                                 laboriosam dicta?
                            </p>
                            <ListGroup className='mt-4'>
                                <ListGroupItem className='border-0 ps-0'>
                                    <p className='choose_us-title d-flex align-items-center gap-2'>
                                    <i className='ri-checkbox-circle-line'></i>
                                    Fresh and testy foods
                                    </p>
                                    <p className='choose_us-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, ad?</p>
                                </ListGroupItem>

                                <ListGroupItem className='border-0 ps-0'>
                                   <p  className=' choose_us-title d-flex align-items-center gap-2'>
                                   <i className='ri-checkbox-circle-line'></i>
                                    Quality Support 
                                   </p>
                                   <p className='choose_us-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, numquam.</p>
                                </ListGroupItem>

                                <ListGroupItem className='border-0 ps-0'>
                                   <p  className= 'choose_us-title  d-flex align-items-center gap-2'>
                                   <i className='ri-checkbox-circle-line'></i>
                                    Order form any location{" "}
                                   </p>
                                   <p className='choose_us-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, numquam.</p>
                                </ListGroupItem>

                            </ListGroup>

                        </div>
                    </Col>
                </Row>
            </Container>

        </section>

        <section className='pt-0'>
            <Container>
                <Row>
                    <Col lg='12' className='text-center '>
                        <h2>Hot Pizza</h2>
                    </Col>
                    {
                        hotPizza.map(item=>(
                            <Col lg='3' md='4' key={item.id}>
                                <ProductCard  item={item}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>

        </section>

        <section>
            <Container>
                <Row>
                    
                    <Col lg='6' md='6'>
                        <div className='testimonial '>
                        <h5 className='testimonial_subtitle mb-4'>Testimonail</h5>
                        <h2 className='testimonial_title mb-4'>What our <span>Customers</span> are saying</h2>
                        <p className='testimonail_desc'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, reprehenderit. 
                            Possimus necessitatibus tempora quos ullam nam sint natus labore quisquam!
                        </p>
                        <TestimonialSlider />
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <img src={networkImg} alt="testimonial-img" className='w-100'/>
                    </Col>

                </Row>
            </Container>
        </section>

       </Helmet>
    );
};

export default Home;
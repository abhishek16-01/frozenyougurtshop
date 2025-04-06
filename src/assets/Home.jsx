import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Home() {
  return (

    <>

      <Container fluid className='bg-container1 text-center'>
        <div> 
          <img src="./bg-home.jpg " alt="" /> 
        
          <h3 className='product-img'>
           
        <Link  to="/Product"className='link'>Freeze Delight</Link></h3>
        </div>
      </Container>

      <Container fluid className='bg2-container2'>

        <Col className='info p-4'><h1>NEW PRODUCT</h1>
          <h2 className='text-danger'>The Twist of Healthy Yogurt</h2>
          <p>
            "This website template has been designed by "
            <a href="https://freewebsitetemplates.com/preview/frozenyogurtshop/index.html">Free website</a> <br />
            "for you, for free. You can replace all this text with your own text."
          </p></Col>

        <Col className='bg2-img' >
          <img src="./yogurt.jpg" alt="" />
        </Col>
      </Container>

      <div className="container3 text-center p-5">
        <div className="row">
          <div className="col">
          <i className="fa-solid fa-ice-cream fs-1"></i><br/>
          <Link to="/Product" className='text-light '> PRODUCT</Link>
          </div>

          <div className="col">
          <i class="fa-solid fa-hand fs-1"></i><br/>
          <Link to="/About" className='text-light'> OUR STORY</Link>
          </div> 


          <div className="col">
          <i className="fa-solid fa-droplet fs-1"></i><br/>
          <Link to="/Product" className='text-light'>FLAVORS</Link>
          </div>



          <div className="col">
          <i className="fa-solid fa-location-dot fs-1 "></i><br/>
          <Link to="/Contact" className='text-light'>LOCATION</Link>
          </div>
        </div>
      </div>
    </>



  )
}

export default Home
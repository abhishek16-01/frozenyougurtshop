import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'




function Product() {

  let navigate=useNavigate()
  const[cart,setCart]=useState([])

  let prod=[{
    price: 70,
    name: 'Mango'
  }]

  function addcart()
  {
    cart.push()
    navigate('/Carts',{state:cart})
  }

  return (
    <div>
      
      <h3 className=' About p-4 text-center text-light '>PRODUCT</h3>

      

      <div className="container text-center mb-5">
        <div className="row">
          <div className="col  ">
            <h2 className='text-center text-danger fw-bolder'> All Time Classic</h2>
            <p className='p-3' style={{ textAlign: "justify" }}>This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.</p>
          </div>
          <div className="col">
            <img src="./kiwi.jpg" alt="" /> <br />
            <h4>KIWI</h4>
            <p className='fs-5 '>Price: $70</p>
            <button onClick={()=> addcart('/Carts')} className='bg-warning p-3   rounded-pill' style={{ width: "150px" }}>Add Cart</button>

          </div>
          <div className="col">
            <img src="./mango.jpg" alt="" /> <br />
            <h4>MANGO</h4>
            <p className='fs-5 '>Price: $80</p>
            <button className='bg-warning p-3   rounded-pill' style={{ width: "150px" }}>Add Cart</button>
          </div>
          <div className="col">
            <img src="./cantaloupe.jpg" alt="" /><br />
            <h4>CANTALOUPE</h4>
            <p className='fs-5 '>Price: $75</p>
            <button className='bg-warning p-3   rounded-pill' style={{ width: "150px" }}>Add Cart</button>
          </div>
        </div>
      </div>



      {/* 2nd row */}


      <div className="container text-center mb-5">
        <div className="row">
          <div className="col  ">
            <h2 className='text-center text-danger fw-bolder'> Berry Special</h2>
            <p className='p-4' style={{ textAlign: "justify" }}>Want an easier solution for a Free Website? Head straight to Wix and immediately start customizing your website!</p>
          </div>
          <div className="col">
            <img src="./blackberry.jpg" alt="" /> <br />
            <h4>BLACKBERRY</h4>
            <p className='fs-5 '>Price: $95</p>
            <button className='bg-warning p-3   rounded-pill' style={{ width: "150px" }}>Add Cart</button>

          </div>
          <div className="col">
            <img src="./blueberry.jpg" alt="" /> <br />
            <h4>BLUEBERRY</h4>
            <p className='fs-5 '>Price: $90</p>
            <button className='bg-warning p-3   rounded-pill' style={{ width: "150px" }}>Add Cart</button>

          </div>
          <div className="col">
            <img src="./strawberry.jpg" alt="" /><br />
            <h4>STRAWBERRY</h4>
            <p className='fs-5 '>Price: $45</p>
            <button className='bg-warning p-3   rounded-pill' style={{ width: "150px" }}>Add Cart</button>

          </div>
        </div>
      </div>



      {/* 3rd row */}


      <div className="container text-center mb-5">
        <div className="row">
          <div className="col  ">
            <h2 className='text-center text-danger fw-bolder'> Fruit Blast</h2>
            <p className='p-4' style={{ textAlign: "justify" }}>All Wix templates are fully customizable and free to use. Just pick one you like, click Edit, and enter the online editor. Change, add, and remove items as you like.</p>
          </div>
          <div className="col">
            <img src="./grapes.jpg" alt="" /> <br />
            <h4>GRAPES</h4>
            <p className='fs-5 '>Price: $76</p>
            <button className='bg-warning p-3   rounded-pill' style={{ width: "150px" }}>Add Cart</button>

          </div>
          <div className="col">
            <img src="./green-apple.jpg" alt="" /> <br />
            <h4>GREEN APPLE</h4>
            <p className='fs-5 '>Price: $66</p>
            <button className='bg-warning p-3   rounded-pill' style={{ width: "150px" }}>Add Cart</button>
          </div>
          <div className="col">
            <img src="./pineapple.jpg" alt="" /><br />
            <h4>STRAWBERRY</h4>

            <p className='fs-5 '>Price: $85</p>
            <button className='bg-warning p-3   rounded-pill' style={{ width: "150px" }}>Add Cart</button>
          </div>



        </div>
      </div>

    </div>






  )
}

export default Product
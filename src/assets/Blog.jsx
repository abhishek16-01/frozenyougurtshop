import React from 'react'
import { Container } from 'react-bootstrap'

function Blog() {
  return (
    <>
    <Container fluid>
      <h3 className=' About p-4 text-center text-light'>BLOG</h3>


      <div className="container p-5 ">
        <div className="row row-cols-2">
          <div className="col"> 
            <img src="./new-chills.png"  />
            <h4 className='blog-title m-5'> NEW CHILLS FOR SUMMER</h4> 
            <p className='blog-title m-5'>By Admin on November 28,2024</p>

            <p className='blog-title'>
            This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. Want an easier solution for a Free Website? Head straight to Wix and immediately start customizing your website! Wix is an online website builder with a simple drag & drop interface, meaning you do the work online and instantly publish to the web. Nothing to download, nothing to upload. All Wix templates are fully customizable and free to use. Just pick one you like, click Edit, and enter the online editor. Change, add, and remove items as you like.
            </p>

            <a href="/Singlepost" className='read ' >READ MORE</a>

          </div>
          <div className="col post  text-center mt-5 p-5">

            <h3 className='p-3'>Recent Posts</h3>
            <img src="./on-diet.png"  className='p-4'/>

            <p className='text-center text-uppercase p-4'>on the diet</p>

            <p>By Admin on November 28, 2023</p>

            <p>This is just a place holder,so <br /> you can see what the site <br /> would look like.</p>

            <a href="./Singlepost" className='read'>READ MORE</a>
          </div>

          <div className="col">
            <hr />
            <img src='./berries.png'/>
            <h4 className='blog-title m-5 text-uppercase'>berries on the grove</h4> 

            <p className='text-center'>By Admin on November 28, 2023</p>
            <p>
            This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text</p>

            <a href="./Singlepost" className='read'>READ POST</a>
          </div>
        </div>
      </div>
      </Container>
    </>
  )
}

export default Blog
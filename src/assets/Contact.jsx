import React from 'react'
import Button from 'react-bootstrap/Button';
function Contact() {
  return (
    <div className='text-center'>
      <h3 className=' About p-4 text-center text-uppercase text-light '>Contact</h3>


      <div className='contact-img'> <br />
        <div className='loction text-center'>
          <img src="./check-in.png" alt="" className='mt-4 ' />
          <h3 className='text-uppercase text-danger '>unit 0123, abc building, bussiness park</h3>

          <p>This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. </p>
        </div>
      </div> <br /><br />

      <form className='m-5'>

        <h4 className=' inquiry text-uppercase text-danger  mb-3'>inquiry form</h4>

        <input type="text" placeholder='Name' className='p-2 ' /> <br /><br />

        <input type="email" placeholder="Email " className='p-2' /><br /><br />

        <input type="text" placeholder="Subject " className='p-2' /> <br /><br />

        <textarea>Share your thoughts</textarea> <br /><br />

        <Button variant="dark" className='p-3'>Send</Button>

      </form>


    </div>
  )
}

export default Contact
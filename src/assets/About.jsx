import React from 'react'

function About() {
  return (
    <div>
      <h3 className=' About p-4 text-center text-light'>ABOUT</h3>

      <div className=' header-about text-center'>

        <img src="./bg-header-about.jpg" alt="" />
      </div>

      <div className='mt-4 mb-5' style={{
        marginLeft: "250px"
      }}>



        <div className="row">
          <div className="col-sm-3 mb-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title text-danger">Be Part of Our  <br /> <br />Community <br /> <br /></h5>
                <p className="card-text">
                  If you're experiencing <br /><br />
                  issues or having concerns <br /><br />about this website  <br /> <br /> template, join the <br /><br />
                  discussion on our forum  <br />  <br /> and meet other people in <br />   <br />
                  the community who share <br /> <br />
                  the same interests..</p>

              </div>
            </div>
          </div>


          <div className="col-sm-7">
            <div className="">
              <div className="card-body">
                <h3 className="card-title text-danger text-uppercase">
                  We Have Free Templates For Everyone</h3> <br />
                <p className="card-text">
                  Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What’s more, they’re absolutely free! You can do a lot with them. You can modify them. <br /><br />

                  You can use them to design websites for clients, so long as you agree with the Terms of Use. You can even remove all our links if you want to.</p> <br /><br />


                <h3 className='text-danger text-uppercase'>We Have More Templates For You
                </h3>

                <p>Looking for more templates? Just browse through all our Free Website Templates. But if you can’t find any website templates you can use, try our Free Web Design service and tell us all about it. We love a good challenge!</p> <br /><br />

                <h3 className='text-danger text-uppercase '>Template Details</h3>

                <p>Design Version 2. <br />
                  Code Version 1. <br />
                  Website Template details, discussion and updates for this Frozen Yogurt Shop Website Template. <br />

                  Website Template design by Free Website Templates.</p>


              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import { FaExternalLinkAlt} from 'react-icons/fa';
import { IoIosCall,IoLogoWhatsapp } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
import {BsFillStarFill} from 'react-icons/bs'
import {TIBCOURSE,skilllogic,TIBTRENDING,countries,footer,Branches} from './Data'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReactReadMoreReadLess from "react-read-more-read-less";

const TIB  = () => {
  const [show,setshow]=useState(false);

  const options = { 
    responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 4,

      }, 
  },
  loop:true ,
  nav:true  ,
  margin:0
  
  }
  const longText =
  'Skillogic is one of the leading institute for professional certifications training in Bangalore. Centrally located at BTM layout, Bangalore office is serving as head quarters of Skillogic asia-pacific region. Skillogic offers popular certification courses such as ITIL, PRINCE2, PMP®, Agile PM, Six Sigma, Cloud Computing, SAP etc., Trained over 10,000+ professionals across 35+ countries globally Skillogic adapts case study based learning methodology in simulating real time environment in training, enabling participants to understand not only the concepts but also the practical application in their respective work areas';
    
  return (
    <div>
      <a href="https://wa.me/916366764712" className="whatsapp_float" target="_blank"><IoLogoWhatsapp></IoLogoWhatsapp></a>
      {/* navbar start */}
         <div className="wrapper">
          <div className="container">
          <div className="row">
          <form className="d-flex justify-content-end">
           <a className="nav-link" href="#"><FaExternalLinkAlt />Offers upto 50%</a>
            <a className="nav-link disabled"><IoIosCall />1800-212-5353</a>
          <a className="nav-link disabled"><AiOutlineMail />Drop a Query</a>
        </form>
          </div>
          </div>
         </div>


        <div className="header-part">
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light  p-x-10">
        <div className="container d-flex">
        <img src="/images/skilllogic.png" alt=""  height="45" width="176px"  />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setshow(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? 'show' : ""}`} >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
            </ul>
            <form className="navbar-right text-center">
              <li className="nav-item">
                <a href="#">Home</a>
              </li>
              <li className="nav-item">
                <a href="#">Courses</a>
              </li>
              <li className="nav-item">
                <a href="#">Reviews</a>
              </li>
              <li className="nav-item">
                <a href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a href="#">Corporate</a>
              </li>
            </form>
          </div>
        </div>
      </nav>
        </div>
        </div>

         {/* navbar end */}

         {/* header start */}

         <section className='header mt-2 pt-5 pb-3' style={{ backgroundImage: "url(" + "https://skillogic.com/resource/images/background-image1.jpg" + ")",}}>
           <div className='container'>
             <div className='row'>
              <div className="col-xs-12 col-md-8 ">
              <h1>TRAINING IN BANGALORE</h1>
              <p>City of Bangalore, being IT hub of India, provides a brilliant ecosystem for pursing quality professional skills.</p>
              </div>
              <div className='col-xs-12 col-md-4 '>
                <img src="https://d8fajseshwsed.cloudfront.net/images/new/business-analytics-trend7.jpg" alt="" width='350' height="235" className='mb-5 img-fluid'/>
              </div>
             
             </div>
           </div>

         </section>
         {/* header ends */}
         <div className="page-changing">
           <div className="container text-start">
             <div className="row">
             <ol class="breadcrumb page-changes">
                     <Link to='/' className="page-routing breadcrumb-item text-dark ">Home</Link>
                     <Link to='/tib' className="page-routing breadcrumb-item text-dark">TRAINING IN BANGALORE</Link>
                  </ol>
             </div>
           </div>
         </div>

        {/* PRINCE CERTIFICATION START */}
        <section className='pmp-firstattempt'>
           <div className="container">
             <div className="row">
               <div className="col-xs-12 col-md-12">
             <h5 className="mt-5 pmp-heading">TRAINING IN BANGALORE</h5>
             <ReactReadMoreReadLess
        charLimit={397}
        readMoreText={"Read more ▼"}
        readLessText={"Read less ▲"}
        readMoreClassName="read-more-less--more"
        readLessClassName="read-more-less--less"
      >
        {longText}
      </ReactReadMoreReadLess>
            </div>
             </div>
           </div>
         </section>

        {/* PRINCE CERTIFICATION END */}

      {/* course highlights start */}

    <section className="pmp-courses">
          <div className="container">
          <h4 className="mt-5 pb-4 pmp-heading">BANGALORE TRAINING HIGHLIGHTS</h4>
            <div className="row">
          
              {
               TIBCOURSE.map(item => 
                <div className="col-xs-12 col-md-4 text-center pmp-boxes ">
                 <h1>{item.icon}</h1>
                 <p>{item.name}</p>
                  <strong  key={item.id}></strong>
                </div>
                )
              }
            </div>
          </div>
        </section> 

      {/* course highlights end */}
        
     <div className="upcoming">
       <div className="container">
       <h4 className="mt-5 pb-4 pmp-heading">UPCOMING TRAINING IN BANGALORE</h4>
         <div className="row text-center">
           <h5>- No Training found -</h5>
           <a href="#">CALL 1800 212 5353</a>

         </div>
       </div>
     </div>

        {/*trending ends */}

        <div className="testimonitals">
      <div class='container' >      
           <div className="row title" style={{marginBottom: "20px"}} >      
           <div class="text-center">      
         <h4> WHAT PEOPLE SAY</h4> 
         <center>
             <p className='head-line'></p>
             </center>  
           </div>      
           </div>  
       </div>  
       <div class='container' >            
        <OwlCarousel {...options}  
          className="owl-theme"  
         >  
<div className='skl-step1'>

<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/Sayyad_Mazdoor.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>SAYYAD MANZOOR</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"SKILLOGIC is the best option to opt for a Six Sigma Green Belt training. The sessions are systematically structured. All the trainers are experts in their respective domains. They are supportive in terms of clearing our doubts. I would recommend SKILLOGIC." </p>
 
  </div>
</div> 
</div>
<div className='skl-step1'>
  <div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/Venkataprashanth_Ganga.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>GANGA VENKATAPRASHANTH</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"The DevOps training was excellent. SKILLOGIC follows a structure for all their training. The faculty was supportive in clearing doubts. I suggest SKILLOGIC for DevOps training." </p>
 
  </div>
</div> 
</div>
<div className='skl-step1'>
 <div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/Ajith_Kottamasu.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>KOTTAMASU AJITH MANI KUMAR</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"I learned a lot during my training stint at SKILLOGIC. I would say, SKILLOGIC is the right place for your PMP training. The trainers are knowledgeable and are competent to clear all your doubts. I recommend SKILLOGIC for PMP training." </p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/KVA_Sridhar.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>KVA SRIDHAR</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"Best training faculty. Value for money. Best-in-class training methods. SKILLOGIC has it all. If you are looking for an institute for PMP training, SKILLOGIC is the one you should go for. It has everything as per your expectation." </p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/Ashish_Khatri.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>ASHISH K</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"SKILLOGIC was a great experience for me. If it wasn't for the guidance received from the trainers, I wouldn't have sailed through. I suggest SKILLOGIC for PMP training." </p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/Swarna_PMP.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>SWARNA MADHURI</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"The trainers at SKILLOGIC are well-experienced and have good knowledge of the subject. They supported me in clearing all my doubts. If you are looking forward to PMP training, then SKILLOGIC is the right place to do so."  </p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/skillogic-review-avatar.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>VISHAL PANGAONKAR</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"I was always interested in learning project management.SKILLOGIC helped me to achieve my goal. It was an excellent experience. I recommend SKILLOGIC."  </p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/Aishwarya_parthasarathy.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>AISHWARYA PARTHASARATHY</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"I recommend SKILLOGIC for PRINCE2 Agile training for varied reasons. Excellent trainers, best training methodology. interactive sessions, case studies approach. " </p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/Pankaja_Thimmaiah.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>PANKAJA THIMMAIAH</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"The PRINCE2 Agile training at SKILLOGIC was just excellent. I learned a lot through the sessions. The faculty of trainers were very supportive in clearing the doubts. I recommend SKILLOGIC for PRINCE2 Agile training."  </p>
 
  </div>
</div>
</div>
      </OwlCarousel>  
      </div>  
       </div>
         
         {/* trending end */}

         <div className="skilllogic">
             <div className="container">
             <h3 className='pmp-heading'>WHY SKILLOGIC?</h3>
             <div className="row title" style={{marginBottom: "20px"}} >      
           <div class="text-center">     
           </div>      
           </div>  
             
               <div className="row">
                   {
                     skilllogic.map( item =>
                      <div className="col-xs-12 col-md-4">
                        <ul class="list-unstyled" key={item.id}>
                     <li className="media d-flex">
                      <h1 className="mt-0 mb-1">{item.icon}</h1>
                       <div className="media-body">
                       <h5 className='m-3' >{item.heading}</h5>
                          <p>{item.content}</p>
                      </div>
                      </li>
                      </ul>
                      </div>
                      )
                   }
               </div>
             </div>
           </div>
           {/* skillogic ends */}

     
          {/* FAQ’S RELATED START */}
        <section className ='about-course'>
          <div className="container">
          <h5 className="mt-5 pb-4 pmp-heading">FAQ</h5>
            <div className="row">
              <div className="col-xs-12 col-md-12">
              <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-CourseOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-CourseOne" aria-expanded="false" aria-controls="flush-CourseOne">
      HOW DO I RECEIVE MY CERTIFICATES? 
      </button>
    </h2>
    <div id="flush-CourseOne" class="accordion-collapse collapse" aria-labelledby="flush-CourseOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      Either you can pick up from office by showing ID proof or Certificates are couriered to your address as registered in Exam information sheet. It usually takes 7-10 working days to receive hard copy certificates from Examination bodies : APMG-UK, EXIN-Netherlands and TUV- Germany.
          </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      ARE THE CERTIFICATION EXAMS PAPER BASED OR ONLINE? 
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      Both actually. It depends on the type of certification. For most courses, both options are available.
         </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      IS IT POSSIBLE TO CONDUCT TRAINING IN LOCATION, NOT LISTED IN THE WEBSITE? 
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      Yes. Please leave a request through request a training link. We will schedule a training based on demand at the requested location and notify you.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      CAN I PAY THE FEE IN PART-PAYMENTS ? 
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Skillogic generally take full payment before first day of course. If there is genuine cause, this can be dealt on case to basis under management discretion.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      CAN I TAKE THE TRAINING OF A COURSE AND GIVE EXAM LATER POINT OF TIME? 
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Yes. It is up to you when you decide to give your exam. On a softer note, we encourage participant to complete his/her exam within one month of the training.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
      WHAT IF I AM NOT SATISFIED WITH TRAINING AFTER PAYING MY FEES? 
      </button>
    </h2>
    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Skillogic pays back 100% money back, if there is any quality issues with the training.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
      CAN I DISCONTINUE A COURSE AND RESUME, IN CASE SITUATION DEMANDS? 
      </button>
    </h2>
    <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Yes. If you have a valid reason, as per management discretion, you can take a break and resume your training at later point of time. </div>
    </div>
  </div>
 
   </div> 
      </div>
         </div>
          </div>
        </section>

        {/* ABOUT COURSE END */}
 
        
        {/* location start */}
        <section className="location">
          <div className="container">
          <h4 className='pmp-heading'>ADDRESS</h4>
            <div className="row">
              <div className="map-responsive">
             {/*  <h4 className='pmp-heading'>ADDRESS</h4> */}
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2711199572163!2d77.63768921461106!3d12.890280190909259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fa0bfcc8eb%3A0x9814e4c8611a6ea8!2sSKILLOGIC%20-%20Six%20Sigma%2C%20PRINCE2%20%26%20Business%20Analytics%20Courses!5e0!3m2!1sen!2sin!4v1643026487880!5m2!1sen!2sin" allowfullscreen="" loading="lazy" class="embed-responsive-item"></iframe>
              </div>
              <p className='text-dark hello-office'>Office No 48, Ground Floor, Hosur Rd, next to Trident Hyundai, Kudlu Gate, Krishna Reddy Industrial Area, Hosapalaya, Garvebhavi Palya, Bengaluru, Karnataka 560068</p>
              </div>
            </div>
        </section>
        {/* location end */}
         
        {/* pmp trending courses start */}
     <section className="pmp-trending">
          <div className="container">
          <h4 className='pmp-heading mb-5'>POPULAR COURSES IN BANGALORE</h4>
            <div className="row">
             
              {
              TIBTRENDING.map(item =>
               <div className='col-xs-6 col-md-6 trending-boxes' key={item.id}>
                <h5><span>{item.name}</span></h5>
               </div>
                )
              }
            </div>
          </div>
        </section> 
        {/* pmp trending courses end*/}
         
         
        {/* our branches start */}
        <div className="branches">
          <div className="container">
          <h4 className='pmp-heading'>SKILLOGIC TRAINING LOCATIONS IN INDIA </h4>
          <div className="row">
                  {
                    Branches.map(branch =>
                     <div className='col-xs-3 col-md-1 ' key={branch.id}>
                        <a href="#" >{branch.areas}</a>
                     </div>
                        
                    )
                  }
              
            </div>
          </div>
          </div>
        {/* our branches end */}

        {/* footer start */}
           <div className="Footer">
             <div className="container">
               <div className="row">
               {
                   footer.map( item => (  
                          <div className=" col-lg-3 col-xs-12 col-md-3 col-sm-6 mt-4 d-flex" key={item.id}>
                            <div>
                             <h4>{item.heading}</h4>
                              <div>
                                <h5>{item.about}</h5>
                                <h5>{item.faq}</h5>
                                <h5>{item.hriging}</h5>
                                <h5>{item.Mocks}</h5>
                                <h5>{item.refer}</h5>
                                <h5>{item.training}</h5>
                                <h5>{item.contact }</h5>
                                <p style={{display: 'flex',justifyContent:'space-between', fontSize:'1.5rem'}}>{item.hello}{item.data}{item.visa}{item.currency}{item.utube}{item.share}
                                
                                </p>
                              </div>
                            </div>
                            
                          </div>

                    
                   ))
                 } 
                 <div className="col-xs-1 col-md-1 mt-4 ">
                 <div class="input-group">
                  <p>REGION</p>
  <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option selected>India</option>
    <option value="1">Australia</option>
    <option value="2">Canada</option>
    <option value="3">Hong Kong</option>
    <option value="3">IRELAND</option>
    <option value="3">KUWAIT</option>
    <option value="3">NETHERLAND</option>
    <option value="3">SAUDI ARABIA</option>
    <option value="3">SINGAPORE</option>
    <option value="3">SOUTH AFRICA</option>
    <option value="3">SWITZERLAND</option>
    <option value="3">UAE</option>
    <option value="3">UK</option>
    <option value="3">USA</option>
    <option value="3">YEMEN</option>
  </select>
</div>
                 </div>
               </div>
             </div>
           </div>
        {/* footer ends */}

        {/* countries start */}
         <div className="countries">
           <div className="container">
             <div className="row">
             {
                   countries.map( item => (  
                     
                          <div className="col-xs-12 col-md-3 mt-4 d-flex skl-step2" key={item.id}>
                             <img src={item.image} className="card-img-top" alt="..." style={{width:'30px',height:'20px'}} />
                             <p>{item.name}</p>
                                <p>{item.mobile }</p>

                            </div>
                            
                         

                    
                   ))
                 } 
               <div className='col-xs-12 col-md-8 mt-7'> 
               <h4>DISCLAIMER </h4>
               <h5>
PRINCE2 Agile® is a registered trademark of AXELOS Limited,used under permission of AXELOS, all rights reserved.

PRINCE2® is a registered trademark of AXELOS Limited, used under permission of AXELOS, all rights reserved.

ITIL® is a registered trademark of AXELOS Limited, used under permission of AXELOS Limited, used under permission of AXELOS, all rights reserved

MSP® is a registered trademark of AXELOS Limited, used under permission of AXELOS, all rights reserved.

The swirl logo® is a trademark of AXELOS.

COBIT® is a registered trademark of the Information System Audit and Control Association (ISACA) and the IT Governance institute.

Skillogic® is a Registered Education Partner REP of DevOps Institute DOI.

SKILLOGIC® is an ATO of PEOPLECERT</h5>
               </div> 
              <h5>© 2022 SKILLOGIC, a brand of SkillFloor Solutions Private Limited.</h5>
           </div>
         </div>
         </div>
        {/* countries ends */}




   </div>
  ) 
};

export default TIB;

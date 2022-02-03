import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { FaExternalLinkAlt,FaChalkboardTeacher,FaUsers,FaRupeeSign } from 'react-icons/fa';
import { IoIosCall,IoLogoWhatsapp } from 'react-icons/io';
import {RiPriceTagFill} from 'react-icons/ri'
import { AiOutlineMail,AiFillPlayCircle,AiFillClockCircle } from 'react-icons/ai';
import {BsFillStarFill,BsBook} from 'react-icons/bs'
import {PCTCOURSE,skilllogic,PCTLOCATIONS,PCTTRENDING,countries,footer,Branches,PCTTRAINING} from './Data'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReactReadMoreReadLess from "react-read-more-read-less";
const PCT  = () => {
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

  const longText = `PRINCE2 is the de-facto standard for project management practice in the UK, Europe and many other regions. Skillogic, an authorized training origanization for PRINCE2, provides PRINCE2 Training with a well constructed PRINCE2 certification course that will successfully provide them with optimum knowledge and apt practice of the course material.

  Successful completion of this certification course enables the candidate to pass the PRINCE2 certification exam and, prove their worth as a globally recognized certified Project Manager. The course is a three to four day compact class room based course that can be availed online as well. Skillogic with 97% of pass rate in PRINCE2 Certification exam, enable candidates pursuing this course sure set to get their PRINCE2 certification and enhance of a bright future in the project manager career.
  
  Skillogic is the largest Authorized Training Organisation (ATO) for PRINCE2 in Bangalore, trained more than 10,000 project management professionals in India. Contact our PRINCE2 coordinators at +91 901 989 9000 for quick enquiry / enrollment`
 
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
              <h1>PRINCE2 CERTIFICATION TRAINING IN BANGALORE</h1>
              <h5> <AiFillClockCircle></AiFillClockCircle> 10-Day 2 hrs a day Online Training Program/ 3-Day Full-time Classroom</h5>
                <h6 className='me-2'><strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>4.9 (13,560) reviews  <button className='bt2'>Why PRINCE2 ?</button></h6>
                <ul>
                     <li>PRINCE2 is the de facto standard for Project Management</li>
                     <p>De facto standard in the UK and globally recognized project management framework.</p>
                   </ul>
                   <ul>
                     <li>One million+ PRINCE2 certified professionals across the world</li>
                     <p>Join elite group of more than one million PRINCE2 certified project managment across the world.</p>
                   </ul>
                   <ul>
                     <li>12,000+ PRINCE2 trained by SKILLOGIC as an Accredited Training Organization</li>
                     <p>
                     SKILLOGIC is a global leader in PRINCE2 certification training with more than a decade in delivering PRINCE2 training.</p>
                   </ul>
              </div>
              <div className='col-xs-12 col-md-2 header-price text-center'>
                <h4>Accreditations:</h4>
                <img src="https://d8fajseshwsed.cloudfront.net/images/accreditation/AXELOS-skillogic.png" alt=""  width="165" height="55" className='mb-5'/>
                <h5><FaRupeeSign></FaRupeeSign>56,000/</h5>
                <h2><FaRupeeSign></FaRupeeSign>44,900/-*</h2>
                <p>*Offer Price</p>
              </div>
              <div className='col-xs-12 col-md-2  text-center'>
              <img src="https://d8fajseshwsed.cloudfront.net/images/accreditation/PEOPLE-CERT-skillogic.png" alt=""  width="165" height="55" className='mb-5'/>
               <h1 className='btn-icon mb-5'><AiFillPlayCircle></AiFillPlayCircle></h1>
                 <button className='btn-enquiry'>Enquiry now</button>
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
                     <Link to='/pct' className="page-routing breadcrumb-item text-dark">PRINCE2 CERTIFICATION TRAINING IN BANGALORE</Link>
                  </ol>
             </div>
           </div>
         </div>
         {/* PMP TRAINING FEATURES start */}

         <section className="pmp-training">
           <div className="container">
           <h5 className="mt-5 pb-1 pmp-heading">PRINCE2 CERTIFICATION COURSE FEATURES IN BANGALORE</h5>
             <div className="row">
               <div className="col-xs-12 col-md-12 text-center">
                 <img src="https://skillogic.com/resource/images/courses/prince2-skillogic-infographic.jpg" alt="" className='img-fluid'/>
               </div>
             </div>
           </div>
         </section>

         {/* PMP TRAINING FEATURES ends */}

        {/* PMP COST START*/}
          <section className="cost">
            <div className="container">
            <h5 className="mt-5 pb-4 pmp-heading">PRINCE2 CERTIFICATION TRAINING COST IN INDIA</h5>
              <div className="row">
                <div className="col-xs-12 col-md-4 cost-live">
                 <div className='skl-step3'>
                   <h6 className='decore'>POPULAR</h6>
                 
                 <h1 className='skl-icon'><FaChalkboardTeacher></FaChalkboardTeacher></h1>
                 <h6>LIVE ONLINE</h6>
                  <p>interactive-</p>
                 </div>
                 <div className="skl-step4">
                 <p className='tagtext'><RiPriceTagFill></RiPriceTagFill></p>
                   <h5 className='text-dark'><FaRupeeSign></FaRupeeSign>56,000/</h5>
                   <h4 className='text-dark'><FaRupeeSign></FaRupeeSign>44,900/-</h4>
                   <p>*Available in most time zones</p>
                 </div>
                 <div>

                 </div>
                </div>
                <div className="col-xs-12 col-md-4 cost-live">
                <div className='skl-step3'>
                 <h1 className='skl-icon'><BsBook></BsBook></h1>
                 <h6>SELF LEARNING</h6>
                 <p>convenient-economical</p>
                 </div>
                 <div className="skl-step4">
                   <h5><FaRupeeSign></FaRupeeSign>50,000/</h5>
                   <h4><FaRupeeSign></FaRupeeSign>39,990/-</h4>
                   <p>Learn at your pace</p>
                    <p>one year-access</p>
                 </div>
                  </div>
                  <div className="col-xs-12 col-md-4 cost-live">
                  <div className='skl-step3'>
                 <h1 className='skl-icon'><FaUsers></FaUsers></h1>
                 <h6>CLASSROOM</h6>
                 <p>most interactive</p>
                 </div>
                 <div className="skl-step4">
                   <h5><FaRupeeSign></FaRupeeSign>62,000/</h5>
                   <h4><FaRupeeSign></FaRupeeSign>49,900/-</h4>
                   <p>*Available in selected cities</p>
                 </div>
                  </div>
              </div>
            </div>
          </section>
        {/* PMP COST ENDS*/}

       

      {/* course highlights start */}

    <section className="pmp-courses">
          <div className="container">
          <h4 className="mt-5 pb-4 pmp-heading">PRINCE2 TRAINING COURSE HIGHLIGHTS IN BANGALORE</h4>
            <div className="row">
          
              {
               PCTCOURSE.map(item => 
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
       <h4 className="mt-5 pb-4 pmp-heading">UPCOMING PRINCE2 ONLINE TRAINING SCHEDULES IN BANGALORE</h4>
         <div className="row text-center">
           <h5>- No Training found -</h5>
           <a href="#">CALL 1800 212 5353</a>

         </div>
       </div>
     </div>

        
     <div className="upcoming">
       <div className="container">
       <h4 className="mt-5 pb-4 pmp-heading">CLASSROOM TRAINING</h4>
         <div className="row text-center">
           <h5>- No Training found -</h5>
           <a href="#">CALL 1800 212 5353</a>

         </div>
       </div>
     </div>

       {/* testimonials start */}
       
      <div className="testimonitals">
      <div class='container' >      
           <div className="row title" style={{marginBottom: "20px"}} >      
           <div class="text-center">      
         <h4> SKILLOGIC PRINCE2 TRAINING REVIEWS</h4> 
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
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/gurucharan_ranganath_PRINCE2.jpg'}  alt="..."/>
  <div class="media-body">
  
    <h5>GURUCHARAN RANGANATH</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"Trainer is highly skilled and was very knowledgable on the overall concepts, he ensured that the whole team participation without leaving them with the course content. The role-play and activities are inline with what we are here for. Thank you " </p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/anwar_ahamed_PRINCE2.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>ANWAR AHAMED</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"Good with explanation of content, more can be exercise as well which helps us to build the content more with live eg." </p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/skillogic-review-avatar.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>SOURAV BHATTACHARYA
    </h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"Very good experience of Prince 2 Training at Skillogic Trainer Mr. Mani was excellent and all topics were covered in detail. Thank you Skill Logic for helping, I become a prince 2 certified Project manager." </p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/skillogic-review-avatar.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>BIJOY SAMRAJ</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"Did my PRINCE2 certification here. Skillogic provided an Excellent Trainer and also Training Resources. Mr. Manikandan who has wide and sound expertise in different areas of Project Management helped us a lot in deriving the rationales on every aspect of the course and also in clearing the assessments."  </p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/skillogic-review-avatar.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>GEETIKA SHARMA</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"Skillogic is the best to acquire training especially Prince 2 trainer "Mr. Mani" is an excellent faculty who can be reached outpost completion of the training also..."  </p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/skillogic-review-avatar.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>NIJO CYRIAC</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"It was an amazing session we had with Mr. Mani Sir. His interactive sessions always helped us to harness the prince 2 much lighter. He is a knowledgeable person. Thank you for the wonderful session sir. And the SkilLogic Team you guys are excellent, always there to help us. Thank you all for your best services.."</p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/Pradyut_Jiwane.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>PRADYUT JIWANE</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"The trainers at SKILLOGIC are really supportive. There were separate doubt clearing sessions which helped in understanding the concepts better."  </p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/Ashwini_Kumar.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>ASHWINI KUMAR</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"SKILLOGIC is the right place for PRINCE2 training. The faculty of trainers were supportive and helped a great deal in clearing the doubts. I recommend SKILLOGIC for PRINCE2 training." </p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/dr_krishnan_ranganathan_p2.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>KRISHNAN RANGANATHAN</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"Very organized structure for conducting the certificate courses. Already did two certificate courses - PRINCE2 & Lean Six Sigma. Next month joining for the PMP Certificate course. I recommend it"Training covered relevant topics and the trainer was very good in PRINCE2 subject "  </p>
 
  </div>
</div>
</div>
      </OwlCarousel>  
      </div>  
       </div>
      
       {/* testimonials end */}
          
        {/* PRINCE CERTIFICATION START */}
        <section className='pmp-firstattempt'>
           <div className="container">
             <div className="row">
               <div className="col-xs-12 col-md-12">
             <h5 className="mt-5 pmp-heading">ABOUT SKILLOGIC PRINCE2 TRAINING IN BANGALORE</h5>
               <p><ReactReadMoreReadLess
        charLimit={350}
        readMoreText={"Read more ▼"}
        readLessText={"Read less ▲"}
        readMoreClassName="read-more-less--more"
        readLessClassName="read-more-less--less"
      >
        {longText}
      </ReactReadMoreReadLess></p>
</div>
             </div>
           </div>
         </section>

        {/* PRINCE CERTIFICATION END */}

    {/* bussiness analytics start*/}
       
    <section className="bac-bussiness">
       <div className="container">
       <h5 className="mt-5 pb-1 pmp-heading">PRINCE2 TRAINING COURSES IN BANGALORE</h5>
       <div className="row">
          {
            PCTTRAINING.map(item =>
                <div className="col-xs-12 col-md-6" key={item.id}>
                <div class="bussiness-child ">
          <img  src={item.image} alt="Generic placeholder image"/>
                 <div className="media-body">
                 <h4 className="mt-0">{item.heading}</h4>
                 <p>{item.about}</p>
                </div>
               </div>
                </div>
                )
          }
       </div>
       </div>
       </section>

        {/* bussiness analytics end*/}

         <div className="FAQ">
           <div className="container">
           <h5 className="mt-5 pb-4 pmp-heading">ABOUT PRINCE2 TRAINING COURSE IN BANGALORE</h5>
             <div className="row">
               <div className="col-xs-12 col-md-12">
               <div class="accordion accordion-flush" id="accordionFlushExample">
               <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingA">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseA" aria-expanded="false" aria-controls="flush-collapseA">
      What is this Course About? 
      </button>
    </h2>
    <div id="flush-collapseA" class="accordion-collapse collapse" aria-labelledby="flush-headingA" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">PRINCE2 is the popular best practice framework for project management widely practiced across the globe and defacto standard in regions of the United Kingdom and Europe. PRINCE2® Certification course aims to impart best practice knowledge is the various aspect of project - Business Case, Cost, Time, Quality, Scope, Risk, and Benefits. The PRINCE2 training syllabus is aligned as per 2016 PRINCE2 exam pattern as per AXELOS guidelines</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingB">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseB" aria-expanded="false" aria-controls="flush-collapseB">
      What are the Course Objectives? 
      </button>
    </h2>
    <div id="flush-collapseB" class="accordion-collapse collapse" aria-labelledby="flush-headingB" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <ul>
          <li> <p>Deliver training aligned with <strong>PRINCE2® Syllabus as per 2016 Exam Pattern</strong></p></li>
          <li> <p>Impart high-level knowledge in PRINCE2 <strong>® project management</strong>aspects, knowledge areas and process</p></li>
          <li> <p>Provide End to End support to candidates in pre and post exam processes</p></li>
          <li> <p>Inculcate continuous learning habit through providing access to <strong> PRINCE2 project management resources.</strong></p></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingC">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseC" aria-expanded="false" aria-controls="flush-collapseC">
      Who should be aiming for this Course? 
      </button>
    </h2>
    <div id="flush-collapseC" class="accordion-collapse collapse" aria-labelledby="flush-headingC" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
       <ul>
         <li>PRINCE2 is suitable for practicing project managers as well as aspirants. This Certification is most relevant for:</li>
         <li>Practicing Project managers</li>
         <li>Practicing Project managers</li>
          <li>Associate Managers</li>
          <li>Project leads</li>
          <li>PMO office professionals</li>
           <li>Any professional aspiring to be a Project Manager</li>
       </ul>
      </div>
    </div>
  </div>
</div>
               </div>
             </div>
           </div>
         </div>
    
          {/* FAQ’S RELATED START */}
        <section className ='about-course'>
          <div className="container">
          <h5 className="mt-5 pb-4 pmp-heading">PRINCE2 CERTIFICATION TRAINING FAQ’S</h5>
            <div className="row">
              <div className="col-xs-12 col-md-12">
              <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-CourseOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-CourseOne" aria-expanded="false" aria-controls="flush-CourseOne">
      What is the Criteria for PRINCE2® Application?
      </button>
    </h2>
    <div id="flush-CourseOne" class="accordion-collapse collapse" aria-labelledby="flush-CourseOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <p>There is no mandatory requirement for PRINCE2 Foundation Certification. It is recommended to have 2 years of project experience to gain maximum benefit.</p>
      <p>PRINCE2® Practitioner required PRINCE2 foundation certification as prerequisite.</p>
          </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      How long PRINCE2® Certification is Valid?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>PRINCE2 Foundation is life time and requires no renewal. As PRINCE2® Pracitioner certified professional, you need to renew the certification once in 5 years by giving PRINCE2® Practitioner re-test exam.</p>
         </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      How many PRINCE2® Exam attempt can be given in period of one year?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      There is no limit. You may give any number of attempts as required.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      Is PRINCE2® applicable for only IT projects?
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">PRINCE2® is originally intended for IT back in 1990's but the scope has been increase and currently, PRINCE2 is applicable for projects of any industries.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      Can I get full refund, if I decided not to continue with course?
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">You are entitled to full/partial refund as governed by Skillogic refund policies. Do read the policy details, whose direct links are provide in this page footer</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
      Can I switch from Classroom Batch to Live Online training batch?
      </button>
    </h2>
    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">It is strongly recommended to one mode of training for better learning experience but , in case situation demands, yes you can switch mode of training upon requesting Skillogic contact point</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
      Is there any documents I need to carry to the training session?
      </button>
    </h2>
    <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Yes. You need to bring your Photo ID Proof such as National ID card, Driving License etc., We need this in order <strong>to issue Participation Certificate and booking certification exam as required.</strong> </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingEight">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
      Do I get opportunity to contact trainer for any quick queries
      </button>
    </h2>
    <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">We conduct whole day classroom revision session for this reason. In case, if you have quick queries, we fully support you to arrange a call from Trainer</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingNine">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
      What does Skillogic Study Kit include?
      </button>
    </h2>
    <div id="flush-collapseNine" class="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Skillogic Study Kit include Course ware Hardcopy, Soft copies of study materials, Sample Questions, other required materials required for your self study. </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTen">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
      What are the criteria for the 100% pass warranty Scheme?
      </button>
    </h2>
    <div id="flush-collapseTen" class="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>1. 100% pass warranty scheme provides candidate a second attempt paid by SKILLOGIC, in the case of an unsuccessful first attempt.</p>
        <p>2. The 100% pass warranty scheme is the only application for classroom training candidates.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingNineteen">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNineteen" aria-expanded="false" aria-controls="flush-collapseNineteen">
      What are the criteria for availing a 100% Moneyback guarantee? 
      </button>
    </h2>
    <div id="flush-collapseNineteen" class="accordion-collapse collapse" aria-labelledby="flush-headingNineteen" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <p>1. Money-back guarantee applies only for the training amount not for the exam as it is prepaid to accreditation bodies. </p>
      <p>2. The candidate must have attended the entire course sessions without any absenteeism.</p>
       <p>3. The candidate must have made an exam attempt within 45 days after the training completion date and failed in the exam.</p>
       <p>4. The exam must have been administered through SKILLOGIC, either paper-based and ATO online exam modes.</p>
       <p>5. The claim should be made within 45 days after the training completion date through sending an email to refund@skillogic.com, with proof of exam failure, exam mode and training registration details from registered email address.</p>
       <p>6. The refund takes 15 working days from the date of the claim.</p>
      </div>
    </div>
  </div>
 
</div> 
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT COURSE END */}

         
         {/* skilllogic content start */}

         <div className="skilllogic">
             <div className="container">
             <h3 className='pmp-heading'>WHY SKILLOGIC FOR PRINCE2 CERTIFICATION IN BANGALORE</h3>
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
         <section className="other-location ">
           <div className="container">
           <h4 className='pmp-heading'>PRINCE2 TRAINING CITIES IN INDIA</h4>
             <div className="row ">
              {/*  <h2 className='pmp-heading'>OTHER LOCATIONS</h2> */}
              {
                PCTLOCATIONS.map(item =>
              <div className="col-xs-12 col-md-3 d-flex justify-content-between p-3" key={item.id}>
               <h3>{item.icon}</h3>
               <h1>{item.name}</h1>
              </div>  
                  )
              }
             </div>
           </div>
         </section>
         {/* other location end */}
     
     
             {/* courses ends */}
             <div className="trending">
       <div class='container' >     
       <h4 className='pmp-heading'>RECOMMENDED CERTIFICATION COURSES</h4>       
        <OwlCarousel {...options}  
          className="owl-theme"  
         >  
          <div class="card" style={{width:'15rem', height:'20rem'}}>
         <img src={'https://d8fajseshwsed.cloudfront.net/images/new/courses/BA-FOR-MANAGERS.jpg'} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">  BUSINESS ANALYTICS FOR MANAGERS CERTIFICATION COURSE</h5>
    <p class="card-text"> 56,000</p>
    <h2>44,900</h2>
  </div>
</div>
<div class="card" style={{width:'15rem', height:'20rem'}}>
         <img src={'https://d8fajseshwsed.cloudfront.net/images/new/courses/DEVEOPS-MASTER.jpg'} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title"> DEVOPS MASTER CERTIFICATION TRAINING</h5>
    <p class="card-text">56,000</p>
    <h2>44,900</h2>
  </div>
</div>
<div class="card" style={{width:'15rem',height:'20rem'}}>
         <img src={'https://d8fajseshwsed.cloudfront.net/images/new/courses/ITIL-FOUNDATION.jpg'} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title"> ITIL FOUNDATION CERTIFICATION TRAINING</h5>
    <p class="card-text">56,000</p>
    <h2>44,900</h2>
  </div>
</div>
<div class="card" style={{width:'15rem',height:'20rem'}}>
         <img src={'https://d8fajseshwsed.cloudfront.net/images/new/courses/MSP.jpg'} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">  MSP CERTIFICATION TRAINING</h5>
    <p class="card-text">56,000</p>
    <h2>44,900</h2>
  </div>
</div>
<div class="card" style={{width:'15rem',height:'20rem'}}>
         <img src={'https://d8fajseshwsed.cloudfront.net/images/new/courses/PGMP.jpg'} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">  PGMP® CERTIFICATION TRAINING</h5>
    <p class="card-text">56,000</p>
    <h2>44,900</h2>
  </div>
</div>
<div class="card" style={{width:'15rem',height:'20rem'}}>
         <img src={'https://d8fajseshwsed.cloudfront.net/images/new/courses/PMP.jpg'} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">  PMP CERTIFICATION TRAINING</h5>
    <p class="card-text">56,000</p>
    <h2>44,900</h2>
  </div>
</div>
<div class="card" style={{width:'15rem',height:'20rem'}}>
         <img src={'https://d8fajseshwsed.cloudfront.net/images/new/courses/PRINCE2-AGILE.jpg'} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">  PRINCE2 AGILE CERTIFICATION TRAINING</h5>
    <p class="card-text">56,000</p>
    <h2>44,900</h2>
  </div>
</div>
      </OwlCarousel>  
      </div>  
      </div>

        {/* pmp trending courses start */}
     <section className="pmp-trending">
          <div className="container">
          <h4 className='pmp-heading mb-5'>TRENDING TRAINING COURSES</h4>
            <div className="row">
             
              {
              PCTTRENDING.map(item =>
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
          <h4 className='pmp-heading'>PRINCE2 TRAINING CITIES IN INDIA </h4>
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

export default PCT;

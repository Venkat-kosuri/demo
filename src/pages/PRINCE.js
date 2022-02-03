import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { FaExternalLinkAlt,FaChalkboardTeacher,FaUsers,FaRupeeSign } from 'react-icons/fa';
import { IoIosCall,IoLogoWhatsapp } from 'react-icons/io';
import {RiPriceTagFill} from 'react-icons/ri'
import { AiOutlineMail,AiFillPlayCircle } from 'react-icons/ai';
import {BsFillStarFill,BsBook} from 'react-icons/bs'
import {PMPCOURSE,skilllogic,PMPLOCATIONS,PMPTRENDING,countries,footer,Branches} from './Data'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReactReadMoreReadLess from "react-read-more-read-less";

const PRINCE = () => {
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
   
  const longText = `In the simplest words, PRINCE2 is used to break down the project into tasks and to designate those tasks to fellow team members. The ability to distribute projects on time, on a budget, that lines up with the business goals is vital to scoring an edge in today’s highly competitive global business environment.

  SKILLOGIC is an authorised provider of comprehensive PRINCE2 Training across the globe. Our PRINCE2 Course comprises PRINCE2 Foundation, PRINCE2 Practitioner and PRINCE2 Agile Training and we also provide PRINCE2 Combo course which is an amalgamation of PRINCE2® Foundation and PRINCE2® Practitioner. We provide training services to individuals with tailored programs from beginners to working professionals and to corporations with customized training propositions to align with their learning goals. Skillogic provides PRINCE2 Courses. Our case study based training is designed as a 10-Day 2 hrs a day Online Training Program/ 4-Day Full-time Classroom devised to impart the PMP® concept in detail, concerning participants in workshops and case studies and role-plays in groups. We make sure that you receive high-quality training from some of the best-certified instructors with decades of quality experience in PRINCE2 Tools. After the completion of the PRINCE2 course, you will be all set to attend the PRINCE2 examination conducted by Axelos.
  
  Managing and maintaining a successful project necessitates proficient PRINCE2 practitioners. With PRINCE2s earning almost 17% more than their non-certified counterparts, this certification is fast gaining popularity. PRINCE2 certification is best-suited for individuals who already know they want to pursue a career in planning and executing projects. 
  
  Come join PRINCE2 Training at SKILLOGIC and enhance your career ahead!`
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
                <h1>PRINCE2 CERTIFICATION TRAINING</h1>
                <h5>10-Day 2 hrs a day Online Training Program/ 3-Day Full-time Classroom</h5>
                <h6 className='me-2'><strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>4.9 (13,560) reviews <button className='bt2'>Why PRINCE ?</button></h6>
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
             <ol class="breadcrumb page-changes ">
                     <Link to='/' className="page-routing breadcrumb-item text-dark ">Home</Link>
                     <Link to='/prince' className="page-routing breadcrumb-item text-dark">PRINCE2 CERTIFICATION TRAINING</Link>
                  </ol>
             </div>
           </div>
         </div>

         {/* PMP TRAINING FEATURES start */}

         <section className="pmp-training">
           <div className="container">
           <h5 className="mt-5 pb-1 pmp-heading">PRINCE2 TRAINING FEATURES</h5>
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
          <h4 className="mt-5 pb-4 pmp-heading">PRINCE2 COURSE HIGHLIGHTS</h4>
            <div className="row">
          
              {
               PMPCOURSE.map(item => 
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
       <h4 className="mt-5 pb-4 pmp-heading">UPCOMING PRINCE2 ONLINE TRAINING SCHEDULES</h4>
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
             <h5 className="mt-5 pmp-heading">PRINCE2 CERTIFICATION TRAINING - SKILLOGIC</h5>
               <p><ReactReadMoreReadLess
        charLimit={310}
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
         <div className="FAQ">
           <div className="container">
           <h5 className="mt-5 pb-4 pmp-heading">ABOUT PRINCE2 TRAINING COURSES</h5>
             <div className="row">
               <div className="col-xs-12 col-md-12">
               <div class="accordion accordion-flush" id="accordionFlushExample">
               <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingA">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseA" aria-expanded="false" aria-controls="flush-collapseA">
      What is PRINCE2? 
      </button>
    </h2>
    <div id="flush-collapseA" class="accordion-collapse collapse" aria-labelledby="flush-headingA" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">PRINCE2 is the planning and structuring of a company's resources to wind up a task. It is a discipline of employing standard principles and procedures for achieving goals.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingB">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseB" aria-expanded="false" aria-controls="flush-collapseB">
      What is PRINCE2 Certification? What is the certification body? 
      </button>
    </h2>
    <div id="flush-collapseB" class="accordion-collapse collapse" aria-labelledby="flush-headingB" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Projects In a Controlled Environment (PRINCE2) is a methodology used in PRINCE2 to improve PRINCE2 skills. It also aids in obtaining an effective output. PRINCE2 is an internationally acclaimed certification for project managers and upcoming Project managers. AXELOS provides the PRINCE2 Certification, which requires the candidate to undergo a training course with an Accredited Training Organization (ATO) like SKILLOGIC followed by an exam.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingC">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseC" aria-expanded="false" aria-controls="flush-collapseC">
      How useful is learning PRINCE2? 
      </button>
    </h2>
    <div id="flush-collapseC" class="accordion-collapse collapse" aria-labelledby="flush-headingC" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      Learning is the key to PRINCE2, the success of every project depends on how it copes up with and adapts to the changing environment. The importance of PRINCE2 in organizations can't be overstated. It enables your team to target the work that matters, with no distractions caused by tasks going off track or budgets spinning out of control.  
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingD">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseD" aria-expanded="false" aria-controls="flush-collapseD">
      How do I get PRINCE2 Certification? 
      </button>
    </h2>
    <div id="flush-collapseD" class="accordion-collapse collapse" aria-labelledby="flush-headingD" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">You can take the exam after completing the certification training with an Accredited Training Organization (ATO) or study privately and then book the exam without a training course with SKILLOGIC.   </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingE">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseE" aria-expanded="false" aria-controls="flush-collapseE">
      What is the Scope of PRINCE2? 
      </button>
    </h2>
    <div id="flush-collapseE" class="accordion-collapse collapse" aria-labelledby="flush-headingE" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">A PRINCE2 has the ability to work in any industry, with any methodology and any location. By 2027, the PRINCE2-oriented labour force in seven project-oriented sectors is predicted to grow by 33 per cent, or nearly 22 million new jobs are anticipated to be created.  </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingG">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseG" aria-expanded="false" aria-controls="flush-collapseG">
      Do I need to have strong programming skills to be a PRINCE2 Practitioner? 
      </button>
    </h2>
    <div id="flush-collapseG" class="accordion-collapse collapse" aria-labelledby="flush-headingG" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">If you want to be a project manager for software projects, you should have a good grasp of the software development processes, life cycle etc along with strong PRINCE2 skills. </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingH">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseH" aria-expanded="false" aria-controls="flush-collapseH">
      How much fee should I remit for attending the PRINCE2 Courses? 
      </button>
    </h2>
    <div id="flush-collapseH" class="accordion-collapse collapse" aria-labelledby="flush-headingH" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The fee for PRINCE2 Courses will range from 136.10 USD to 1361.04 USD according to the certification type you are applying for.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingI">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseI" aria-expanded="false" aria-controls="flush-collapseI">
      For how long will the PRINCE2 certification be valid? 
      </button>
    </h2>
    <div id="flush-collapseI" class="accordion-collapse collapse" aria-labelledby="flush-headingI" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">As a PRINCE2® certified professional, you need to renew the certification once in 3 years. </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingF">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseF" aria-expanded="false" aria-controls="flush-collapseF">
      What is the salary for PRINCE2 practitioners? 
      </button>
    </h2>
    <div id="flush-collapseF" class="accordion-collapse collapse" aria-labelledby="flush-headingF" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The average salary of a project manager ranges between $63,411 and $84,531 in the US and approx 1,818,560 INR in India. </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingJ">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseJ" aria-expanded="false" aria-controls="flush-collapseJ">
      Which one is better? PMP or PRINCE2? 
      </button>
    </h2>
    <div id="flush-collapseJ" class="accordion-collapse collapse" aria-labelledby="flush-headingJ" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>Both PRINCE2 and PMP are standard approaches and best practices to manage the project successfully.</p>
         <p>You can watch this video for details: <a href="https://www.youtube.com/watch?v=0RXQ5jIhI08"></a></p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingK">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseK" aria-expanded="false" aria-controls="flush-collapseK">
      What is the Best Training Institute in India for PRINCE2? 
      </button>
    </h2>
    <div id="flush-collapseK" class="accordion-collapse collapse" aria-labelledby="flush-headingK" data-bs-parent="#accordionFlushExample">
    <div class="accordion-body">
    SKILLOGIC is the best training institute to choose if you are looking for PRINCE2 training in India. At SKILLOGIC you will not only be trained on PRINCE2 concepts and the variety of tools but also you will gain hands-on experience with actual tools. Training is designed to clear your PRINCE2 certification exam on the first attempt.
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
          <h5 className="mt-5 pb-4 pmp-heading">FAQ’S RELATED TO PRINCE2 COURSES</h5>
            <div className="row">
              <div className="col-xs-12 col-md-12">
              <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-CourseOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-CourseOne" aria-expanded="false" aria-controls="flush-CourseOne">
      Who can take PRINCE2 Training from SKILLOGIC? 
      </button>
    </h2>
    <div id="flush-CourseOne" class="accordion-collapse collapse" aria-labelledby="flush-CourseOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      If you are looking forward to building a career in the PRINCE2 domain. Professionals who are involved in projects in different management and coordination levels, Project Managers, Team Leads and PMO Office Executives, Any professionals, who suffice PRINCE2® requirements, aspiring to be a Project Manager
          </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Why should I learn a PRINCE2 course from SKILLOGIC? 
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
       <ul>
         <li>SKILLOGIC® is one of the leading institutes for professional certifications training in India.</li>
         <li>We provide training services to individuals with tailored programs from beginners to working professionals and to corporations with customized training propositions to align with their learning goals.</li>
         <li>Our case study based training includes real-world projects and highly valuable case studies. </li>
         <li>Experienced Trainers</li>
         <li>24/7 Customer care</li>
         <li>100% Money-Back Guarantee</li>
       </ul>
         </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      What are the different levels under PRINCE2 Certification? 
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>SKILLOGIC provides PRINCE2 certification training in:</p>
        <ul>
          <li>PRINCE2 Foundation</li>
           <li>PRINCE2 Practitioner</li>
           <li>PRINCE2 Agile Training</li>
           <li>PRINCE2 Combo - PRINCE2 Foundation + PRINCE2 Practitioner (Best Offer)</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      How much do I have to pay to receive a PRINCE2 course from SKILLOGIC? 
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The course fee to learn PRINCE2 from SKILLOGIC ranges from 258.41 USD to 680.02 USD, according to the mode of training you choose.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      What will be the duration of SKILLOGIC PRINCE2 Courses? 
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">SKILLOGIC PRINCE2 courses will be held for 2 hours for 10 days if it’s an online program and 4 days of full classroom training in case of the offline program.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
      Who are my trainers? How are they selected? 
      </button>
    </h2>
    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">SKILLOGIC chooses only highly qualified instructors with decades of training and working experience in IT, Agile and PRINCE2.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
      Will SKILLOGIC provide classroom training? 
      </button>
    </h2>
    <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Yes, SKILLOGIC provides PRINCE2 classroom training where you will have the most interactive experience of all.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingEight">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
      What are the different modes of training available at SKILLOGIC? 
      </button>
    </h2>
    <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">We provide you with flexible learning options from live online, self-study methods to Classroom training. You can choose the one preferable to you. We recommend you to take PRINCE2 courses online.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingNine">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
      What is SKILLOGIC FLEXI-PASS? 
      </button>
    </h2>
    <div id="flush-collapseNine" class="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Our Flexi-Pass for PRINCE2 course training will allow you to attend sessions from SKILLOGIC for a period of 6 months concerning any queries or revisions you would like to clear. </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTen">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
      Will SKILLOGIC provide me with a PRINCE2 Course Completion Certificate? 
      </button>
    </h2>
    <div id="flush-collapseTen" class="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Definitely, after the completion of your course, we will issue you with a course completion certificate.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingElven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseElven" aria-expanded="false" aria-controls="flush-collapseElven">
      Are there any documents that I need to carry to the training session? 
      </button>
    </h2>
    <div id="flush-collapseElven" class="accordion-collapse collapse" aria-labelledby="flush-headingElven" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Yes. Photo ID Proof such as a National ID card, Driving License etc are required for issuing a Participation Certificate and booking certification exam as required.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwl">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwl" aria-expanded="false" aria-controls="flush-collapseTwl">
      What if I miss a PRINCE2 class or session? 
      </button>
    </h2>
    <div id="flush-collapseTwl" class="accordion-collapse collapse" aria-labelledby="flush-headingTwl" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">You needn’t worry about that. Just contact your trainers regarding the same and fix a class according to your schedule. In the case of online training, you will already be given all the study materials to refer from.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThrit">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThrit" aria-expanded="false" aria-controls="flush-collapseThrit">
      Will I receive a demo class before paying the PRINCE2 course fee? 
      </button>
    </h2>
    <div id="flush-collapseThrit" class="accordion-collapse collapse" aria-labelledby="flush-headingThrit" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Yes, you shall be provided with a free demo class so as to give a brief idea of how the training will be done and what the training will cover. </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headinghFourth">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourth" aria-expanded="false" aria-controls="flush-collapseFourth">
      What does a SKILLOGIC study kit include? 
      </button>
    </h2>
    <div id="flush-collapseFourth" class="accordion-collapse collapse" aria-labelledby="flush-headingFourth" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      Skillogic Study Kit includes Courseware Soft copies of study materials, Sample Questions, other required materials required for your self-study.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headinghN">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseN" aria-expanded="false" aria-controls="flush-collapseN">
      What is the learning approach in the SKILLOGIC PRINCE2 courses? 
      </button>
    </h2>
    <div id="flush-collapseN" class="accordion-collapse collapse" aria-labelledby="flush-headingN" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>Learning through case study approach</p>
        <p>Theory → Hands-On → Case Study → Project→ Model Deployment</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSixteen">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSixteen" aria-expanded="false" aria-controls="flush-collapseSixteen">
      Can I switch to a support session if I need a better understanding of the topic? 
      </button>
    </h2>
    <div id="flush-collapseSixteen" class="accordion-collapse collapse" aria-labelledby="flush-headingSixteen" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      Yes for sure, it’s important that you make the most out of your training sessions. You surely can ask for support sessions if you need any further clarifications.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSeventeen">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeventeen" aria-expanded="false" aria-controls="flush-collapseSeventeen">
      What are the different modes of payment available? 
      </button>
    </h2>
    <div id="flush-collapseSeventeen" class="accordion-collapse collapse" aria-labelledby="flush-headingSeventeen" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <p>We accept payment via;</p>
        <ul>
          <li>Cash</li>
          <li>Net Banking</li>
          <li>Cheque</li>
          <li>Debit Card</li>
          <li>Credit Card</li>
          <li>Paypal</li>
          <li>Visa</li>
          <li>Master Card</li>
          <li>Amercian Express</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingEighteen">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEighteen" aria-expanded="false" aria-controls="flush-collapseEighteen">
      What are the criteria for the 100% pass warranty Scheme? 
      </button>
    </h2>
    <div id="flush-collapseEighteen" class="accordion-collapse collapse" aria-labelledby="flush-headingEighteen" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <p>1. 100% pass warranty scheme provides candidate a second attempt paid by SKILLOGIC, in the case of an unsuccessful first attempt.    </p>
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
             <h3 className='pmp-heading'>WHY SKILLOGIC FOR PRINCE2 TRAINING</h3>
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
           <h4 className='pmp-heading'>OTHER LOCATIONS</h4>
             <div className="row ">
              {/*  <h2 className='pmp-heading'>OTHER LOCATIONS</h2> */}
              {
                PMPLOCATIONS.map(item =>
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
   
        {/* pmp trending courses start */}
     <section className="pmp-trending">
          <div className="container">
          <h4 className='pmp-heading mb-5'>TRENDING COURSES</h4>
            <div className="row">
             
              {
              PMPTRENDING.map(item =>
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
          <h4 className='pmp-heading'>SKILLLOGIC TRAINING LOCATIONS IN INDIA </h4>
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

export default PRINCE;

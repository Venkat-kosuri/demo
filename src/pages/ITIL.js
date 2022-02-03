import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import { FaExternalLinkAlt,FaChalkboardTeacher,FaUsers,FaRupeeSign } from 'react-icons/fa';
import { IoIosCall,IoLogoWhatsapp } from 'react-icons/io';
import {RiPriceTagFill} from 'react-icons/ri'
import { AiOutlineMail,AiFillPlayCircle,AiFillClockCircle } from 'react-icons/ai';
import {BsFillStarFill,BsBook} from 'react-icons/bs'
import {ITILCOURSE,skilllogic,ITILLOCATION,ITILTRENDING,countries,footer,Branches} from './Data'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReactReadMoreReadLess from "react-read-more-read-less";
const ITIL = () => {

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
 const longText = `ITIL is a set of best practices for IT service management (ITSM) that aims in aligning IT services with the needs of the business. The IT industry is constantly looking for individuals who are adequately trained in the field of ITIL. This course has lately become the widely accepted standard for IT service management, globally. The best ITIL training from the best training institute enables the participant with the best set of cohesive IT service management practices.

 Skillogic is an Authorized Training Organisation (ATO) providing ITIL training in Bangalore. Training is structured with Skillogic unique learning methodology in delivering training with real-time examples that are not only highly informative but also provides the right amount of practical knowledge and practice for the participants, helping them to acquire knowledge about ITIL concepts and enabling them in pursuing a strong career in IT service management domain. For quick inquiry, call +91 901 989 9000 / drop an enquiry.`
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
                <h1> ITIL FOUNDATION CERTIFICATION TRAINING</h1>
                <h5><AiFillClockCircle></AiFillClockCircle>5-Day 2hrs a day Online Training Program / 2-Day Full-time Classroom</h5>
                <h6 className='me-2'><strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>4.9 (28,454) reviews <button className='bt2'>Why ITIL ?</button></h6>
                <ul>
                     <li>ITIL® is a globally recognized and widely practiced framework across the industries</li>
                     <p>ITIL® is practiced as global standard for near to four decades across the industries</p>
                   </ul>
                   <ul>
                     <li>An essential certification for professionals in IT services</li>
                     <p>Considered as essential certification for IT services professionals</p>
                   </ul>
                   <ul>
                     <li>15,000+ ITIL® trained by SKILLOGIC as Accredited Training Organization</li>
                     <p>
                     SKILLOGIC is a global leader in ITIL certification training with more than a decade in delivering ITIL training</p>
                   </ul>
              </div>
              <div className='col-xs-12 col-md-2 header-price text-center'>
                <h4>Accreditations:</h4>
                <img src="https://d8fajseshwsed.cloudfront.net/images/accreditation/AXELOS-skillogic.png" alt=""  width="165" height="55" className='mb-5'/>
                <h5><FaRupeeSign></FaRupeeSign>28,000/</h5>
                <h2><FaRupeeSign></FaRupeeSign>19,900/-*</h2>
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
                     <Link to='/itil' className="page-routing breadcrumb-item text-dark">ITIL FOUNDATION CERTIFICATION TRAINING</Link>
                  </ol>
             </div>
           </div>
         </div>
         {/* PMP TRAINING FEATURES start */}

         <section className="pmp-training">
           <div className="container">
           <h5 className="mt-5 pb-1 pmp-heading">ITIL FOUNDATION CERTIFICATION TRAINING FEATURES</h5>
             <div className="row">
               <div className="col-xs-12 col-md-12 text-center">
                 <img src="https://skillogic.com/resource/images/courses/itil-skillogic-infographic.jpg" alt="" className='img-fluid'/>
               </div>
             </div>
           </div>
         </section>

         {/* PMP TRAINING FEATURES ends */}

        {/* PMP COST START*/}
          <section className="cost">
            <div className="container">
            <h5 className="mt-5 pb-4 pmp-heading">ITIL FOUNDATION CERTIFICATION TRAINING COST IN INDIA</h5>
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
                   <h5 className='text-dark'><FaRupeeSign></FaRupeeSign>28,000/</h5>
                   <h4 className='text-dark'><FaRupeeSign></FaRupeeSign>19,900/-</h4>
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
                   <h5><FaRupeeSign></FaRupeeSign>25,000/</h5>
                   <h4><FaRupeeSign></FaRupeeSign>17,990/-</h4>
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
                   <h5><FaRupeeSign></FaRupeeSign>31,000/</h5>
                   <h4><FaRupeeSign></FaRupeeSign>21,900/-</h4>
                   <p>*Available in selected cities</p>
                 </div>
                  </div>
              </div>
            </div>
          </section>
        {/* PMP COST ENDS*/}

        {/* PRINCE CERTIFICATION START */}
        <section className='pmp-firstattempt'>
           <div className="container">
             <div className="row">
               <div className="col-xs-12 col-md-12">
             <h5 className="mt-5 pmp-heading">ITIL® FOUNDATION CERTIFICATION TRAINING IN BANGALORE- SKILLOGIC</h5>
               <p><ReactReadMoreReadLess
        charLimit={470}
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


       {/* FAQ’S RELATED START */}
     <section className ='about-course'>
       <div className="container">
       <h5 className="mt-5 pb-4 pmp-heading">ABOUT COURSE</h5>
         <div className="row">
           <div className="col-xs-12 col-md-12">
           <div class="accordion accordion-flush" id="accordionFlushExample">
<div class="accordion-item">
 <h2 class="accordion-header" id="flush-CourseOne">
   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-CourseOne" aria-expanded="false" aria-controls="flush-CourseOne">
   What is this Course About? 
   </button>
 </h2>
 <div id="flush-CourseOne" class="accordion-collapse collapse" aria-labelledby="flush-CourseOne" data-bs-parent="#accordionFlushExample">
   <div class="accordion-body">
   ITIL is the defacto best practice framework for IT Service management widely practiced across the globe. ITIL® Certification course aims to impart knowledge on all 26 ITIL process aligned with ITIL Foundation syllabus as per AXELOS® , UK based ITIL Governing Body.
       </div>
 </div>
</div>
<div class="accordion-item">
 <h2 class="accordion-header" id="flush-headingTwo">
   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
   What are the Course Objectives? 
   </button>
 </h2>
 <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
   <div class="accordion-body">
    <ul>
      <li>Deliver training aligned with ITIL® Foundation Syllabus as per 2016 Exam Pattern</li>
      <li>Impart highlevel knowledge in ITIL® 26 Processes and Key Concepts.</li>
      <li>Provide End to End support to candidates in pre and post exam processes </li>
      <li>Inculcate continuous learning habit through providing access to ITIL resources.</li>
     
    </ul>
      </div>
 </div>
</div>
<div class="accordion-item">
 <h2 class="accordion-header" id="flush-headingThree">
   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
   Who should be aiming for this Course? 
   </button>
 </h2>
 <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
   <div class="accordion-body">
     <ul>
       <li>ITIL certification is increasing becoming a mandatory requirement for professionals engaged in IT Service management related jobs across the industry. This certification is most relevant for: Technical Support Roles</li>
        <li>Help Desk/ Service Desktop engineers.</li>
        <li>IT Managers and Operations Managers</li>
        <li>System Administrators/Analysts</li>
        <li>Database Administrators</li>
        <li>Service Delivery Professionals</li>
        <li>Quality Analysts and Application Management team</li>
        <li>Other professional related to IT service management</li>
     </ul>
   </div>
 </div>
</div>
</div> 
  </div>
         </div>
       </div>
     </section>

     {/* ABOUT COURSE END */}

      {/* course highlights start */}

    <section className="pmp-courses">
          <div className="container">
          <h4 className="mt-5 pb-4 pmp-heading">COURSE HIGHLIGHTS</h4>
            <div className="row">
          
              {
                ITILCOURSE.map(item => 
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
       <h4 className="mt-5 pb-4 pmp-heading">UPCOMING ITIL ONLINE TRAINING</h4>
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
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/Suresh-Mphan-roa.jpg'}  alt="..."/>
  <div class="media-body">
  
    <h5>SURESH M</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"SKILLOGIC is the best for ITIL training. With it's state of art training methodologies, and a team of experienced trainers, SKILLOGIC is known for the quality in the training sessions. I recommend SKILLOGIC for ITIL training. " </p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/Sudhanshu-agarwal.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>SUDHANSHU AGARWAL</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"SKILLOGIC has a structured training methodology. You will not find a better training institute, than SKILLOGIC, for taking the ITIL training. I recommend SKILLOGIC."</p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/Puroshotam-Kurade.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>PURSHOTTAM KURADE
    </h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"SKILLOGIC is another name for quality training and up skilling. They have a unique way of making you understand the concepts, with the case study approach. The trainers are experienced. I suggest SKILLOGIC for taking up ITIL training."</p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/Hardik-rana.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>HARDIK RANA</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"My experience at SKILLOGIC was excellent. The trainers were very supportive. The concepts were explained with the help of case studies. I recommend SKILLOGIC for all those who are looking for ITIL training." </p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/venkata_subrahmanyam_itil.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>VENKATA SUBRAHMANYAM</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"ITIL4-Meet all expectations. The trainer is excellent in his teaching style. As he has real-time experience so he can correlate each topic in day to day work culture which makes it easy to understand the topics. Staffs are also cooperative, study materials handed over to you before class started."  </p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/soubhagya_kumar_panigrahi_itil.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>SOUBHAGYA KUMAR</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"Excellent. I took the training for ITIL4 from SkillLogic and they assisted me in every possible way to have a great attempt. Extremely happy with their service. Special thanks to Nikitha for solving all the hassles on the way."</p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/nazeer_kagithala_itil.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>NAZEER KAGITHALA</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"Good place for ITIL certification. The trainer was well aware of the topics need to cover. They provide good facilities. I strongly recommend Skillogic Knowledge Solutions for ITIL training in Bangalore."  </p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/preeti_ladwa_itil.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>PREETI LADWA</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"It was a good session for ITIL certification and training we had with trainer thank u for the wonderful session, A great experience and happy that I found such a good institution. Thank you for your best services." </p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/kalaiyarasu_duraiswamy_itil.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>KALAIYARASU D</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"Its an outstanding training center to get certified in various courses offered by skilllogic. Very nice staff & trainers, always available to help you with your queries. "  </p>
 
  </div>
</div>
</div>
      </OwlCarousel>  
      </div>  
       </div>
      
       {/* testimonials end */}
          
       

         
         {/* skilllogic content start */}

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
            
                   {/* PRINCE CERTIFICATION END */}


        <div className="FAQ">
        <div className="container">
        <h5 className="mt-5 pb-4 pmp-heading">FAQ</h5>
          <div className="row">
            <div className="col-xs-12 col-md-12">
            <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
 <h2 class="accordion-header" id="flush-headingA">
   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseA" aria-expanded="false" aria-controls="flush-collapseA">
   Can I get full refund, if I decided not to continue with course? 
   </button>
 </h2>
 <div id="flush-collapseA" class="accordion-collapse collapse" aria-labelledby="flush-headingA" data-bs-parent="#accordionFlushExample">
   <div class="accordion-body">You are entitled to full/partial refund as governed by Skillogic refund policies. Do read the policy details, whose direct links are provide in this page footer</div>
 </div>
</div>
<div class="accordion-item">
 <h2 class="accordion-header" id="flush-headingB">
   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseB" aria-expanded="false" aria-controls="flush-collapseB">
   Can I switch from Classroom Batch to Live Online training batch? 
   </button>
 </h2>
 <div id="flush-collapseB" class="accordion-collapse collapse" aria-labelledby="flush-headingB" data-bs-parent="#accordionFlushExample">
   <div class="accordion-body">It is strongly recommended to one mode of training for better learning experience but , in case situation demands, yes you can switch mode of training upon requesting Skillogic contact point</div>
 </div>
</div>
<div class="accordion-item">
 <h2 class="accordion-header" id="flush-headingC">
   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseC" aria-expanded="false" aria-controls="flush-collapseC">
   Is there any documents I need to carry to the training session? 
   </button>
 </h2>
 <div id="flush-collapseC" class="accordion-collapse collapse" aria-labelledby="flush-headingC" data-bs-parent="#accordionFlushExample">
   <div class="accordion-body">
   Yes. You need to bring your Photo ID Proof such as National ID card, Driving License etc., We need this in order to issue Participation Certificate and booking certification exam as required.
   </div>
 </div>
</div>
<div class="accordion-item">
 <h2 class="accordion-header" id="flush-headingD">
   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseD" aria-expanded="false" aria-controls="flush-collapseD">
   Do I get opportunity to contact trainer for any quick queries 
   </button>
 </h2>
 <div id="flush-collapseD" class="accordion-collapse collapse" aria-labelledby="flush-headingD" data-bs-parent="#accordionFlushExample">
   <div class="accordion-body">
   <ul>We conduct whole day classroom revision session for this reason. In case, if you have quick queries, we fully support you to arrange a call from Trainer</ul>   </div>
 </div>
</div>
<div class="accordion-item">
 <h2 class="accordion-header" id="flush-headingE">
   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseE" aria-expanded="false" aria-controls="flush-collapseE">
   What does Skillogic Study Kit include? 
   </button>
 </h2>
 <div id="flush-collapseE" class="accordion-collapse collapse" aria-labelledby="flush-headingE" data-bs-parent="#accordionFlushExample">
   <div class="accordion-body">Skillogic Study Kit include Course ware Soft copies of study materials, Sample Questions, other required materials required for your self study.  </div>
 </div>
</div>
<div class="accordion-item">
 <h2 class="accordion-header" id="flush-headingG">
   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseG" aria-expanded="false" aria-controls="flush-collapseG">
   What are the criteria for the 100% pass warranty Scheme?  
   </button>
 </h2>
 <div id="flush-collapseG" class="accordion-collapse collapse" aria-labelledby="flush-headingG" data-bs-parent="#accordionFlushExample">
   <div class="accordion-body">
   <p>1. 100% pass warranty scheme provides candidate a second attempt paid by SKILLOGIC, in the case of an unsuccessful first attempt.</p>
   <p>2. The 100% pass warranty scheme is the only application for classroom training candidates.</p>
    </div>
 </div>
</div>
<div class="accordion-item">
 <h2 class="accordion-header" id="flush-headingH">
   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseH" aria-expanded="false" aria-controls="flush-collapseH">
   What are the criteria for availing a 100% Moneyback guarantee? 
   </button>
 </h2>
 <div id="flush-collapseH" class="accordion-collapse collapse" aria-labelledby="flush-headingH" data-bs-parent="#accordionFlushExample">
   <div class="accordion-body">
   <p>1. Money-back guarantee applies only for the training amount not for the exam as it is prepaid to accreditation bodies.</p>
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
      </div>
       
     {/* faq end*/}
     
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
         


         <section className="other-location ">
           <div className="container">
           <h4 className='pmp-heading'>OTHER LOCATIONS</h4>
             <div className="row ">
              {/*  <h2 className='pmp-heading'>OTHER LOCATIONS</h2> */}
              {
                ITILLOCATION.map(item =>
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
              ITILTRENDING.map(item =>
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

export default ITIL;

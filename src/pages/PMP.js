import React,{useState} from 'react';
import{Link} from 'react-router-dom'
import { FaExternalLinkAlt,FaChalkboardTeacher,FaUsers,FaRupeeSign } from 'react-icons/fa';
import { IoIosCall,IoLogoWhatsapp } from 'react-icons/io';
import {RiPriceTagFill} from 'react-icons/ri'
import { AiOutlineMail,AiFillPlayCircle,AiFillClockCircle } from 'react-icons/ai';
import {BsFillStarFill,BsBook} from 'react-icons/bs'
import {PMPCOURSE,skilllogic,PMPLOCATIONS,PMPTRENDING,countries,footer,Branches} from './Data'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReactReadMoreReadLess from "react-read-more-read-less";

const PMP = () => {
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
  const longText = `A project is a clear-cut, short-lived endeavour, attempting to carry out planned objectives. The Project Management Institute had described a “project” as “a temporary endeavour undertaken to create a unique product, service or result.
  SKILLOGIC® is one of the leading institutes for professional certifications training in Bangalore, specializing in best practice certifications in the domains of project management, IT service management, quality management and business analytics. We provide training services to individuals with tailored programs from beginners to working professionals and corporations with customized training propositions to align with their learning goals. Skillogic provides Project Management Courses. Our case study based training is designed as a 10 days 2 hrs/day online training program or 4-day full classroom experience devised to impart the PMP® concept in detail, by engaging participants in role-play, workshops and case studies. We make sure that you receive high-quality training from some of the best-certified instructors with decades of quality experience in Project Management Tools. After the completion of the Project Management course, you will be all set to attend the PMP examination conducted by PMI PMP Certification is a highly desirable certification,  PMP certification is certainly a well-respected credential, the world's leading project management certification. Namely every industry, be it manufacturing, construction, information services, publishing, finance, insurance, management or professional service, every industry needs PMP certified project managers because of additional challenges to perform in the more explosive global market.
  
  The PMI report pointed out that in the US project management professionals received a median salary of $111,000 per annum with a PMP certification. Attaining PMP credentials per learning several hard and soft skills. It creates the knowledge of basic project management processes, their tools & techniques as well as methodologies. Indeed, PMP certification grants you a certain level of prestige and substantial access to jobs with higher salaries.
  
  Enrol for Project Management Professional Training at SKILLOGIC right away`;
    



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
                <h1>PMP CERTIFICATION TRAINING</h1>
                <h5><AiFillClockCircle></AiFillClockCircle> 10-Day 2 hrs a day Online Training Program/ 4-Day Full-time Classroom</h5>
                <h6 className='me-2'><strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>4.9 (11,530) reviews <button className='bt2'>Why PMP ?</button></h6>
                <ul>
                     <li>PMP® is the world's gold standard for Project Management</li>
                     <p>It is a highly respected and widely accepted Project Management certification across the world.</p>
                   </ul>
                   <ul>
                     <li>Earn 20% more salaries as PMP certified</li>
                     <p>As per the recent survey by PMI, PMP certified earns 20% more salaries as compared to non-certified peers</p>
                   </ul>
                   <ul>
                     <li>SKILLOGIC® is an PMI REP and a global leader in PMP certification training</li>
                     <p>
                     SKILLOGIC® has more than a decade experience in providing quality PMP training and trained more than 15000 PMP Professionals</p>
                   </ul>
              </div>
              <div className='col-xs-12 col-md-2 header-price text-center'>
                <h4>Accreditations:</h4>
                <img src="https://d8fajseshwsed.cloudfront.net/images/accreditation/PMI-skillogic.png" alt=""  width="165" height="55" className='mb-5'/>
                <h5><FaRupeeSign></FaRupeeSign>23,000/</h5>
                <h2><FaRupeeSign></FaRupeeSign>14,900/-*</h2>
                <p>*Offer Price</p>
              </div>
              <div className='col-xs-12 col-md-2  text-center'>
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
                     <Link to='/pmp' className="page-routing breadcrumb-item text-dark">PMP CERTIFICATION TRAINING</Link>
                  </ol>
             </div>
           </div>
         </div>
         
           

         {/* PMP TRAINING FEATURES start */}

         <section className="pmp-training">
           <div className="container">
           <h5 className="mt-5 pb-1 pmp-heading">PMP TRAINING FEATURES</h5>
             <div className="row">
               <div className="col-xs-12 col-md-12 text-center">
                 <img src="https://skillogic.com/resource/images/courses/pmp-skillogic-infographic.jpg" alt="" className='img-fluid'/>
               </div>
             </div>
           </div>
         </section>

         {/* PMP TRAINING FEATURES ends */}

        {/* PMP COST START*/}
          <section className="cost">
            <div className="container">
            <h5 className="mt-5 pb-4 pmp-heading">PMP CERTIFICATION TRAINING COST IN INDIA</h5>
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
                   <h5 className='text-dark'><FaRupeeSign></FaRupeeSign>23,000/</h5>
                   <h4 className='text-dark'><FaRupeeSign></FaRupeeSign>14,000/-</h4>
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
                   <h5><FaRupeeSign></FaRupeeSign>28,000/</h5>
                   <h4><FaRupeeSign></FaRupeeSign>12,990/-</h4>
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
                   <h5><FaRupeeSign></FaRupeeSign>26,000/</h5>
                   <h4><FaRupeeSign></FaRupeeSign>20,900/-</h4>
                   <p>*Available in selected cities</p>
                 </div>
                  </div>
              </div>
            </div>
          </section>
        {/* PMP COST ENDS*/}
           
        {/* PMP CERTIFICATION START */}
         <section className='pmp-firstattempt'>
           <div className="container">
             <div className="row">
               <div className="col-xs-12 col-md-12">
             <h5 className="mt-5 pmp-heading">PMP®CERTIFICATION IN FIRST ATTEMPT</h5>
               <p> <ReactReadMoreReadLess
        charLimit={235}
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
        {/* PMP CERTIFICATION END */}

        {/* ABOUT COURSE START */}
        <section className ='about-course'>
          <div className="container">
          <h5 className="mt-5 pb-4 pmp-heading">ABOUT COURSE</h5>
            <div className="row">
              <div className="col-xs-12 col-md-12">
              <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-CourseOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-CourseOne" aria-expanded="false" aria-controls="flush-CourseOne">
      What is Project Management? 
      </button>
    </h2>
    <div id="flush-CourseOne" class="accordion-collapse collapse" aria-labelledby="flush-CourseOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">In simple terms, Project management is applying specific processes and principles to initiate, plan, execute and manage the way that new initiatives or changes are implemented within an organization. </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      How useful is learning Project Management? 
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Learning is the key to project management, the success of every project depends on how it adapted to the changing environment. Project Management has become of great value and a top priority for businesses and organizations. It permits your team to concentrate on the work that actually matters, with no distractions due to tasks going off track or budgets spinning out of control.    </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Which industries make use of Project Management? 
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Industries that use project management include construction, manufacturing, engineering, architecture, real estate development, financial service, IT, Healthcare, Law. Project managers work in information technology and with Internet companies, where they coordinate the development and implementation of new applications or manage new site launches.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      What is the Scope of Project Management? 
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The call for project managers is escalating faster than for workers in other occupations. By 2027, the project management-oriented labour force in seven project-oriented sectors is expected to grow by 33 per cent or nearly 22 million new jobs.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      What is PMP Certification? 
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Project Management Professional (PMP) certification is an industry-recognized per cent credential for project managers. PMP exemplifies the experience, education, skill and competency needed to head and direct projects. PMP is the desired certification administered by the Project Management Institute (PMI), USA.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
      Can a fresher pursue Project Management Courses and get employed? 
      </button>
    </h2>
    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">A fresher cannot do PMP Certification. A minimum of 4500 hours of project management experience in the Project Management domain is important.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
      For how long will the Project Management Training be held? 
      </button>
    </h2>
    <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">As per prerequisites and preparedness, candidates can get a PMP certification 8 to 12 weeks after applying to PMI.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingEight">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
      Do I need to have strong programming skills to be a PMP? 
      </button>
    </h2>
    <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">If you wish to be a project manager for software projects, you ought to have an excellent grasp of the software development processes, life cycle etc along with strong project management skills.
Programming knowledge is a good skill set that helps you as the Project Manager to talk the language your developers use and get more cooperation, however it isn’t mandatory.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingNine">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
      For how long will the PMP certification be valid? 
      </button>
    </h2>
    <div id="flush-collapseNine" class="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The PMP Certification needs to be renewed once in 3 years. </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTen">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
      Is PMI membership mandatory for PMP exams? 
      </button>
    </h2>
    <div id="flush-collapseTen" class="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">PMI® membership is not mandatory but this comes with no extra cost for the first year. PMI membership fee is US$139, and the PMP® exam fee for a member is US$405 while for a non-member is US$555. You can save $12 by taking a PMI membership.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingElven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseElven" aria-expanded="false" aria-controls="flush-collapseElven">
      What is the Scope of PMP? 
      </button>
    </h2>
    <div id="flush-collapseElven" class="accordion-collapse collapse" aria-labelledby="flush-headingElven" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">A PMP can work in any industry, with any methodology and any location. With PMPs earning almost 17% more than their non-certified counterparts, this certification is fast gaining popularity.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwl">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwl" aria-expanded="false" aria-controls="flush-collapseTwl">
      Is the PMP exam difficult? 
      </button>
    </h2>
    <div id="flush-collapseTwl" class="accordion-collapse collapse" aria-labelledby="flush-headingTwl" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">PMP exam is considered as one of the most difficult projects management exams mostly because of its huge syllabus, the dedication required, type & length of the questions asked, duration of exam & answer choices. It tests the candidate's level of proficiency in Project Management skills and their patience level.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThrit">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThrit" aria-expanded="false" aria-controls="flush-collapseThrit">
      What is the salary for Project Management practitioners? 
      </button>
    </h2>
    <div id="flush-collapseThrit" class="accordion-collapse collapse" aria-labelledby="flush-headingThrit" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The average salary of a project manager lies between $63,411 and $84,531 in the US and approx 1,818,560 INR in India. </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headinghFourth">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourth" aria-expanded="false" aria-controls="flush-collapseFourth">
      Does PMI provide any other certification in project management? 
      </button>
    </h2>
    <div id="flush-collapseFourth" class="accordion-collapse collapse" aria-labelledby="flush-headingFourth" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <ul>
          <li>Project Management Professional (PMP)</li>
          <li>Program Management Professional (PgMP)</li>
          <li>Portfolio Management Professional (PfMP)</li>
          <li>Certified Associate in Project Management (CAPM)</li>
          <li>PMI Professional in Business Analysis (PMI-PBA)</li>
          <li>PMI Agile Certified Practitioner (PMI-ACP)</li>
          <li>PMI Risk Management Professional (PMI-RMP)</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headinghN">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseN" aria-expanded="false" aria-controls="flush-collapseN">
      What is the Best Training Institute in India for Project Management? 
      </button>
    </h2>
    <div id="flush-collapseN" class="accordion-collapse collapse" aria-labelledby="flush-headingN" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">SKILLOGIC is the best training institute to choose if you are looking for Project Management training in India. At SKILLOGIC you will not only be trained on Project Management concepts and the variety of tools but also you will gain hands-on experience with actual tools. Training is designed to clear your PMP certification exam on the first attempt.</div>
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
       
       {/* trainig schedule start */}
       <section className="training-schedule">
          <div className="container">
          <h3 className="mt-5 pb-4 pmp-heading">UPCOMING PMP ONLINE TRAINING SCHEDULES</h3>
          <div className="row">
            <div className="  designing">
              <div className="col-xs-1 col-md-1 pmp-dates">
               <h4>jan</h4>
               <div className='training-dates'>
               <p>22</p>
               <p>Sat</p>
               </div>
              </div>
              <div className="col-xs-5 col-md-4 pmp-certification">
                <h1>PMP® Certification Training</h1>
                <p>Start Date : 22 Jan 2022 | 6 Days</p>
                <p> Time: 8:00 am - 10:00 pm IST</p>
              </div>
              <div className="col-xs-3 col-md-3 learning">
               <h1>Learning Mode:Online</h1>
              </div>
              <div className="col-xs-2 col-md-2 pmp-prices">
                 <h3>23,000 <FaRupeeSign></FaRupeeSign></h3>
                 <h1>14,900 <FaRupeeSign></FaRupeeSign> +GST</h1>
                 <h5>Valid till 22 jan 2022</h5>
              </div>
              <div className="col-xs-1 col-md-2">
               <button type="button" className="enguiry-btn">Enquire Now</button>
              </div>
            </div>
            <div className="designing ">
              <div className="col-xs-1 col-md-1 pmp-dates">
               <h4>Feb</h4>
               <div className='training-dates'>
               <p>07</p>
               <p>Mon</p>
               </div>
              </div>
              <div className="col-xs-5 col-md-4 pmp-certification">
                <h1>PMP® Certification Training</h1>
                <p>Start Date : 22 Jan 2022 | 6 Days</p>
                <p> Time: 8:00 am - 10:00 pm IST</p>
              </div>
              <div className="col-xs-3 col-md-3 learning">
               <h1>Learning Mode:Online</h1>
              </div>
              <div className="col-xs-2 col-md-2 pmp-prices">
                 <h3>23,000 <FaRupeeSign></FaRupeeSign></h3>
                 <h1>14,900 <FaRupeeSign></FaRupeeSign> +GST</h1>
                 <h5>Valid till 22 jan 2022</h5>
              </div>
              <div className="col-xs-1 col-md-2">
               <button type="button" className="enguiry-btn">Enquire Now</button>
              </div>
            </div>
            <div className="designing ">
              <div className="col-xs-1 col-md-1 pmp-dates">
               <h4>Feb</h4>
               <div className='training-dates'>
               <p>19</p>
               <p>Sat</p>
               </div>
              </div>
              <div className="col-xs-5 col-md-4 pmp-certification">
                <h1>PMP® Certification Training</h1>
                <p>Start Date : 22 Jan 2022 | 6 Days</p>
                <p> Time: 8:30 am - 12:30 pm IST</p>
              </div>
              <div className="col-xs-3 col-md-3 learning">
               <h1>Learning Mode:Online</h1>
              </div>
              <div className="col-xs-2 col-md-2 pmp-prices">
                 <h3>23,000 <FaRupeeSign></FaRupeeSign></h3>
                 <h1>14,900 <FaRupeeSign></FaRupeeSign> +GST</h1>
                 <h5>Valid till 22 jan 2022</h5>
              </div>
              <div className="col-xs-1 col-md-2">
               <button type="button" className="enguiry-btn">Enquire Now</button>
              </div>
            </div>
            <div className=" designing ">
              <div className="col-xs-1 col-md-1 pmp-dates">
               <h4>Feb</h4>
               <div className='training-dates'>
               <p>21</p>
               <p>Mon</p>
               </div>
              </div>
              <div className="col-xs-5 col-md-4 pmp-certification">
                <h1>PMP® Certification Training</h1>
                <p>Start Date : 22 Jan 2022 | 6 Days</p>
                <p> Time: 8:00 am - 10:00 pm IST</p>
              </div>
              <div className="col-xs-3 col-md-3 learning">
               <h1>Learning Mode:Online</h1>
              </div>
              <div className="col-xs-2 col-md-2 pmp-prices">
                 <h3>23,000 <FaRupeeSign></FaRupeeSign></h3>
                 <h1>14,900 <FaRupeeSign></FaRupeeSign> +GST</h1>
                 <h5>Valid till 22 jan 2022</h5>
              </div>
              <div className="col-xs-1 col-md-2">
              <button type="button" className="enguiry-btn">Enquire Now</button>
              </div>
            </div>
            <div className=" designing ">
              <div className="col-xs-1 col-md-1 pmp-dates">
               <h4>Mar</h4>
               <div className='training-dates'>
               <p>07</p>
               <p>Mon</p>
               </div>
              </div>
              <div className="col-xs-5 col-md-4 pmp-certification">
                <h1>PMP® Certification Training</h1>
                <p>Start Date : 22 Jan 2022 | 6 Days</p>
                <p> Time: 8:00 am - 10:00 pm IST</p>
              </div>
              <div className="col-xs-3 col-md-3 learning">
               <h1>Learning Mode:Online</h1>
              </div>
              <div className="col-xs-2 col-md-2 pmp-prices">
                 <h3>23,000 <FaRupeeSign></FaRupeeSign></h3>
                 <h1>14,900 <FaRupeeSign></FaRupeeSign> +GST</h1>
                 <h5>Valid till 22 jan 2022</h5>
              </div>
              <div className="col-xs-1 col-md-2">
              <button type="button" className="enguiry-btn">Enquire Now</button>
              </div>
            </div>
          </div>
          </div>
        </section>
 
        {/* trainig schedule end */}
       
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
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/Ajith_Kottamasu.jpg'}  alt="..."/>
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
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/sambireddy_bhimavarapu_pmp.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>SAMBIREDDY B</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>""It was an amazing learning experience by SKILLOGIC. All the areas were covered with practical scenarios. The most important part of this training is from Trainer keeps motivating from starting day to till the end which gives a lot of positive energy. Thanks to SKILLOGIC. " </p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/vishal_handaragal_pmp.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>VISHAL HANDARAGAL</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"Excellent PMP training sessions by Skillogic. The Trainer focus on real-world examples and interconnecting theory from PMP was the highlight. Rather than making professionals ready for just an exam, his sessions were designed to meet the overall understanding of project management."  </p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/sanjivkumar_padaki_pmp.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>SANJIVKUMAR PADAKI</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"I feel proud that I found Skillogic through proper online research for my PMP training. The trainer is exceptionally good not only in PMP exam training but also in explaining real-life project management challenges in a very interesting and humorous style. I highly recommend for PMP training in SKILLOGIC center. "  </p>
 
  </div>
</div>
</div>
<div className='skl-step1'>
<div class="media d-flex">
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/saikat_datta_pmp.jpg'} className='img-rounded' alt="..."/>
  <div class="media-body">
  
    <h5>SAIKAT</h5>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
   <p>"The PMP session conducted by Skillogic was an amalgamation of key project management concepts and corporate life examples. The entire training journey makes us believe we will be successful project managers and make it to the top in the near future. It was indeed value-added learning."  </p>
 
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
             <h3 className='pmp-heading'>WHY SKILLOGIC ?</h3>
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
         <div className="FAQ">
           <div className="container">
           <h5 className="mt-5 pb-4 pmp-heading">FAQ</h5>
             <div className="row">
               <div className="col-xs-12 col-md-12">
               <div class="accordion accordion-flush" id="accordionFlushExample">
               <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingA">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseA" aria-expanded="false" aria-controls="flush-collapseA">
      Who can take Project Management Training from SKILLOGIC? 
      </button>
    </h2>
    <div id="flush-collapseA" class="accordion-collapse collapse" aria-labelledby="flush-headingA" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">If you are looking forward to building a career in the Project Management domain. Professionals who are involved in projects in different management and coordination levels, Project Managers, Team Leads and PMO Office Executives, Any professionals, who suffice PMP® requirements, aspiring to be a Project Manager.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingB">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseB" aria-expanded="false" aria-controls="flush-collapseB">
      For how long will the PMP training be held? 
      </button>
    </h2>
    <div id="flush-collapseB" class="accordion-collapse collapse" aria-labelledby="flush-headingB" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">SKILLOGIC PMP certification training is 10 days 2 hrs/day online training program or 4-day full classroom training.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingC">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseC" aria-expanded="false" aria-controls="flush-collapseC">
      Why should I learn a Project Management course from SKILLOGIC? 
      </button>
    </h2>
    <div id="flush-collapseC" class="accordion-collapse collapse" aria-labelledby="flush-headingC" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <ul>
        <p>SKILLOGIC® is one of the leading institutes for professional certifications training in India.</p>
          <li>We provide training services to individuals with tailored programs from beginners to working professionals and to corporations with customized training propositions to align with their learning goals.</li>
          <li>Our case study based training includes real-world projects and highly valuable case studies. </li>
          <li>Portfolio Management Professional (PfMP)</li>
          <li>Experienced Trainers</li>
          <li>24/7 Customer care</li>
          <li>100% Money-Back Guarantee</li>
        
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingD">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseD" aria-expanded="false" aria-controls="flush-collapseD">
      How much do I have to pay to receive a PMP course from SKILLOGIC? 
      </button>
    </h2>
    <div id="flush-collapseD" class="accordion-collapse collapse" aria-labelledby="flush-headingD" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">At SKILLOGIC, the PMP Certification Training Fee ranges from 258.41 USD to 680.02 USD according to the mode of learning you choose.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingE">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseE" aria-expanded="false" aria-controls="flush-collapseE">
      Who are my trainers? How are they selected? 
      </button>
    </h2>
    <div id="flush-collapseE" class="accordion-collapse collapse" aria-labelledby="flush-headingE" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">SKILLOGIC chooses only highly qualified instructors with decades of training and working experience in IT, Agile and Project Management. </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingG">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseG" aria-expanded="false" aria-controls="flush-collapseG">
      Will SKILLOGIC provide classroom training? 
      </button>
    </h2>
    <div id="flush-collapseG" class="accordion-collapse collapse" aria-labelledby="flush-headingG" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Yes, SKILLOGIC provides Project Management classroom training where you will have the most interactive experience of all. </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingH">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseH" aria-expanded="false" aria-controls="flush-collapseH">
      What are the different modes of training available at SKILLOGIC? 
      </button>
    </h2>
    <div id="flush-collapseH" class="accordion-collapse collapse" aria-labelledby="flush-headingH" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">We provide you with flexible learning options from live online, self-study methods to Classroom training. You can choose the one preferable to you. We recommend you take Project Management courses online.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingI">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseI" aria-expanded="false" aria-controls="flush-collapseI">
      What is SKILLOGIC FLEXI-PASS? 
      </button>
    </h2>
    <div id="flush-collapseI" class="accordion-collapse collapse" aria-labelledby="flush-headingI" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Our Flexi-Pass for PMP Course Training will allow you to attend sessions from SKILLOGIC for 6 months concerning any queries or revisions you would like to clear.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingF">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseF" aria-expanded="false" aria-controls="flush-collapseF">
      Will I receive a course completion certificate after completing Project Management training from SKILLOGIC? 
      </button>
    </h2>
    <div id="flush-collapseF" class="accordion-collapse collapse" aria-labelledby="flush-headingF" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Definitely, after the completion of the Project Management training, we will issue you with PMP Course Completion Certification. which is a global certification. </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingJ">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseJ" aria-expanded="false" aria-controls="flush-collapseJ">
      Will SKILLOGIC assist me in applying for the PMI Certification Examination? 
      </button>
    </h2>
    <div id="flush-collapseJ" class="accordion-collapse collapse" aria-labelledby="flush-headingJ" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Yes, we do. We will provide you with full assistance with your PMI certification application.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingK">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseK" aria-expanded="false" aria-controls="flush-collapseK">
      Which one is better? PMP or PRINCE? 
      </button>
    </h2>
    <div id="flush-collapseK" class="accordion-collapse collapse" aria-labelledby="flush-headingK" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Both PRINCE2 and PMP are standard approaches and best practices to manage the project successfully. For more details on the topic you check out our article on PMP vs PRINCE2 Certification:
       <a href="https://docs.google.com/document/d/14UB9JNtSqqtuz7Jh2ZVZF-jCh2sbeOKuGYxGOZdKrVw/edit"></a>
       <p>Also check out a video</p>
       <a href="https://www.youtube.com/watch?v=0RXQ5jIhI08"></a>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingL">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseL" aria-expanded="false" aria-controls="flush-collapseL">
      Are there any documents that I need to carry to the training session? 
      </button>
    </h2>
    <div id="flush-collapseL" class="accordion-collapse collapse" aria-labelledby="flush-headingL" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Yes. Photo ID Proof such as a National ID card, Driving License etc are required for issuing a Participation Certificate and booking certification exam as required.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingX">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseX" aria-expanded="false" aria-controls="flush-collapseX">
      What if I miss a PMP class or session? 
      </button>
    </h2>
    <div id="flush-collapseX" class="accordion-collapse collapse" aria-labelledby="flush-headingX" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"> You needn’t worry about that. Just contact your trainers regarding the same and fix a class according to your schedule. In the case of online training, you will already be given all the study materials to refer from.  </div>
    </div>
  </div>
    <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingM">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseM" aria-expanded="false" aria-controls="flush-collapseM">
      Will I receive a demo class before paying the Project Management Professional course fee? 
      </button>
    </h2>
    <div id="flush-collapseM" class="accordion-collapse collapse" aria-labelledby="flush-headingM" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      Yes, you shall be provided with a free demo class to give a brief idea of how the training will be done and what the training will cover.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingN">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseN" aria-expanded="false" aria-controls="flush-collapseN">
      How does SKILLOGIC provide training for PMP Courses? 
      </button>
    </h2>
    <div id="flush-collapseN" class="accordion-collapse collapse" aria-labelledby="flush-headingN" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">SKILLOGIC provides a three-phase learning method. In Phase 1, candidates would be provided with self-study videos and books to help them gain ample information about the course. Phase 2 is the primary stage of Intensive live online training and after the training, you will receive Project Management On Certification which is a global certification. And in the third phase, we will issue projects.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingO">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseO" aria-expanded="false" aria-controls="flush-collapseO">
      What is the learning approach in the SKILLOGIC PMP courses? 
      </button>
    </h2>
    <div id="flush-collapseO" class="accordion-collapse collapse" aria-labelledby="flush-headingO" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Learning through case study approach
       <p>Theory → Hands-On → Case Study → Project→ Model Deployment</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingP">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseP" aria-expanded="false" aria-controls="flush-collapseP">
      Can I switch to a support session if I need a better understanding of the topic? 
      </button>
    </h2>
    <div id="flush-collapseP" class="accordion-collapse collapse" aria-labelledby="flush-headingP" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Yes for sure, you must make the most out of your training sessions. You surely can ask for support sessions if you need any further clarifications.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingQ">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseQ" aria-expanded="false" aria-controls="flush-collapseQ">
      What are the different modes of payment available? 
      </button>
    </h2>
    <div id="flush-collapseQ" class="accordion-collapse collapse" aria-labelledby="flush-headingQ" data-bs-parent="#accordionFlushExample">
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
    <h2 class="accordion-header" id="flush-headingR">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseR" aria-expanded="false" aria-controls="flush-collapseR">
      What are the criteria for availing a 100% Moneyback guarantee? 
      </button>
    </h2>
    <div id="flush-collapseR" class="accordion-collapse collapse" aria-labelledby="flush-headingR" data-bs-parent="#accordionFlushExample">
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
         

         {/* other location start */}
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
          <h4 className='pmp-heading'>TRENDING COURSES</h4>
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

export default PMP;

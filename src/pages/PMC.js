import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { FaExternalLinkAlt,FaChalkboardTeacher,FaUsers,FaRupeeSign } from 'react-icons/fa';
import { IoIosCall,IoLogoWhatsapp } from 'react-icons/io';
import { AiOutlineMail,AiFillPlayCircle,AiFillClockCircle } from 'react-icons/ai';
import {BsFillStarFill,BsBook} from 'react-icons/bs'
import {PMCCCOURSE,skilllogic,PMPLOCATIONS,PMPTRENDING,countries,footer,Branches,PROJECT_MANAG} from './Data'
import './css/bac.css'
import ReactReadMoreReadLess from "react-read-more-read-less";

const PMC = () => {
  const [show,setshow]=useState(false);
  const longText = 
  `Project management has become all-pervasive in the contemporary world – with the methodologies being employed in virtually every industry, far and wide. Project management centres on mapping out and structuring projects and their resources. As in determining and directing the lifecycle to be used, employing it to the user-centred design process, devising the project team, and systematically guiding the team through all phases until project completion.

  SKILLOGIC® is one of the leading institutes for professional certifications training in Bangalore, specializing in best practice certifications in the domains of project management, IT service management, quality management and business analytics. We provide training services to individuals with tailored programs from beginners to working professionals and to corporations with customized training propositions to align with their learning goals. SKILLOGIC provides Project Management Courses. Our case study based training is designed as a five-day intensive classroom training program devised to impart the PMP® concept in detail, involving participants in role-play, workshops and case studies in groups. 
  
  We make sure that you receive high-quality training from some of the best-certified instructors with decades of quality experience in Project Management Tools. After the completion of the Project Management course, you will be all set to attend the PMP examination conducted by PMI. Our Curriculum includes PRINCE2, PMP, CAPM Training, PMI Agile Certified Practitioner Training, PgMP Training and MSP Training. 
  
  The vitality of project management for businesses can’t be exaggerated. When properly executed, it helps every part of the business run steady and smooth. PMI remarked that by 2027 businesses will require 88 million employees for project-related roles. The global demand for project managers is skyrocketing. And with the value surging for project management, the project manager skill set has never been more crucial.
  
  Are you interested in being a Project Management Practitioner? Wait no more. Join SKILLOGIC Project Management Training right away!`
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
                <h1>PROJECT MANAGEMENT CERTIFICATION TRAINING</h1>
                <h5> <AiFillClockCircle></AiFillClockCircle> 5-Day Full-time Intensive Classroom Training Program</h5>
                <h6 className='me-2'><strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>4.9 (18,260) reviews   <button className='bt2'>Why PMP ?</button></h6>
                <ul>
                     <li>PMP is the world's gold standard for Project Management</li>
                     <p>It is highly respected and widely accepted Project Management certification across the world.</p>
                   </ul>
                   <ul>
                     <li>Earn 20% more salaries as PMP certified</li>
                     <p>As per recent survey by PMI, PMP certified earns 20% more salaries as compared to non-certified peers</p>
                   </ul>
                   <ul>
                     <li>SKILLOGIC® is an PMI REP and a global leader in PMP certification training</li>
                     <p>
                     SKILLOGIC has more than a decade experience in providing quality PMP training and trained more than 15000 PMP Professionals</p>
                   </ul>
              </div>
              <div className='col-xs-12 col-md-2 header-price text-center'>
                <h4>Accreditations:</h4>
                <img src="https://d8fajseshwsed.cloudfront.net/images/accreditation/PMI-skillogic.png" alt=""  width="165" height="55" className='mb-5'/>
                <img src="https://d8fajseshwsed.cloudfront.net/images/accreditation/PEOPLE-CERT-skillogic.png" alt=""  width="165" height="55" />
              </div>
              <div className='col-xs-12 col-md-2  text-center'>
              <img src="https://d8fajseshwsed.cloudfront.net/images/accreditation/AXELOS-skillogic.png" alt="" width="165" height="55"/>
               <h1 className='btn-icon mb-5'><AiFillPlayCircle></AiFillPlayCircle></h1>
                
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
                     <Link to='/pmc' className="page-routing breadcrumb-item text-dark">PROJECT MANAGEMENT CERTIFICATION TRAINING</Link>
                  </ol>
             </div>
           </div>
         </div>
         {/* BCA TRAINING FEATURES start */}

         <section className="pmp-training">
           <div className="container">
           <h5 className="mt-5 pb-1 pmp-heading">PROJECT MANAGEMENT TRAINING FEATURES</h5>
             <div className="row">
               <div className="col-xs-12 col-md-12 text-center">
                 <img src="https://skillogic.com/resource/images/courses/pmp-skillogic-infographic.jpg" alt="" className='img-fluid'/>
               </div>
             </div>
           </div>
         </section>

         {/* PMP TRAINING FEATURES ends */}

       {/* bussiness analytics start*/}
       
       <section className="bac-bussiness">
       <div className="container">
       <h5 className="mt-5 pb-1 pmp-heading">PROJECT MANAGEMENT CERTIFICATION TRAINING COURSES</h5>
       <div className="row">
          {
            PROJECT_MANAG.map(item =>
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
 
      {/* course highlights start */}

    <section className="pmp-courses">
          <div className="container">
          <h4 className="mt-5 pb-4 pmp-heading">PROJECT MANAGEMENT COURSE HIGHLIGHTS</h4>
            <div className="row">
          
              {
                PMCCCOURSE.map(item => 
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
          <h3 className="mt-5 pb-4 pmp-heading">UPCOMING PROJECT MANAGEMENT ONLINE TRAINING SCHEDULES</h3>
          <div className="row">
            <div className="  designing">
              <div className="col-xs-1 col-md-1 pmp-dates">
               <h4>feb</h4>
               <div className='training-dates'>
               <p>07</p>
               <p>Mon</p>
               </div>
              </div>
              <div className="col-xs-5 col-md-4 pmp-certification">
                <h1>PMP® Certification Training</h1>
                <p>Start Date: 07 Feb 2022 | 12 Days</p>
                <p> Time: 8:00 pm - 10:00 pm IST</p>
              </div>
              <div className="col-xs-3 col-md-3 learning">
               <h1>Learning Mode:Online</h1>
              </div>
              <div className="col-xs-2 col-md-2 pmp-prices">
                 <h3>23,000 <FaRupeeSign></FaRupeeSign></h3>
                 <h1>14,900 <FaRupeeSign></FaRupeeSign> +GST</h1>
                 <h5>Valid till 07 Feb 2022</h5>
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
               <p>sat</p>
               </div>
              </div>
              <div className="col-xs-5 col-md-4 pmp-certification">
                <h1>PMP® Certification Training</h1>
                <p>Start Date: 19 Feb 2022 | 6 Days</p>
                <p> Time: 8:30 am - 12:30 pm IST</p>
              </div>
              <div className="col-xs-3 col-md-3 learning">
               <h1>Learning Mode:Online</h1>
              </div>
              <div className="col-xs-2 col-md-2 pmp-prices">
                 <h3>23,000 <FaRupeeSign></FaRupeeSign></h3>
                 <h1>14,900 <FaRupeeSign></FaRupeeSign> +GST</h1>
                 <h5>Valid till 19 Feb 2022</h5>
              </div>
              <div className="col-xs-1 col-md-2">
               <button type="button" className="enguiry-btn">Enquire Now</button>
              </div>
            </div>
            <div className="designing ">
              <div className="col-xs-1 col-md-1 pmp-dates">
               <h4>Feb</h4>
               <div className='training-dates'>
               <p>21</p>
               <p>Mon</p>
               </div>
              </div>
              <div className="col-xs-5 col-md-4 pmp-certification">
                <h1>PMP® Certification Training</h1>
                <p>Start Date: 21 Feb 2022 | 12 Days</p>
                <p> Time: 8:00 am - 10:00 am IST</p>
              </div>
              <div className="col-xs-3 col-md-3 learning">
               <h1>Learning Mode:Online</h1>
              </div>
              <div className="col-xs-2 col-md-2 pmp-prices">
                 <h3>23,000 <FaRupeeSign></FaRupeeSign></h3>
                 <h1>14,900 <FaRupeeSign></FaRupeeSign> +GST</h1>
                 <h5>Valid till 21 Feb 2022</h5>
              </div>
              <div className="col-xs-1 col-md-2">
               <button type="button" className="enguiry-btn">Enquire Now</button>
              </div>
            </div>
            <div className="designing ">
            <div className="col-xs-1 col-md-1 pmp-dates">
             <h4>Mar</h4>
             <div className='training-dates'>
             <p>07</p>
             <p>Mon</p>
             </div>
            </div>
            <div className="col-xs-5 col-md-4 pmp-certification">
              <h1>PMP® Certification Training</h1>
              <p>Start Date: 07 Mar 2022 | 12 Days</p>
              <p> Time: 8:00 pm - 10:00 pm IST</p>
            </div>
            <div className="col-xs-3 col-md-3 learning">
             <h1>Learning Mode:Online</h1>
            </div>
            <div className="col-xs-2 col-md-2 pmp-prices">
               <h3>23,000 <FaRupeeSign></FaRupeeSign></h3>
               <h1>14,900 <FaRupeeSign></FaRupeeSign> +GST</h1>
               <h5>Valid till 07 Mar 2022</h5>
            </div>
            <div className="col-xs-1 col-md-2">
             <button type="button" className="enguiry-btn">Enquire Now</button>
            </div>
          </div>
          </div>
          </div>
        </section>
        {/* trainig schedule end */}

          {/* BAC CERTIFICATION START */}
          <section className='pmp-firstattempt'>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-12">
            <h5 className="mt-5 pmp-heading">PMP® CERTIFICATION IN FIRST ATTEMPT</h5>
            <ReactReadMoreReadLess
        charLimit={455}
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
       {/* BAC CERTIFICATION END */}

       {/*about bussiess analytics training start */}
       <section className ='about-course'>
          <div className="container">
          <h5 className="mt-5 pb-4 pmp-heading">ABOUT PROJECT MANAGEMENT TRAINING COURSES</h5>
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
      <div class="accordion-body">In simple terms, Project management is applying specific processes and principles to initiate, plan, execute and manage the way that new initiatives or changes are implemented within an organization.  </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      How useful is learning Project Management? 
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Learning is the key to project management, the success of every project depends on how it adapted to the changing environment. Project Management has become of great value and a top priority for businesses and organizations. It permits your team to concentrate on the work that actually matters, with no distractions due to tasks going off track or budgets spinning out of control.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      How much fee should I remit for attending the Project Management Courses? 
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The fee for Project Management Courses will range from 136.10 USD to 1361.04 USD according to the certification type you are applying for.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      What will be the job opportunities after learning the Project Management Course? 
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <ul>
      <li>Project manager</li>
      <li>Senior project manager</li>
      <li>Program manager</li>
      <li>Business change manager</li>
      <li>Delivery manager</li>
      <li>PMO manager</li>
      <li>Project coordinator</li>
      <li>Projects lead</li>
      <li>Project manager</li>
      <li>Project officer</li>
      <li>Project support officer</li>
      <li>Project administratorr</li>
      <li>Business analyst</li>
      </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      Which industries make use of Project Management? 
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Project Management is put to use in various industries such as construction, manufacturing, engineering, architecture, real estate development, financial service, IT, Healthcare and  Law to name some. </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
      For how long will the Project Management Training be held? 
      </button>
    </h2>
    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">As per the candidate's qualifications, skills and preparedness, it is feasible to get a Project Management Certification 8 to 12 weeks after applying to PMI.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
      What is the scope of Project Management? 
      </button>
    </h2>
    <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">By 2027, the project management-oriented sectors are foreseen to reach and override 33 per cent and about 22 million new jobs are expected to be generated. Certainly, the call for project managers is escalating faster than the demand for workers in other occupations.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingEight">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
      What is the salary for Project Management practitioners? 
      </button>
    </h2>
    <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The average salary of a project manager varies from $63,411 and $84,531 in the US.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingNine">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
      Which one is better? PMP or PRINCE2? 
      </button>
    </h2>
    <div id="flush-collapseNine" class="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <p>Both PRINCE2 and PMP are standard approaches and best practices to manage the project successfully. </p>
      <p>You can watch this video for details: <a href="https://www.youtube.com/watch?v=0RXQ5jIhI08"></a></p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTen">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
      What is the best training institute in India for Project Management? 
      </button>
    </h2>
    <div id="flush-collapseTen" class="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">SKILLOGIC is the best training institute to choose if you are looking for Project Management Training in India. Our training is tailored to help you clear your Project Management certification on the first attempt. At SKILLOGIC you will be trained in Project Management concepts and also well equipped with the variety of tools used for project management and receive hands-on experience with actual tools.</div>
    </div>
  </div>
   
 
          </div> 
              </div>
            </div>
          </div>
        </section>

       {/*about bussiess analytics training end */}

       {/*faq bussiness analytics start */}
       <div className="FAQ">
       <div className="container">
       <h5 className="mt-5 pb-4 pmp-heading">FAQ’S RELATED TO PROJECT MANAGEMENT COURSES</h5>
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
  <div class="accordion-body">Our Project Management courses are sectioned into various categories each of which will be apt for those related to the particular sections. Professionals who are involved in projects in different management and coordination levels, Project Managers, Team Leads and PMO Office Executives or if you are looking forward to building a career in the Project Management domain.d. </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingB">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseB" aria-expanded="false" aria-controls="flush-collapseB">
  Why should I learn a Project Management Course from SKILLOGIC? 
  </button>
</h2>
<div id="flush-collapseB" class="accordion-collapse collapse" aria-labelledby="flush-headingB" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">
  <ul>
  <li>SKILLOGIC® is one of the leading institutes for professional certifications training specialized in best practice certifications in the domains of business analytics, project management, IT service management and quality management.</li>
  <li>We provide training services to individuals with tailored programs from beginners to working professionals and to corporations with customized training propositions to align with their learning goals.</li>
  <li>Our case study based training includes real-world projects and highly valuable case studies.  </li>
  <li>After the training, you will receive IABAC Business Analytics Certification which is a global certification.</li>
   <li>Experienced Trainers</li>
   <li>Certification through unlimited classroom revisions.</li>
   <li>24/7 Customer care</li>
   <li>100% Money-Back Guarantee</li>
  </ul>
  </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingC">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseC" aria-expanded="false" aria-controls="flush-collapseC">
  How much do I have to pay to receive a Project Management course from SKILLOGIC? 
  </button>
</h2>
<div id="flush-collapseC" class="accordion-collapse collapse" aria-labelledby="flush-headingC" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">
  At SKILLOGIC the Project Management fee ranges from 258.41 USD to 680.02 USD, depending on your preferred choice of training.
  </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingD">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseD" aria-expanded="false" aria-controls="flush-collapseD">
  What will be the duration of SKILLOGIC Project Management Courses? 
  </button>
</h2>
<div id="flush-collapseD" class="accordion-collapse collapse" aria-labelledby="flush-headingD" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">SKILLOGIC provides a 5-Day Full-time Intensive Classroom Training Program for Project Management Courses.</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingE">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseE" aria-expanded="false" aria-controls="flush-collapseE">
  Who are my trainers? How are they selected? 
  </button>
</h2>
<div id="flush-collapseE" class="accordion-collapse collapse" aria-labelledby="flush-headingE" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">Yes, SKILLOGIC provides classroom training where you will have the most interactive experience of all. </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingG">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseG" aria-expanded="false" aria-controls="flush-collapseG">
  Who are my trainers? How are they selected? 
  </button>
</h2>
<div id="flush-collapseG" class="accordion-collapse collapse" aria-labelledby="flush-headingG" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">SKILLOGIC chooses only highly qualified instructors with decades of training and working experience in IT, Project Management and Agile. </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingH">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseH" aria-expanded="false" aria-controls="flush-collapseH">
  Will SKILLOGIC provide classroom training? 
  </button>
</h2>
<div id="flush-collapseH" class="accordion-collapse collapse" aria-labelledby="flush-headingH" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">Yes, SKILLOGIC provides Project Management classroom training where you will have the most interactive experience of all.</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingI">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseI" aria-expanded="false" aria-controls="flush-collapseI">
  What are the different modes of training available at SKILLOGIC? 
  </button>
</h2>
<div id="flush-collapseI" class="accordion-collapse collapse" aria-labelledby="flush-headingI" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">We provide you with flexible learning options from live online, self-study methods to Classroom training. You can choose the one preferable to you. We recommend you take Project Management courses online.</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingF">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseF" aria-expanded="false" aria-controls="flush-collapseF">
  What is FLEXI-PASS? 
  </button>
</h2>
<div id="flush-collapseF" class="accordion-collapse collapse" aria-labelledby="flush-headingF" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">Our Flexi-Pass for Project Management course training will allow you to attend sessions from SKILLOGIC for a period of 3 months concerning any queries or revisions you would like to clear. </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingJ">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseJ" aria-expanded="false" aria-controls="flush-collapseJ">
  What does a SKILLOGIC study kit include? 
  </button>
</h2>
<div id="flush-collapseJ" class="accordion-collapse collapse" aria-labelledby="flush-headingJ" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">Skillogic Study Kit includes Courseware Soft copies of study materials, Sample Questions, other required materials required for your self-study.</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingK">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseK" aria-expanded="false" aria-controls="flush-collapseK">
  Will SKILLOGIC provide me with a Project Management Course Completion Certificate? 
  </button>
</h2>
<div id="flush-collapseK" class="accordion-collapse collapse" aria-labelledby="flush-headingK" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">
  Definitely, after the completion of your course, we will issue you with a course completion certificate.
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
  What if I miss a Project Management class or session? 
  </button>
</h2>
<div id="flush-collapseX" class="accordion-collapse collapse" aria-labelledby="flush-headingX" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body"> You needn’t worry about that. Just contact your trainers regarding the same and fix a class according to your schedule. In the case of online training, you will already be given all the study materials to refer from. </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingM">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseM" aria-expanded="false" aria-controls="flush-collapseM">
  Will I receive a demo class before paying the Project Management course fee? 
  </button>
</h2>
<div id="flush-collapseM" class="accordion-collapse collapse" aria-labelledby="flush-headingM" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">
  Yes, you shall be provided with a free demo class so as to give a brief idea of how the training will be done and what the training will cover.
  </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingN">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseN" aria-expanded="false" aria-controls="flush-collapseN">
  How does SKILLOGIC provide training for Project Management Courses? 
  </button>
</h2>
<div id="flush-collapseN" class="accordion-collapse collapse" aria-labelledby="flush-headingN" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">SKILLOGIC provides Project Management Courses. Our case study based training is designed as a five-day intensive classroom training program devised to impart the PMP® concept in detail, involving participants in role-play, workshops and case studies in groups. We make sure that you receive high-quality training from some of the best-certified instructors with decades of quality experience in Project Management Tools.</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingO">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseO" aria-expanded="false" aria-controls="flush-collapseO">
  What is the learning approach in the SKILLOGIC Project Management courses? 
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
<h2 class="accordion-header" id="flush-headingX">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseR" aria-expanded="false" aria-controls="flush-collapseX">
  What are the criteria for the 100% pass warranty Scheme? 
  </button>
</h2>
<div id="flush-collapseX" class="accordion-collapse collapse" aria-labelledby="flush-headingX" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">
    <p>1. 100% pass warranty scheme provides candidate a second attempt paid by SKILLOGIC, in the case of an unsuccessful first attempt.</p>
    <p>2. The 100% pass warranty scheme is the only application for classroom training candidates</p>
   
   
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
        {/*faq bussiness analytics end */}









       
         {/* skilllogic content start */}

         <div className="skilllogic">
             <div className="container">
             <h3 className='pmp-heading'>WHY SKILLOGIC FOR PROJECT MANAGEMENT TRAINING</h3>
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

export default PMC;

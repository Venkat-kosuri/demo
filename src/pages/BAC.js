import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import { FaExternalLinkAlt,FaChalkboardTeacher,FaUsers,FaRupeeSign } from 'react-icons/fa';
import { IoIosCall,IoLogoWhatsapp } from 'react-icons/io';
import {RiPriceTagFill} from 'react-icons/ri'
import { AiOutlineMail,AiFillPlayCircle,AiFillClockCircle } from 'react-icons/ai';
import {BsFillStarFill,BsBook} from 'react-icons/bs'
import {BACCOURSE,skilllogic,BACLOCATIONS,BACTRENDING,countries,footer,Branches,business} from './Data'
import './css/bac.css'
import ReactReadMoreReadLess from "react-read-more-read-less";

const BAC = () => {
  const [show,setshow]=useState(false);

  const longText =
  `        Business Analytics is that technique by which businesses employ statistical methods and technologies for scrutinizing and illustrating historical data to accumulate new insights and enhance strategic decision-making. Business Analytics utilizes data analytics tools in pursuit of achieving business cognizance. As per the International Data Corporation (IDC), the worldwide revenues for Big Data and Business Analytics (BDA) solutions would scale to $260 billion in 2022 with a compound annual rate of growth (CAGR) of 11.9 per cent from 2017 to 2022.

  SKILLOGIC® is one among the leading institutes for professional certifications training specialized in best practice certifications within the domains of business analytics, project management, IT service management and quality management. We offer training services to individuals with tailored programs from beginners to working professionals and corporations with customized training propositions to align with their learning goals. SKILLOGIC provides Business Analytics Courses. We supply case study based training for 3 months, where you'll either choose online classes, self-learning methods or classroom training as per your preference. We confirm that you receive high-quality training from a number of the best-certified instructors with decades of quality experience in Business Analytics.
  
  We offer Business Analytics Training on Business Analytics Foundation, Business Analytics for Managers, Business Analytics Expert, Business Analytics-Banking, Business Analytics-Agriculture, Business Analytics- Insurance, Business Analytics-Logistics and Business Analytics- Retail. Our courses will assist learners to get familiarized with various components of Business Analytics like Data Aggregation, Data Mining, Association and Sequence Identification, Text Mining, Forecasting, Predictive Analytics, Optimization and Data Visualisation.
  
  You'll also be well equipped with Business Analytics tools like Tableau, Sisense, QlikView, Domo, BusinessObjects, SAS, Dundas BI, Splunk, KNIME, MicroStrategy, Tibco, Heap Analytics, Alteryx, MixPanel and Google Analytics
  
  Certainly, Business Analytics features a broad spectrum of applications and usage. Most companies seek to recruit Business Analytics professionals to reinforce their decision-making processes. As a cherry on top, the typical salary for a Business Analyst is 68,346 USD per annum! Yes, you heard it right! Are you set to become a Business Analyst? Join the Business Analytics Training right now!`;

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
                <h1>BUSINESS ANALYTICS CERTIFICATION TRAINING COURSES</h1>
                <h5> <AiFillClockCircle></AiFillClockCircle> 6-Day 2hrs a day Online Training Program / 2-Day Full-time Classroom</h5>
                <h6 className='me-2'><strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>
    <strong className='starts'><BsFillStarFill></BsFillStarFill></strong>4.9 (11,263) reviews  <button className='bt2'>Why BUSINESS ANALYTICS ?</button></h6>
                <ul>
                     <li>Business Analytics (BA) is the Next Big Thing</li>
                     <p>BA is perceived as the most important aspect in business, increasing demand by 600% last two years</p>
                   </ul>
                   <ul>
                     <li>Case Study Based Approach</li>
                     <p>enables to gain practical knowledge to implement business-analytics in real job</p>
                   </ul>
                   <ul>
                     <li>Business Analytics Data Lab and Job Portal</li>
                     <p>
                     Unlimited exclusive access to Business Analytics Data Lab, career resources, articles and Job portal</p>
                   </ul>
              </div>
              <div className='col-xs-12 col-md-2 header-price text-center'>
                <h4>Accreditations:</h4>
                <img src="https://d8fajseshwsed.cloudfront.net/images/accreditation/2-IABAC.png" alt=""  width="165" height="55" className='mb-5'/>
                <h5><FaRupeeSign></FaRupeeSign>50,000/</h5>
                <h2><FaRupeeSign></FaRupeeSign>39,900/-*</h2>
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
                     <Link to='/bac' className="page-routing breadcrumb-item text-dark">BUSINESS ANALYTICS CERTIFICATION TRAINING COURSES</Link>
                  </ol>
             </div>
           </div>
         </div>

         {/* BCA TRAINING FEATURES start */}

         <section className="pmp-training">
           <div className="container">
           <h5 className="mt-5 pb-1 pmp-heading">BUSINESS ANALYTICS TRAINING FEATURES</h5>
             <div className="row">
               <div className="col-xs-12 col-md-12 text-center">
                 <img src="https://skillogic.com/resource/images/courses/business-analytics-infographic.jpg" alt="" className='img-fluid'/>
               </div>
             </div>
           </div>
         </section>

         {/* PMP TRAINING FEATURES ends */}

        {/* PMP COST START*/}
          <section className="cost">
            <div className="container">
            <h5 className="mt-5 pb-4 pmp-heading">BUSINESS ANALYTICS CERTIFICATION TRAINING COURSES COST IN INDIA</h5>
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
                   <h5 className='text-dark'><FaRupeeSign></FaRupeeSign>50,000/</h5>
                   <h4 className='text-dark'><FaRupeeSign></FaRupeeSign>39,900/-</h4>
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
                   <h5><FaRupeeSign></FaRupeeSign>40,000/</h5>
                   <h4><FaRupeeSign></FaRupeeSign>28,990/-</h4>
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
                   <h5><FaRupeeSign></FaRupeeSign>56,000/</h5>
                   <h4><FaRupeeSign></FaRupeeSign>44,900/-</h4>
                   <p>*Available in selected cities</p>
                 </div>
                  </div>
              </div>
            </div>
          </section>
        {/* BAC COST ENDS*/}
           
       
       {/* bussiness analytics start*/}
       
       <section className="bac-bussiness">
       <div className="container">
       <h5 className="mt-5 pb-1 pmp-heading">BUSINESS ANALYTICS CERTIFICATION TRAINING COURSES</h5>
       <div className="row">
          {
            business.map(item =>
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
          <h4 className="mt-5 pb-4 pmp-heading">BUSINESS ANALYTICS COURSE HIGHLIGHTS</h4>
            <div className="row">
          
              {
                BACCOURSE.map(item => 
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
          <h3 className="mt-5 pb-4 pmp-heading">UPCOMING BUSINESS ANALYTICS ONLINE TRAINING SCHEDULES</h3>
          <div className="row">
            <div className="  designing">
              <div className="col-xs-1 col-md-1 pmp-dates">
               <h4>feb</h4>
               <div className='training-dates'>
               <p>12</p>
               <p>Sat</p>
               </div>
              </div>
              <div className="col-xs-5 col-md-4 pmp-certification">
                <h1>Business Analytics For Managers</h1>
                <p>Start Date: 12 Feb 2022 | 4 Days</p>
                <p> Time: 10:00 am - 1:00 pm IST</p>
              </div>
              <div className="col-xs-3 col-md-3 learning">
               <h1>Learning Mode:Online</h1>
              </div>
              <div className="col-xs-2 col-md-2 pmp-prices">
                 <h3>34,000 <FaRupeeSign></FaRupeeSign></h3>
                 <h1>24,900 <FaRupeeSign></FaRupeeSign> +GST</h1>
                 <h5>Valid till 12 feb 2022</h5>
              </div>
              <div className="col-xs-1 col-md-2">
               <button type="button" className="enguiry-btn">Enquire Now</button>
              </div>
            </div>
            <div className="designing ">
              <div className="col-xs-1 col-md-1 pmp-dates">
               <h4>Mar</h4>
               <div className='training-dates'>
               <p>12</p>
               <p>sat</p>
               </div>
              </div>
              <div className="col-xs-5 col-md-4 pmp-certification">
                <h1>Business Analytics For Managers</h1>
                <p>Start Date: 12 Mar 2022 | 4 Days</p>
                <p> Time: 10:00 am - 1:00 pm IST</p>
              </div>
              <div className="col-xs-3 col-md-3 learning">
               <h1>Learning Mode:Online</h1>
              </div>
              <div className="col-xs-2 col-md-2 pmp-prices">
                 <h3>34,000 <FaRupeeSign></FaRupeeSign></h3>
                 <h1>29,400 <FaRupeeSign></FaRupeeSign> +GST</h1>
                 <h5>Valid till 12 Mar 2022</h5>
              </div>
              <div className="col-xs-1 col-md-2">
               <button type="button" className="enguiry-btn">Enquire Now</button>
              </div>
            </div>
            <div className="designing ">
              <div className="col-xs-1 col-md-1 pmp-dates">
               <h4>Apr</h4>
               <div className='training-dates'>
               <p>09</p>
               <p>Sat</p>
               </div>
              </div>
              <div className="col-xs-5 col-md-4 pmp-certification">
                <h1>Business Analytics For Managers</h1>
                <p>Start Date: 09 Apr 2022 | 4 Days</p>
                <p> Time: 10:00 am - 1:00 pm IST</p>
              </div>
              <div className="col-xs-3 col-md-3 learning">
               <h1>Learning Mode:Online</h1>
              </div>
              <div className="col-xs-2 col-md-2 pmp-prices">
                 <h3>34,000 <FaRupeeSign></FaRupeeSign></h3>
                 <h1>29,400 <FaRupeeSign></FaRupeeSign> +GST</h1>
                 <h5>Valid till 09 Apr 2022</h5>
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
            <h5 className="mt-5 pmp-heading">BUSINESS ANALYTICS CERTIFIED TRAINING BY SKILLOGIC</h5>
            <ReactReadMoreReadLess
        charLimit={560}
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
          <h5 className="mt-5 pb-4 pmp-heading">ABOUT BUSINESS ANALYTICS TRAINING COURSES</h5>
            <div className="row">
              <div className="col-xs-12 col-md-12">
              <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-CourseOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-CourseOne" aria-expanded="false" aria-controls="flush-CourseOne">
      What is Business Analytics? 
      </button>
    </h2>
    <div id="flush-CourseOne" class="accordion-collapse collapse" aria-labelledby="flush-CourseOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Business Analytics is the technique by which businesses employ statistical methods and technologies for exploring and explicating historical data to acquire insights and improve strategic decision-making. </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      How useful is learning Business Analytics? 
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Business Analytics has become a dynamic tool in today’s marketplace.    Business Analytics aids in formulating informed business decisions. It helps bring agility to a business. Again, machines or technology by itself cannot make business decisions. You require human brains with proficient knowledge and skills to make things work in favour of your business. Business Analytics can be useful to;
      <ul>
      <li>Elevate operational efficiency</li>
      <li>Teach you quantity business values</li>
      <li>Make informed and smart decisions at your company</li>
      <li>Detailed insight via Data Visualization</li>
      </ul>
      
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      What are the prerequisites for learning Business Analytics courses? 
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Having prior knowledge of Business Analytics would allow you to maximise your grasping capability and heighten your learning experience. Also, basic computer skills, knowledge of python, MS Excel, understanding of mathematics and statistics and prominent communication skills adds value.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      Who is eligible for learning Business Analytics? 
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Those interested to dive into the field of Business Analytics and Data Science can most definitely join the course. To attend a postgraduate Business Analytics Course, the minimum requirement is 50% marks in any equivalent fields like Science or Computer Science from any recognized university. </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      How much fee should I remit for attending the Business Analytics course? 
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The fee would vary according to the level of training you are looking for. The training fee ranges from 430 USD to 570 USD.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
      What will be the job opportunities after learning Business Analytics Training? 
      </button>
    </h2>
    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Business analysts are in every industry, and their job titles can vary. Typical sectors include retail, healthcare, banking and finance, transportation, education, Human Resources and technology. After completing the Business Analytics course you could have a wide range of job opportunities right before you. Some of them are Business Analysts, Data Architect, Data Scientists, Data Analysts, Operations Research Analysts and Market Research Analysts to name a very few.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
      What are the basic skills required to learn Business Analytics? 
      </button>
    </h2>
    <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Technical skills like data analysis, statistical knowledge, data storytelling, analytical problem-solving capabilities, oral and written communication proficiency, creative outlook, basic software knowledge and skills would be advantageous for learning Business Analytics. Business intuition and strategic thinking are also considered important for data analysts that often partner with business stakeholders.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingEight">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
      What is the duration of the Business Analytics Course being held? 
      </button>
    </h2>
    <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The time frame for the Business Analytics course will vary from a period of 1 week to 5 months according to the subject level and syllabus designed for various branches under Business Analytics.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingNine">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
      Do I need to have strong programming skills to be a Business Analyst? 
      </button>
    </h2>
    <div id="flush-collapseNine" class="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Business analysts work progressively with data and coding and for that having a profound understanding of key programming languages is cardinal. With that being said they ought to understand the significance of linguistics skills and also communication skills. </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTen">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
      What is the difference between Business Analytics and Data Analytics? 
      </button>
    </h2>
    <div id="flush-collapseTen" class="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Business Analytics involves analysing datasets to uncover trends and insights that are subsequently used to make informed organizational decisions. Business analytics is focused on analysing various types of information to make practical, data-driven business decisions, and implementing changes based on those decisions.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingElven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseElven" aria-expanded="false" aria-controls="flush-collapseElven">
      What are the tools used for Business Analytics? 
      </button>
    </h2>
    <div id="flush-collapseElven" class="accordion-collapse collapse" aria-labelledby="flush-headingElven" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Some of the prominent Business Analytics tools are Tableau, Sisense, QlikView, Domo, BusinessObjects, SAS, Dundas BI, Splunk, KNIME, MicroStrategy, Tibco, Heap Analytics, Alteryx, MixPanel and Google Analytics.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwl">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwl" aria-expanded="false" aria-controls="flush-collapseTwl">
      What is the scope of Business Analytics? 
      </button>
    </h2>
    <div id="flush-collapseTwl" class="accordion-collapse collapse" aria-labelledby="flush-headingTwl" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Following the International Data Corporation (IDC), the worldwide revenues for Big Data and Business Analytics (BDA) solutions shall hit $260 billion in 2022 with a compound annual growth rate (CAGR) of 11.9 per cent from 2017 to 2022.  Now, businesses, regardless of their size, make use of analytics tools to determine how data can be controlled to solve problems and increase efficiency and revenue. The demand for Business Analytics is striking, and the supply of people who can truly do this job well is so limited, Business Analysts secure huge salaries and excellent perks, even at the entry-level.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThrit">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThrit" aria-expanded="false" aria-controls="flush-collapseThrit">
      Can a fresher pursue a Business Analytics course and get employed? 
      </button>
    </h2>
    <div id="flush-collapseThrit" class="accordion-collapse collapse" aria-labelledby="flush-headingThrit" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Yes, companies do hire freshers for Business Analyst positions. In fact, most of the entry-level analytics jobs in India don’t need any specialization or post-graduation. The one qualification you need in many companies is an Engineering Degree and even the stream doesn’t count. These companies only look for your Aptitude, communication skills and critical reasoning. </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headinghFourth">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourth" aria-expanded="false" aria-controls="flush-collapseFourth">
      What is the Best Training Institute in India for Business Analytics? 
      </button>
    </h2>
    <div id="flush-collapseFourth" class="accordion-collapse collapse" aria-labelledby="flush-headingFourth" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      SKILLOGIC is the best training institute to go for if you are considering Business Analytics training in India. At SKILLOGIC you will be trained on Business Analytics concepts, tools and hands-on experience with actual tools.
      </div>
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
       <h5 className="mt-5 pb-4 pmp-heading">FAQ’S RELATED TO BUSINESS ANALYTICS COURSES</h5>
         <div className="row">
           <div className="col-xs-12 col-md-12">
           <div class="accordion accordion-flush" id="accordionFlushExample">
           <div class="accordion-item">
<h2 class="accordion-header" id="flush-headingA">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseA" aria-expanded="false" aria-controls="flush-collapseA">
  Who can take a Business Analytics course from SKILLOGIC? 
  </button>
</h2>
<div id="flush-collapseA" class="accordion-collapse collapse" aria-labelledby="flush-headingA" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">If you are looking forward to shifting from an IT profile to a business profile then following a career as a Business Analyst will be the brightest option for you. With potential coding and IT skills, you will have a good scope of excelling in this field. </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingB">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseB" aria-expanded="false" aria-controls="flush-collapseB">
  Why should I learn Business Analytics courses from SKILLOGIC? 
  </button>
</h2>
<div id="flush-collapseB" class="accordion-collapse collapse" aria-labelledby="flush-headingB" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">
  <ul>
  <li>SKILLOGIC® is one of the leading institutes for professional certifications training specialized in best practice certifications in the domains of business analytics, project management, IT service management and quality management.</li>
  <li>We provide training services to individuals with tailored programs from beginners to working professionals and to corporations with customized training propositions to align with their learning goals.</li>
  <li>Our case study based training includes real-world projects and highly valuable case studies. </li>
  <li>After the training, you will receive IABAC Business Analytics Certification which is a global certification.</li>
  </ul>
  </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingC">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseC" aria-expanded="false" aria-controls="flush-collapseC">
  How much do I have to pay to receive a Business Analytics course from SKILLOGIC? 
  </button>
</h2>
<div id="flush-collapseC" class="accordion-collapse collapse" aria-labelledby="flush-headingC" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">
  At SKILLOGIC the fee for the Business Analytics program will be approximately 591.72 USD.
  </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingD">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseD" aria-expanded="false" aria-controls="flush-collapseD">
  What will be the duration of the SKILLOGIC Business Analytics course? 
  </button>
</h2>
<div id="flush-collapseD" class="accordion-collapse collapse" aria-labelledby="flush-headingD" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">At SKILLOGIC you will have training for 2 hours for 6 days in case of online training and 2 full days in case of classroom training.</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingE">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseE" aria-expanded="false" aria-controls="flush-collapseE">
  Will SKILLOGIC provide classroom training? 
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
  <div class="accordion-body">We are adamant in providing you with instructors who are certified and highly qualified with decades of experience in the industry and well versed in the subject matter. </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingH">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseH" aria-expanded="false" aria-controls="flush-collapseH">
  What are the different modes of training available at SKILLOGIC? 
  </button>
</h2>
<div id="flush-collapseH" class="accordion-collapse collapse" aria-labelledby="flush-headingH" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">We provide you with flexible learning options from Live Online, self-study method to Classroom training. You can choose the one preferable to you. We recommend you to take Business Analytics Course Online.</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingI">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseI" aria-expanded="false" aria-controls="flush-collapseI">
  Will I receive certifications after completing Business Analytics training from SKILLOGIC? 
  </button>
</h2>
<div id="flush-collapseI" class="accordion-collapse collapse" aria-labelledby="flush-headingI" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">SKILLOGIC is accredited by IABAC. We will issue you with IABAC® certification that would provide global recognition of the relevant skills.</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingF">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseF" aria-expanded="false" aria-controls="flush-collapseF">
  Will SKILLOGIC provide me with a course completion certificate? 
  </button>
</h2>
<div id="flush-collapseF" class="accordion-collapse collapse" aria-labelledby="flush-headingF" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">Definitely, after the completion of your course, we will issue you with a Business Analytics Course Completion Certificate. </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingJ">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseJ" aria-expanded="false" aria-controls="flush-collapseJ">
  Are there any documents I need to carry to the training session? 
  </button>
</h2>
<div id="flush-collapseJ" class="accordion-collapse collapse" aria-labelledby="flush-headingJ" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">Yes. Photo ID Proof such as a National ID card, Driving License etc are required for issuing a Participation Certificate and booking certification exam as required.</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingK">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseK" aria-expanded="false" aria-controls="flush-collapseK">
  What if I miss a Business Analytics class or session at SKILLOGIC? 
  </button>
</h2>
<div id="flush-collapseK" class="accordion-collapse collapse" aria-labelledby="flush-headingK" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">You needn’t worry about that. Just contact your trainers regarding the same and fix a class according to your schedule. In the case of online training, every session will be recorded and uploaded so that you can easily learn whatever you missed at your own pace and comfort.
  </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingL">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseL" aria-expanded="false" aria-controls="flush-collapseL">
  What is FLEXI-PASS?  
  </button>
</h2>
<div id="flush-collapseL" class="accordion-collapse collapse" aria-labelledby="flush-headingL" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">Our Flexi-Pass for Business Analytics Course Training will allow you to attend sessions from SKILLOGIC for 6 months concerning any queries or revisions you would like to clear.</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingX">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseX" aria-expanded="false" aria-controls="flush-collapseX">
  Will I receive a demo class before paying the fees? 
  </button>
</h2>
<div id="flush-collapseX" class="accordion-collapse collapse" aria-labelledby="flush-headingX" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body"> Yes, you shall be provided with a free demo class to give a brief idea of how the training will be done and what the training will cover. </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingM">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseM" aria-expanded="false" aria-controls="flush-collapseM">
  How does SKILLOGIC provide training for Business Analytics Courses? 
  </button>
</h2>
<div id="flush-collapseM" class="accordion-collapse collapse" aria-labelledby="flush-headingM" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">
  SKILLOGIC provides a three-phase learning method. In Phase 1, candidates would be provided with self-study videos and books to help them gain ample information about the course. Phase 2 is the primary stage of Intensive live online training and after the training, you will receive IABAC Business Analytics Certification which is a global certification. And in the third phase, we will issue projects and placements.
  </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingN">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseN" aria-expanded="false" aria-controls="flush-collapseN">
  Can I switch to a support session if I need a better understanding of the topic? 
  </button>
</h2>
<div id="flush-collapseN" class="accordion-collapse collapse" aria-labelledby="flush-headingN" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">Yes for sure, you must make the most out of your training sessions. You surely can ask for support sessions if you need any further clarifications.</div>
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
             <h3 className='pmp-heading'>WHY SKILLOGIC FOR BUSINESS ANALYTICS TRAINING</h3>
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
           <h4 className='pmp-heading'>BUSINESS ANALYTICS TRAINING CITIES IN INDIA</h4>
             <div className="row ">
              {
                BACLOCATIONS.map(item =>
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
                BACTRENDING.map(item =>
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

export default BAC;

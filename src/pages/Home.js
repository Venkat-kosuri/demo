import React,{useState}from 'react'
import { FaExternalLinkAlt,FaRupeeSign } from 'react-icons/fa';
import {BsFillStarFill} from 'react-icons/bs'
import { IoIosCall,IoLogoWhatsapp } from 'react-icons/io';
import { AiOutlineMail,AiOutlineSearch } from 'react-icons/ai';
import {courses,skilllogic,Branches,footer,countries} from './Data'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Link} from 'react-router-dom';



const Home = () => {

  const [show,setshow] = useState(false);
   
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
        <nav className="navbar navbar-expand-lg navbar-light  p-x-10" >
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
            <ol class="breadcrumb">
              <li className="nav-item">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              </li>
              <li className="nav-item">
              <li class="breadcrumb-item"><a href="#">Courses</a></li>
              </li>
              <li className="nav-item">
              <li class="breadcrumb-item"><a href="#">Reviews</a></li>
              </li>
              <li className="nav-item">
              <li class="breadcrumb-item"><a href="#">Blog</a></li>
              </li>
              <li className="nav-item">
              <li class="breadcrumb-item"><a href="#">Corporate</a></li>
              </li>
              </ol>
            </form>
          </div>
        </div>
      </nav>
        </div>
        </div>

         {/* navbar end */}
        
          {/* header start */}

          <div className='hero' style={{ backgroundImage: "url(" + "https://skillogic.com/resource/images/bg3.jpg" + ")",}}>
            <div className="container text-center">
              <div className="row">
              <div className="col-xs-12 col-md-12 ">
                <h1>Upskill. Get Certified. Get Ahead.</h1>
                 <h2>Adapt skills of the new age. Accelerate your career.</h2>
                <form className="d-flex justify-content-center ">
                 <input type="text" className=" col-xs-7 col-md-4 hello" placeholder='what do you want to pursue ..?' />
                 <button type="button" class="btn btn-danger">Search</button>
                </form>
                  <div className="hero-header">
                  <ol class="breadcrumb text-center">
                     <Link to='/pmp' className="hero-links breadcrumb-item ">PMP®</Link>
                     <Link to='/prince' className="hero-links breadcrumb-item ">PRINCE2®</Link>
                     <Link to='/bac'  className="hero-links breadcrumb-item">BUSINESS ANALYTICS</Link>
                     <Link to='/itil'  className="hero-links breadcrumb-item">ITIL®</Link>
                     <Link to='/itil'  className="hero-links breadcrumb-item">SIX SIGMA</Link>
                     <Link to='/itil'  className="hero-links breadcrumb-item">DEVOPS</Link>
                  </ol>
                     </div>
              </div>
              </div>
            </div>
          </div>

           {/* header ends */}

            {/* content start */}
             <div className="content" >
               <div className="container text-center">
                 <div className="row">
                   <div className="col-xs-12 col-md-12">
                    <h4>25+ Accreditations With High Global Reputation</h4>
                    <img className=' img-responsive technology' src="/images/skl_accreditations2.jpg" alt="" />
                   </div>
                 </div>
               </div>
             </div>

            <div className="bussiness" style={{ backgroundImage: "url(" + "https://skillogic.com/resource/images/iot-wrapper.jpg" + ")",}}>
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <h4>PMP® in First Attempt</h4>
                    <p>Explore our new PMP Certification Training</p>
                    <button className="view">view more</button>
                  </div>
                  <div className="col-xs-12 col-md-6">
                  <h4>Business Analytics for Managers</h4>
                  <p>Explore our new Business Analytics Certification Training</p>
                  <button className='view'>view more</button>
                  </div>
                </div>
              </div>
            </div>

             {/* contents ends */}
    
           {/* courses start */}
            <div className="courses">
            <div class='container text-center'>      
           <div className="row title" style={{marginBottom: "20px"}} >           
          <h3>POPULAR COURSES</h3> 
          <center>
             <p className='head-line'></p>
             </center>  
           </div>  
       </div>  
              <div className="container">
                <div className="row">
                {
                   courses.map( item => (  
                          <div className=" col-lg-3 col-xs-12 col-md-3 col-sm-6 mt-4" key={item.id}>
                            <div className="card">
                              <img src={item.image} className="card-img-top" alt="..." />
                              <div className="card-body">
                                <h1 className="card-title">{item.heading}</h1>
                                <h5>{item.pmp}</h5>
                                <h5>{item.pmi}</h5>
                                <h5>{item.rate}</h5>
                                <h5>{item.pass}</h5>
                                <h5>{item.hours}</h5>
                                <p style={{display: 'flex'}}>{item.hello} {item.hello}{item.hello}{item.hello}{item.hello}
                                <p>{item.price}</p> </p>
                                
                              </div>
                            </div>
                          </div>
                      
                   ))
                 }
                </div>
              </div>
            </div>
          
             {/* courses ends */}
             <div className="trending">
          <div class='container text-center'> 
           <div className="row title" style={{marginBottom: "20px"}} > 
           <h4>TRENDING COURSES</h4> 
           <center>
             <p className='head-line'></p>
             </center>           
         
           </div>      
          
       </div>  
       <div class='container' >            
        <OwlCarousel {...options}  
          className="owl-theme"  
         >  
          <div class="card" style={{width:'15rem', height:'20rem'}}>
         <img src={'https://d8fajseshwsed.cloudfront.net/images/new/courses/PMP.jpg'} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="courses-title"> PMP CERTIFICATION TRAINING</h5>
    <p class="courses-heading"><FaRupeeSign></FaRupeeSign> 23,000</p>
    <h2 class="courses-headin"><FaRupeeSign></FaRupeeSign> 14,900</h2>
  </div>
</div>
<div class="card" style={{width:'15rem', height:'20rem'}}>
         <img src={'https://d8fajseshwsed.cloudfront.net/images/new/courses/PRINCE2.jpg'} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="courses-title"> PRINCE2 CERTIFICATION TRAINING</h5>
    <p class="courses-heading"><FaRupeeSign></FaRupeeSign> 56,000</p>
    <h2 class="courses-headin"><FaRupeeSign></FaRupeeSign> 44,900</h2>
  </div>
</div>
<div class="card" style={{width:'15rem',height:'20rem'}}>
         <img src={'https://d8fajseshwsed.cloudfront.net/images/new/courses/BA-FOR-MANAGERS.jpg'} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="courses-title"> BUSINESS ANALYTICS FOR MANAGERS CERTIFICATION COURSE</h5>
    <p class="courses-heading"><FaRupeeSign></FaRupeeSign> 34,000</p>
    <h2 class="courses-headin"><FaRupeeSign></FaRupeeSign> 24,900</h2>
  </div>
</div>
<div class="card" style={{width:'15rem',height:'20rem'}}>
         <img src={'https://d8fajseshwsed.cloudfront.net/images/new/courses/ITIL-FOUNDATION.jpg'} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="courses-title"> ITIL FOUNDATION CERTIFICATION TRAINING</h5>
    <p class="courses-heading"><FaRupeeSign></FaRupeeSign> 28,000</p>
    <h2 class="courses-headin"><FaRupeeSign></FaRupeeSign> 19,900</h2>
  </div>
</div>
<div class="card" style={{width:'15rem',height:'20rem'}}>
         <img src={'https://d8fajseshwsed.cloudfront.net/images/new/courses/DEVEOPS-MASTER.jpg'} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="courses-title"> DEVOPS MASTER CERTIFICATION TRAINING</h5>
    <p class="courses-heading"><FaRupeeSign></FaRupeeSign> 32,000</p>
    <h2 class="courses-headin"><FaRupeeSign></FaRupeeSign> 25,900</h2>
  </div>
</div>
<div class="card" style={{width:'15rem',height:'20rem'}}>
         <img src={'https://d8fajseshwsed.cloudfront.net/images/new/courses/PRINCE2-AGILE.jpg'} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="courses-title"> PRINCE2 AGILE CERTIFICATION TRAINING</h5>
    <p class="courses-heading"><FaRupeeSign></FaRupeeSign> 44,900</p>
    <h2></h2>
  </div>
</div>
<div class="card" style={{width:'15rem',height:'20rem'}}>
         <img src={'https://d8fajseshwsed.cloudfront.net/images/new/courses/CAPM.jpg'} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="courses-title"> CAPM® CERTIFICATION TRAINING</h5>
    <p class="courses-heading"><FaRupeeSign></FaRupeeSign> 14,900</p>
  </div>
</div>
      </OwlCarousel>  
      </div>  
      </div>


          {/*trending start */}
          <div className="trending">
          <div class='container text-center'> 
           <div className="row title" style={{marginBottom: "20px"}} >             
          <h4> COURSES IN BANGALORE</h4>
          <center>
             <p className='head-line'></p>
             </center>  
           </div>      
          
       </div>  
       <div class='container' >            
        <OwlCarousel {...options}  
          className="owl-theme"  
         >  
         <div class="card" style={{width:'15rem', height:'20rem'}}>
         <img src={'https://d8fajseshwsed.cloudfront.net/images/new/courses/PRINCE2.jpg'} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="courses-title"> PRINCE2 CERTIFICATION TRAINING IN BANGALORE</h5>
    <p class="courses-heading"><FaRupeeSign></FaRupeeSign> 62,000</p>
    <h2 class="courses-headin"><FaRupeeSign></FaRupeeSign> 49,900</h2>
  </div>
</div>
          <div class="card" style={{width:'15rem', height:'20rem'}}>
         <img src={'https://d8fajseshwsed.cloudfront.net/images/new/courses/PMP.jpg'} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="courses-title">PMP® CERTIFICATION TRAINING IN BANGALORE</h5>
    <p class="courses-heading"><FaRupeeSign></FaRupeeSign>  26,000</p>
    <h2 class="courses-headin"><FaRupeeSign></FaRupeeSign> 20,900</h2>
  </div>
</div>
<div class="card" style={{width:'15rem',height:'20rem'}}>
         <img src={'https://d8fajseshwsed.cloudfront.net/images/new/courses/SIX-SIGMA-GREEN-BELT.jpg'} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="courses-title"> LEAN SIX SIGMA TRAINING IN BANGALORE</h5>
    <p class="courses-heading"><FaRupeeSign></FaRupeeSign> 24,600</p>
    <h2 class="courses-headin"><FaRupeeSign></FaRupeeSign> 19,900</h2>
  </div>
</div>
<div class="card" style={{width:'15rem',height:'20rem'}}>
         <img src={'https://d8fajseshwsed.cloudfront.net/images/new/courses/BA-cat.jpg'} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="courses-title">BUSINESS ANALYTICS CERTIFICATION IN BANGALORE</h5>
    <p class="courses-heading"><FaRupeeSign></FaRupeeSign> 56,000</p>
    <h2 class="courses-headin"><FaRupeeSign></FaRupeeSign> 44,900</h2>
  </div>
</div>
<div class="card" style={{width:'15rem',height:'20rem'}}>
         <img src={'https://d8fajseshwsed.cloudfront.net/images/new/courses/ITIL-cat.jpg'} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="courses-title"> ITIL CERTIFICATION TRAINING IN BANGALORE</h5>
    <p class="courses-heading"><FaRupeeSign></FaRupeeSign> 36,000</p>
    <h2 class="courses-headin"><FaRupeeSign></FaRupeeSign> 28,900</h2>
  </div>
</div>

      </OwlCarousel>  
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
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/Sayyad_Mazdoor.jpg'} className='our-reviews' alt="..."/>
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
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/Venkataprashanth_Ganga.jpg'} className='our-reviews' alt="..."/>
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
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/Ajith_Kottamasu.jpg'} className='our-reviews' alt="..."/>
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
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/KVA_Sridhar.jpg'} className='our-reviews' alt="..."/>
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
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/Ashish_Khatri.jpg'} className='our-reviews' alt="..."/>
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
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/Swarna_PMP.jpg'} className='our-reviews' alt="..."/>
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
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/skillogic-review-avatar.jpg'} className='our-reviews'  alt="..."/>
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
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/Aishwarya_parthasarathy.jpg'} className='our-reviews' alt="..."/>
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
  <img src={'https://d8fajseshwsed.cloudfront.net/images/new/reviews/Pankaja_Thimmaiah.jpg'} className='our-reviews' alt="..."/>
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
      
     <div className="valid">
       <div className="container">
         <div className="row">
           <div className="col-xs-12 col-md-6">
            <h5>5% Discount For Group Of 3 Candidates</h5>
           </div>
           <div className="col-xs-12 col-md-6">
            <div className="form-group d-flex col-md-8 ">
            <h5>Validate</h5>
           <input type="text" className="form-control " placeholder="Certificate No" />
            <p className="icon"><AiOutlineSearch/></p>
           </div>
           </div>
         </div>
       </div>
     </div>
         
         {/* skilllogic content start */}

           <div className="skilllogic">
             <div className="container">
             <div className="row title" style={{marginBottom: "20px"}} >      
           <div class="text-center">      
           <h3 className='text-center'>WHY SKILLOGIC</h3>
         <center>
             <p className='head-line'></p>
             </center>  
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

         {/* skilllogic content end */}
        
        {/* corporate clients */}
         <div className="corporate">
           <div className="container">
           <div className="row title" style={{marginBottom: "20px"}} >      
           <div class="text-center">      
           <h1 className='text-center'>OUR TOP CORPORATE CLIENTS</h1>
         <center>
             <p className='head-line'></p>
             </center>  
           </div>      
           </div>  
             <div className="row">
               <div className="col-xs-12 col-md-6">
               <img src={"https://skillogic.com/resource/images/corporate-logos.jpg"} alt="" style={{width:'100%'}} className='img-responsive tesco mt-3' />
               </div>
               <div className="col-xs-12 col-md-6 corporate-right">
                   <ul>
                     <li>Deep experience</li>
                     <p>More than a decade of experience in serving top corporates with their learning requirements</p>
                   </ul>
                   <ul>
                     <li>Best Quality</li>
                     <p>Largest pool of the best in industry-certified trainers with years of corporate training experience</p>
                   </ul>
                   <ul>
                     <li>Flexible & Customized</li>
                     <p>
                    Training is customized to individual teams, based on the specific requirements, attendees and culture</p>
                   </ul><ul>
                     <li>Priority Customer Service</li>
                     <p>
                    Corporate clients get top class customer service with dedicated account managers</p>
                   </ul>
                   <button className="join-us">JOIN US </button>
                  
             </div>
             </div>
           </div>
         </div>
        {/* corporate ends */}
    
        {/* our branches start */}
        <div className="branches">
          <div className="container">
          <h4>SKILLLOGIC TRAINING LOCATIONS IN INDIA </h4>
            <div className="row">
              
                  {
                    Branches.map(branch =>
                      <div className="col-xs-12 col-md-1" key={branch.id}>
                         <a href="#"> {branch.areas}</a>
                            

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
}

export default Home

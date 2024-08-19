import img2 from '../assets/img2.png';
import React from 'react';
import './css/navbar.css';

const Navbar = () => {
  return (
    <div className= "leftNav">
        
        <div className='logolinkdiv'>
        <a href='/' className="logolink">
            <div  className='toplogo'>

                <div>
                    <img src={img2} alt=""/>
                </div>

                <div className='logoname'>
                    <h1>BITS-SIS</h1>
                    <h3>@registrar</h3>
                </div>

            </div>
        </a></div>

        <div className="leftnavbox">

                    <div style={{display:"flex",flexDirection:"column",gap:"3px"}}>
                        <h3 id="title">Calender Management</h3>
                        {/* <button className="buttons" href="/Academic">Academic Time Line</button> */}
                        <a className="buttons" href="/Academic">Academic Time Line</a>
                    </div><br/>
                    <div style={{display:"flex",flexDirection:"column",gap:"3px"}}>
                        <h3 id="title">Student Records</h3>
                        <a className="buttons" href="/StudentGrade">Student Grades</a>
                        <a className="buttons" href="/CourseEligibility">Course Eligbility</a>
                        <a className="buttons" href="/StudentPromotion">Student Promotion</a>
                    </div><br/>

                    <div style={{display:"flex",flexDirection:"column",gap:"3px"}}>
                        <h3 id="title">Student Financial Records</h3>
                        <a className="buttons" href='/CourseHour'>Credit Hour Rate</a>
                        <a className="buttons">Payment Information</a>
                    </div><br/>
                    
        </div>

        <div className='logoutclass'>
            <a className='logout' href='/logout'>Logout</a>
        </div>
    </div>
  );
};

export default Navbar;

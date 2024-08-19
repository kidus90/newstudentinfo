import React from 'react'
import Navbar from '../components/navbar.jsx';
import Header from '../components/Header.jsx';
import './css/Desktop3.css'
import imgs8 from '../assets/img1.1.jpg';
import lk1 from '../assets/plus.png';
import lk2 from '../assets/edit.png';
import lk3 from '../assets/delete.png';

function Desktop3() {
  return (
    <>
    <div style={{display:"flex",flexDirection:"row",backgroundColor:"#ecedeb", width:"100%",justifyContent:"space-between"}}>
        <div style={{width:"20%"}}>
          <Navbar />
        </div>
          
        <div style={{display:"flex",flexDirection:"column",width:"79%",marginTop:"10px",gap:"20px"}}>
            
            <div >
              <Header />
            </div>

            <div className='content'>
{/* Start writing your code here */}


<div>
            
            <h1 style={{fontSize:"20px",marginLeft:"40px"}}>Financial Report for 2023</h1>
           
           
            <div style={{display:"flex",flexDirection:"row",border:"solid lightgreen",borderBlockEndWidth:"10px",width:"750px",height:"85px",marginLeft:"40px"}}>
                <div >
                     <p style={{marginLeft:"15px"}}>Active users</p>
                     
                     <div style={{flexDirection:"row",display:"flex", marginTop:"-5px"}}>
                        <h1 style={{marginLeft:"15px",marginTop:"-1px"}}>235 </h1>
                        <h1 style={{marginLeft:"5px",marginTop:"10px" , fontSize:"18px"}}>Total Users</h1>
                     </div>
                </div>

                <div style={{marginLeft:"100px"}}>
                    <p style={{marginLeft:"50px"}}>Undergraduate</p>
        
                    <div style={{flexDirection:"row",display:"flex", marginTop:"-5px"}}>
                        <h1 style={{marginLeft:"50px",marginTop:"-1px"}}>180 </h1>
                        <h1 style={{marginLeft:"5px",marginTop:"10px" , fontSize:"18px"}}>Total Users</h1>
                    </div>

                </div>

                <div style={{marginLeft:"100px"}}>
                      <p style={{marginLeft:"50px"}}>Post Graduate</p>
                
                     <div style={{flexDirection:"row",display:"flex", marginTop:"-5px"}}>
                         <h1 style={{marginLeft:"50px",marginTop:"-1px"}}>55 </h1>
                         <h1 style={{marginLeft:"5px",marginTop:"10px" , fontSize:"18px"}}>Total Users</h1>
                     </div>
                </div>

            </div>

            <div style={{display:"flex",flexDirection:"row"}}>
                <div style={{border:"solid lightgreen",borderBlockEndWidth:"10px",marginLeft:"40px",height:"85px",marginTop:"10px",width:"190px"}}>
                    <p style={{marginLeft:"15px"}}>Full Installment Complete</p>
                    <div style={{flexDirection:"row",display:"flex",gap:"10px"}}>
                        <h1 style={{marginLeft:"15px",marginTop:"-10px"}}>105 </h1>
                        <h1 style={{marginLeft:"5px",marginTop:"-3px" , fontSize:"18px"}}>Total Users</h1>
                    </div>
                </div>

                <div style={{marginLeft:"100px",border:"solid lightgreen",borderBlockEndWidth:"10px",marginLeft:"80px",height:"85px",marginTop:"10px",width:"190px"}}>
                    <p style={{marginLeft:"15px"}}>First Installment Complete</p>
                    <div style={{flexDirection:"row",display:"flex",gap:"8px"}}>
                     <h1 style={{marginLeft:"15px",marginTop:"-10px"}}>95 </h1>
                     <h1 style={{marginLeft:"5px",marginTop:"-3px" , fontSize:"18px"}}>Total Users</h1>
                     </div>

                </div>
                

                <div style={{marginLeft:"100px",border:"solid red",borderBlockEndWidth:"10px",marginLeft:"80px",height:"85px",marginTop:"10px",width:"190px"}}>
                    <p style={{marginLeft:"15px"}}>Incomplete Payment</p>
                    <div style={{flexDirection:"row",display:"flex"}}>
                     <h1 style={{marginLeft:"15px",marginTop:"-10px"}}>35 </h1>
                     <h1 style={{marginLeft:"5px",marginTop:"-3px" , fontSize:"18px"}}>Total Users</h1>
                     </div>

                </div>
                
            </div>
            
            <div style={{width:"100vh",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <div >
                <h1 style={{fontSize:"20px",marginLeft:"50px"}}>Recent Actions</h1>
                <div style={{marginLeft:"50px"}}>
                    <h1 style={{fontSize:"15px"}}><img src={lk1} alt="" style={{width:"20PX"}}/>Uploaded student grades for 2023 semester 1</h1>
                    <p style={{marginTop:"-13px",marginLeft:"20px"}}>Thu, 28,2023</p>
                </div>
                <div style={{marginLeft:"50px"}}>
                    <h1 style={{fontSize:"15px"}}><img src={lk1} alt="" style={{width:"20PX"}}/>Uploaded student grades for 2022 semester 2</h1>
                    <p style={{marginTop:"-13px",marginLeft:"20px"}}>Thu, 25,2023</p>
                </div>
                <div style={{marginLeft:"50px"}}>
                    <h1 style={{fontSize:"15px"}}><img src={lk2} alt="" style={{width:"20PX"}}/>Edited student grade for UGR/SWE/0001/21</h1>
                    <p style={{marginTop:"-13px",marginLeft:"20px"}}>Thu, 23,2023</p>
                </div>
                <div style={{marginLeft:"50px"}}>
                    <h1 style={{fontSize:"15px"}}><img src={lk1} alt="" style={{width:"20PX"}}/>Added student grade for UGR/SWE/0001/21</h1>
                    <p style={{marginTop:"-13px",marginLeft:"20px"}}>Thu, 23,2023</p>
                </div>
                <div style={{marginLeft:"50px"}}>
                    <h1 style={{fontSize:"15px"}}><img src={lk3} alt="" style={{width:"20PX"}}/>Deleted student gradefor UGR/SWE/0001/21</h1>
                    <p style={{marginTop:"-13px",marginLeft:"20px"}}>Thu, 22,2023</p>
                </div>
            </div>
<div style={{marginTop:"-250px",marginRight:"-490px"}} ><img src={imgs8} alt="" style={{width:"400PX", alignItems:"right",borderTopLeftRadius:"365px"}}/></div>
            </div>
            <div style={{display:'flex',flexDirection:"row"}}>
            <hr style={{backgroundColor:"green",height:"1px",width:"130px",marginLeft:"50px",marginTop:"-145px",border:"none"}}/>
            <a href="/" style={{marginRight:"870px",marginTop:"-155px"}}>SHOW MORE</a></div>
            <hr style={{backgroundColor:"green",height:"1px",width:"130px",marginLeft:"330px",marginTop:"-145px",border:"none"}}/>
        </div>



{/* End writing your code here */}
            </div>

        </div>
    </div>
    </>
  )
}

export default Desktop3

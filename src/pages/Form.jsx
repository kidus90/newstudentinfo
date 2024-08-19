import { useState } from "react"
import React, {useEffect} from "react";
import imgs from '../assets/img1.jpg';
import imgs2 from '../assets/img2.png';
import imgs3 from '../assets/Group 109.png';
import imgs4 from '../assets/Group 110.png';


function Form() {
    useEffect(()=>{
        fetch('http://localhost:8081/login')
        .then(res=>res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
      }, [])
    return (
        <>
        <div style={{justifyContentify : "space-evenly"}}>
            <div className="input" style={{display:"flex", flexDirection:"row" ,justifyContentify : "center", alignItems:"center"
            }}>
                
            <div className="img">
                <img src={imgs} alt="" style={{width:"60%"}}/>

            </div>
                
               
                <div className="email " style={{width:"40" ,display:"flex",flexDirection:"column",gap:"7px"}}>
                    
                    <div style={{display:"flex", gap:"10px"}}>
                        <div>
                             <img src={imgs2} alt="" style={{width:"60PX"}}/>
                        </div>
                        <div style={{fontSize:"20px"}}>
                            <label> BITS <label style={{color:"green"}}>STUDENT INFORMATION</label> <br/><label style={{color:"green"}}>MANAGMENT</label> SYSTEM </label><br/>
                        </div>
                    </div>

                    <div style={{display:"flex",justifyContent:"space-between", width:"100%"}}>
                        <input type="text"  placeholder="Email" style={{width:"87%", fontSize:"20px"}}/>
                        <img src={imgs4} alt="" style={{width:"30PX"}}/>
                        
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between", width:"100%"}}>
                        <input type="text"  placeholder="password" style={{width:"87%",fontSize:"20px"}}/>
                        <img src={imgs3} alt="" style={{width:"30PX"}}/>

                    </div>
                    <a href="/" style={{display:"flex", padding:"8px", borderRadius:"5px", backgroundColor:"#84dd63", color:"white", justifyContent:"center",border:"none",textDecoration:"none"}}> Login</a>
                    <button style={{display:"flex", padding:"8px", borderRadius:"5px", backgroundColor:"#6baa75",color:"white", justifyContent:"center",border:"none"}}> Help & Support</button>
                </div>
            

                </div>
            </div>
        </>
    );
}
    export default Form

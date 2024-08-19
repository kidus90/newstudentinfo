import React from 'react'
import Navbar from '../components/navbar.jsx';
import Header from '../components/Header.jsx';
import './css/Desktop3.css'

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

                <div style={{display:"flex",flexDirection:"row",justifyContent:'space-between'}}>
                    <h2>Academic Time Line</h2>
                    <button style={{backgroundColor:"#84DD63", color:"white",fontSize:"13px",height:"40px" ,width:"120px", border:"none",textAlign:"left", padding:"10px", borderRadius:"10px",margin:"20px"}}>Create Time Line</button>
                </div>

                <div className="panelLists" style={{display:'flex',justifyContent:"left",marginLeft:"30px"}}>

        {/* first list column start*/}
        <div className='firstColumn'>
            <div id="list">
                <select id="selectlist">
                    <option value="Year2023">2023</option>
                    <option value="Year2022">2022</option>
                    <option value="Year2021">2021</option>
                </select>
            </div>

            <div id="list">
                <select id="selectlist">
                    <option value="SemesterOne" >Semester One</option>
                    <option value="Semestertwo">Semester Two</option>
                </select>
            </div>

            <div id="list">
                <select id="selectlist">
                    <option value="undergraduate" >Undergraduate</option>
                    <option value="PostGraduate">Post Graduate</option>
                    <option value="Phd">Phd</option>
                </select>
            </div>

            <div id="list">
                <select id="selectlist">
                    <option value="Regular" >Regular</option>
                    <option value="Extenstion">Extenstion</option>
                    <option value="Summer">Summer</option>
                </select>
            </div>

            <div id="list">
                <select id="selectlist">
                    <option value="LevelOne" >Level One</option>
                    <option value="LevelTwo">Level Two</option>
                    <option value="Levelthere">Level Three</option>
                </select>
            </div>
            <div style={{display:"flex", flexDirection:"row",gap:"10px"}}>
                <button style={{backgroundColor:"#84DD63", color:"white",fontSize:"20px", width:"60%", border:"none",textAlign:"left", padding:"9px", borderRadius:"6px"}}>Filter</button>
                <button style={{backgroundColor:"red", color:"white",fontSize:"20px", width:"40%", border:"none",textAlign:"left", padding:"9px",borderRadius:"6px"}}>Clear</button>
            </div>

        </div>{/* first column ends*/}
            
    </div>

{/* End writing your code here */}
            </div>

        </div>
    </div>
    </>
  )
}

export default Desktop3

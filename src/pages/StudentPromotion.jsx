import React from 'react'
import Navbar from '../components/navbar.jsx';
import Header from '../components/Header.jsx';
import './css/Desktop17.css'

function Desktop17() {
return (
    <>
    <div style={{display:"flex",flexDirection:"row",backgroundColor:"#ecedeb", width:"100%",justifyContent:"space-between"}}>
        <div style={{width:"20%"}}>
          <Navbar />
        </div>
          
        <div style={{display:"flex",flexDirection:"column",width:"79%",marginTop:"10px",gap:'20px'}}>
            
            <div>
            <Header />
            </div>

            <div className='content'>
{/* start your code here*/}
    <h2>Student Promotion</h2>
<div className="panelLists"style={{display:"flex",flexDirection:"row",marginLeft:"3px",justifyContent:"space-around",margin:"20px"}}>
                        {/* first column start*/}
                        <div className='firstColumn'>
                            <div id="list">
                                <select id="selectlist">
                                    <option value="Software Engineering" >Software Engineering</option>
                                    <option value="Math">Math</option>
                                    <option value="English">English</option>
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
                                <button style={{backgroundColor:"#84DD63", color:"white",fontSize:"20px", width:"60%", border:"none",textAlign:"left", padding:"9px", borderRadius:"10px"}}>Filter</button>
                                <button style={{backgroundColor:"red", color:"white",fontSize:"20px", width:"40%", border:"none",textAlign:"left", padding:"9px",borderRadius:"6px"}}>Clear</button>
                            </div>

                        </div>{/* first column ends*/}

                            <div>
                                <div id="list">{/* second column start*/}
                                <select id="selectlist">
                                    <option value="Software Engineering" >Software Engineering</option>
                                    <option value="Math">Math</option>
                                    <option value="English">English</option>
                                </select>
                                </div>{/* second column ends*/}
                            </div>

                            <div>
                                <div id="list">{/* third column start*/}
                                    <select id="selectlist">
                                        <option value="Software Engineering" >Software Engineering</option>
                                        <option value="Math">Math</option>
                                        <option value="English">English</option>
                                    </select>
                                </div>{/* third column ends*/}
                            </div>
                            <div>
                                <button style={{backgroundColor:"#84DD63", color:"white",fontSize:"13px", width:"100px", border:"none",textAlign:"left", padding:"10px", borderRadius:"10px"}}>Promote</button>
                            </div>
                            
                    </div>
{/* end your code here*/}
            </div>

        </div>
    </div>
    </>
  )
}

export default Desktop17
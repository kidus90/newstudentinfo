import React,{useState,useEffect} from 'react'

import Navbar from '../components/navbar.jsx';
import Header from '../components/Header.jsx';
import './css/Desktop14.css'

function Desktop14() {

    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8081/students')
        .then(res =>res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
      }, [])
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
        <h2>Course Eligibility</h2>

        <div className="panelLists"style={{display:"flex",flexDirection:"row" ,marginLeft:"40px",justifyContent:"space-between"}}>
            {/* first column start*/}
            <div className='firstColumn' style={{width:"25%"}}>
                <div id="list">
                    <select id="selectlist">
                    <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
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
                    
                </div>
                <div style={{display:"flex", flexDirection:"row",gap:"10px",width:"90%"}}>
                    <button style={{backgroundColor:"#84DD63", color:"white",fontSize:"20px", width:"60%", border:"none",textAlign:"left", padding:"9px", borderRadius:"10px"}}>Filter</button>
                    <button style={{backgroundColor:"red", color:"white",fontSize:"20px", width:"40%", border:"none",textAlign:"left", padding:"9px",borderRadius:"6px"}}>Clear</button>
                </div>

            </div>{/* first column ends*/}
                <div style={{display:"flex",flexDirection:"column",width:"75%"}}>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                            <div >
                                <div id="list"style={{display:"flex", flexDirection:"row", justifyContent:"space-between",width:"250px"}}>{/* second column start*/}
                                <select id="selectlist">
                                    <option value="Software Engineering" >Software Engineering</option>
                                    <option value="Math">Math</option>
                                    <option value="English">English</option>
                                </select>
                                </div>{/* second column ends*/}
                            </div>

                            <div>
                                <button style={{backgroundColor:"#84DD63", color:"white",fontSize:"13px", width:"150px", border:"none",textAlign:"left", padding:"10px", borderRadius:"10px"}}>Filter</button>
                            </div>
                        </div>
                        <div style={{display:"flex",margin:"20px"}}>
                                                
                            <table id="myTable">
                                <tr style={{backgroundColor:"#84DD63",color:"white",fontSize:"20px", textAlign:"center"}}>
                                    <th id="column"><label style={{display:"flex",fontSize:"20px", padding:"10px",marginRight:"17px"}}>No</label></th>
                                    <th id="column"><label style={{display:"flex",fontSize:"20px", padding:"10px",marginRight:"17px"}}>First Name</label></th>
                                    <th id="column"><label style={{display:"flex",fontSize:"20px", padding:"10px",marginRight:"17px"}}>Last Name</label></th>
                                    <th id="column"><label style={{display:"flex",fontSize:"20px", padding:"10px",marginRight:"17px"}}>Student ID</label></th>
                                    <th id="column"><label style={{display:"flex",fontSize:"20px", padding:"10px",marginRight:"17px"}}>Grade</label></th>
                                </tr><br/>
                                    {data.map((d, ind) => (
                                        <tr key={ind}>
                                            <td id="column">{d.No}</td>
                                            <td id="column">{d.FirstName}</td>
                                            <td id="column">{d.LastName}</td>
                                            <td id="column">{d.StudentID}</td>
                                            <td id="column">
                                                <select id="selectlist">
                                                    <option value="LevelOne" >{d.Grade}</option>
                                                    <option value="LevelTwo">B</option>
                                                    <option value="Levelthere">C</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))}
                                        
                                    
                            </table>

                        </div>
                </div>
                
        </div>


{/* End writing your code here */}
            </div>

        </div>
    </div>
    </>
  )
}

export default Desktop14

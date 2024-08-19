import React,{useState,useEffect} from 'react'
import Navbar from '../components/navbar.jsx';
import Header from '../components/Header.jsx';
import './css/Desktop15.css'

function Desktop15() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8081/academictimeline')
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
          
        <div style={{display:"flex",flexDirection:"column",width:"79%",marginTop:"10px",gap:'20px'}}>
            
            <div>
            <Header />
            </div>

            <div className='content'>
{/* start your code here*/}
    <h2>Credit Hour Rate</h2>
                    <div className="panelLists"style={{display:"flex",flexDirection:"row",marginLeft:"3px",margin:"20px"}}>
                        {/* first column start*/}
                        <div className='firstColumn'>
            
                            <div id="list">
                                <select id="selectlist">
                                    <option value="undergraduate" >Undergraduate</option>
                                    <option value="PostGraduate">Post Graduate</option>
                                    <option value="Phd">Phd</option>
                                </select>
                            </div>

                            <div id="list">
                                <select id="selectlist">
                                    <option value="Regular" >1320</option>
                                    <option value="Extenstion">1000</option>
                                    <option value="Summer">500</option>
                                </select>
                            </div>

                            <div id="list">
                                <select id="selectlist">
                                    <option value="LevelOne" >ETB</option>
                                    <option value="LevelTwo">Dollar</option>
                                </select>
                            </div>
                            <div style={{display:"flex", flexDirection:"row",gap:"10px"}}>
                                <button style={{backgroundColor:"#84DD63", color:"white",fontSize:"20px", width:"60%", border:"none",textAlign:"left", padding:"9px", borderRadius:"10px"}}>Filter</button>
                                <button style={{backgroundColor:"red", color:"white",fontSize:"20px", width:"40%", border:"none",textAlign:"left", padding:"9px",borderRadius:"6px"}}>Clear</button>
                            </div>

                        </div>{/* first column ends*/}
                        <div>
                    
                    <table id="myTable">
                        <tr style={{backgroundColor:"#84DD63",color:"white",fontSize:"20px",padding:"10px", textAlign:"center"}}>
                            <th><label style={{display:"flex",fontSize:"20px", padding:"10px",marginRight:"17px"}}>Program Level</label></th>
                            <th><label style={{display:"flex",fontSize:"20px", padding:"10px",marginRight:"17px"}}>Amount</label></th>
                            <th><label style={{display:"flex",fontSize:"20px", padding:"10px",marginRight:"17px"}}>Currency</label></th>
                        </tr>
                            {data.map((d, ind) => (
                                <tr key={ind}>
                                    <td>{d.Program}</td>
                                    <td>{d.Amount}</td>
                                    <td>{d.Currency}</td>
                                </tr>
                            ))}
                            
                        
                    </table>
                </div>
                            
                    </div>
{/* end your code here*/}
            </div>

        </div>
    </div>
    </>
  )
}

export default Desktop15
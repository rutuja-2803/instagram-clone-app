import React, { Component } from 'react';
import DpNilesh from './nilesh.jpeg';
import '../App.css';
import Nilu1 from './nilu1.jpeg';
import Nilu2 from './nilu2.jpeg';
import Icon from './insta-icon.jpeg';
class NileshProfile extends Component{
  render(){
  return (
    <div style={{borderRadius:25,border:'1px solid grey',marginTop:-20}}>
        <div className="ctQZ" >   
            <div className="_47KiJ">
                <img src={Icon} style={{marginRight:100, blockSize:100} }></img>
                <p></p>
                <p style={{marginTop:20,  marginRight:100}}>nilu_2710 </p>
                <hr />        
            </div>
        </div>
        
        <div className="ctQZ">   
            <div className="_47KiJ">
                <img src={DpNilesh} height="105" width="105" style={{borderRadius : 70, marginTop :0, marginRight:20}}></img>
                <p style={{marginTop : 30, fontSize : 25, marginLeft:40}}>2</p>
                <p style={{marginTop : 80, marginLeft:-30}}>Posts</p>
                <p style={{marginTop : 30,  marginLeft:35,fontSize : 25}}>721</p>
                <p style={{marginTop : 80, marginLeft:-50}}>Followers</p>
                <p style={{marginTop : 30, marginLeft:20, fontSize : 25}}>570</p>
                <p style={{marginTop : 80, marginLeft:-40}}>Following</p>
            </div>
        </div>
        
        <div className="ctQZ">   
            <div className="_47KiJ">
                <p style={{marginTop :-19,marginRight:280, fontWeight : 200}}> nilu_2710</p>
                </div>
            </div>


        <div className="ctQZ">   
            <div className="_47KiJ">
                <p style={{marginTop : -19,marginRight:235, fontWeight : 200}}> Future CS Engg.</p>
                
                </div>
            </div>

            <div className="ctQZ">   
            <div className="_47KiJ">
                <button style={{marginTop : -19, marginRight:50,fontWeight : 200, blockSize : 30}}> Following</button>
                <button style={{marginTop : -19,marginRight:70, fontWeight : 200, blockSize : 30}}> Message</button>
                </div>
            </div>

            <div className="ctQZ">   
            <div className="_47KiJ">
                <img src={Nilu1} style={{marginTop :0, marginRight:20,fontWeight : 100, blockSize : 100}}></img>
                <img src={Nilu2} style={{marginTop :0, marginRight:50,fontWeight : 100, blockSize : 100}}></img>
                
                
                </div>
            </div>        
    
   </div>
  );
 }
}

export default NileshProfile;

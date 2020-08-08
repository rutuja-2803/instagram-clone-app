import React, { Component } from 'react';
import DpPratik from './pratik.jpeg';
import '../App.css';
import Pratik1 from './pratik1.jpeg';
import Pratik2 from './pratik2.jpeg';
import Icon from './insta-icon.jpeg';
class PratikProfile extends Component{

  render(){
  return (
    <div style={{borderRadius:25,border:'1px solid grey',marginTop:-20}}>
        <div className="ctQZ">   
            <div className="_47KiJ">
                <img src={Icon} style={{marginRight : 100, blockSize:100}}></img>
                <p></p>
                <p style={{marginRight : 100, marginTop :20}}>pratik08_ </p>
                <hr />        
            </div>
        </div>

        <div className="ctQZ">   
            <div className="_47KiJ">
                <img src={DpPratik} height="140" width="140" style={{borderRadius : 70, marginTop :0, marginRight : 20}}></img>
                <p style={{marginLeft :40, marginTop : 30, fontSize : 25}}>2</p>
                <p style={{marginTop : 80, marginLeft:-30}}>Posts</p>
                <p style={{marginTop : 30,  marginLeft:35,fontSize : 25}}>831</p>
                <p style={{marginTop : 80, marginLeft:-50}}>Followers</p>
                <p style={{marginTop : 30, marginLeft:20, fontSize : 25}}>670</p>
                <p style={{marginTop : 80, marginLeft:-40}}>Following</p>

            </div>
        </div>
        
        <div className="ctQZ">   
            <div className="_47KiJ">
                <p style={{marginTop :-19,marginRight:280, fontWeight : 200}}> pratik08_</p>
                </div>
            </div>


        <div className="ctQZ">   
            <div className="_47KiJ">
                <p style={{marginTop : -19,marginRight:235, fontWeight : 200}}> <pre>Karma </pre></p>
                
                </div>
            </div>

            <div className="ctQZ">   
            <div className="_47KiJ">
            <button style={{marginTop : -29, marginRight:50,fontWeight : 200, blockSize : 30}}> Following</button>
                <button style={{marginTop : -29,marginRight:70, fontWeight : 200, blockSize : 30}}> Message</button>
                </div>
            </div>

            <div className="ctQZ">   
            <div className="_47KiJ">
                <img src={Pratik1} style={{marginTop :0, marginRight:20,fontWeight : 100, blockSize : 100}}></img>
                <img src={Pratik2} style={{marginTop : 0, marginRight:50,fontWeight : 100, blockSize : 100}}></img>
                
                
                </div>
            </div>        
    
   </div>
  );
 }
}

export default PratikProfile;

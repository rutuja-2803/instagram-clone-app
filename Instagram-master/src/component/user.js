import React, { Component } from 'react';

import '../App.css';

import Icon from './insta-icon.jpeg';
import D from './download.jpg'
import N1 from './nature.jpg'
import N2 from './nature2.jpg'

class RutujaProfile extends Component{
   
  render(){
 
  return (
    <div className='bq'style={{borderRadius:25,border:'1px solid grey',marginTop:-20}} >
        <div className="ctQZ">   
            <div className="_47KiJ">
                <img src={Icon} style={{marginRight : 100, blockSize:100}}></img>
                <p ></p>
                <p style={{marginRight : 100, marginTop :20}}>mangesh_1920 </p>
                <hr />        
            </div>
        </div>

        <div className="ctQZ">   
            <div className="_47KiJ">
                <img src={D} height="105" width="105" style={{borderRadius : 70, marginTop :0, marginRight : 20}}></img>
                <p style={{marginLeft :40, marginTop : 30, fontSize : 25}}>2</p>
                <p style={{marginTop : 80, marginLeft:-30}}>Posts</p>
                <p style={{marginTop : 30,  marginLeft:35,fontSize : 25}}>540</p>
                <p style={{marginTop : 80, marginLeft:-50}}>Followers</p>
                <p style={{marginTop : 30, marginLeft:20, fontSize : 25}}>600</p>
                <p style={{marginTop : 80, marginLeft:-40}}>Following</p>

            </div>
        </div>
        
        <div className="ctQZ">   
            <div className="_47KiJ">
                <p style={{marginTop :-19,marginRight:280, fontWeight : 200}}> mangesh_1920</p>
                </div>
            </div>


        <div className="ctQZ">   
            <div className="_47KiJ">
                <p style={{marginTop : -19,marginRight:235, fontWeight : 200}}> <pre>music defines love </pre></p>
                {/* <p style={{marginTop : 430, marginLeft : -191, fontWeight : 700}}> <pre>Papa ki Pari </pre></p> */}
                
                </div>
            </div>

            <div className="ctQZ">   
            <div className="_47KiJ">
                <img src={N1} style={{marginTop :10, marginRight:20,fontWeight : 100, blockSize : 100}}></img>
                <img src={N2} style={{marginTop : 10, marginRight:50,fontWeight : 100, blockSize : 100}}></img>
                
                
                </div>
            </div>         
   </div>
  );
 }
}

export default RutujaProfile;

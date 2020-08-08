import React, { Component } from 'react';
import DpPratik from './pratik.jpeg';
import DpRutuja from './rutuja.jpeg';
import DpNilesh from './nilesh.jpeg';
import DpPratiksha from './pratiksha.jpeg';
import Rutujamsg from './rutujamsg'
import Nileshmsg from './Nileshmsg'
import Pratikmsg from './Pratikmsg'
import Pratiimsg from './Pratiimsg'
import '../App.css';


import Cam from './cam.jpeg';
class Inbox extends Component{
    constructor(props) {
        super(props);
        this.state={
            hasRutuja:'false',
            hasPratik:'false',
            hasNilesh:'false',
            hasPratii:'false'

        }
        
    }
   
   
       
    clickHandler2= () => {
        //var message = false;
        console.log("2");
        this.setState({
            hasRutuja:'true',
            hasPratik:'false',
            hasNilesh:'false',
            hasPratii:'false'
        })
     
    }
       
    clickHandler3= () => {
        //var message = false;
                console.log("3");
                this.setState({
                    hasPratik:'false',
                    hasRutuja:'false',
                    hasPratii:'false',
                    hasNilesh:'true'
                })
     
    }
   
    clickHandler4= () => {
        //var message = false;
        console.log("4");
        this.setState({
            hasPratii:'true',
            hasPratik:'false',
            hasRutuja:'false',
            hasNilesh:'false'
            
        })
        
    }
    clickHandler1= () => {
        //var message = false;
        console.log("1");
        this.setState({
            hasPratik:'true',
            hasRutuja:'false',
            hasNilesh:'false',
            hasPratii:'false'
        })
        //console.log(prompt(`Type your message`));
    };
  render(){
  
let r='',p='',pr='',n=''
if(this.state.hasRutuja === 'true'){
    r=<div>
        <Rutujamsg/>
    </div>
}
else if(this.state.hasPratii === 'true'){
    pr=<div>
        <Pratiimsg/>
    </div>
}
else if(this.state.hasNilesh === 'true'){
    n=<div>
        <Nileshmsg/>
    </div>
}
else if(this.state.hasPratik === 'true'){
    p=<div>
        <Pratikmsg/>
    </div>
}
  return (
    
     <div>
    
 <div style={{color:'navy',marginTop:-30}}>
 
 <div style={{position:"fixed",marginTop:90,marginLeft:330,background:'grey',borderRadius:25}}>{r}</div>
 <div style={{position:"fixed",marginTop:90,marginLeft:330,borderRadius:25}}>{n}</div>
 <div style={{position:"fixed",marginTop:90,marginLeft:330,borderRadius:25}}>{p}</div>
 <div style={{position:"fixed",marginTop:90,marginLeft:330,borderRadius:25}}>{pr}</div>


 <div className="ctQZ">   
     <div className="_47KiJ" >
         <img  src={DpPratik} height="100" width="100" style={{borderRadius : 70, marginTop :100, marginLeft : 0}}></img>
        <div  style={{marginLeft :15, marginTop : 120, fontSize : 30}}> <a href="#" onClick = {this.clickHandler1}  >pratik08_ </a></div>
         <img src={Cam} style={{marginLeft :80, marginTop : 120,height :50, width : 100 }}></img>
      </div>
 </div>
 <div className="ctQZ">   
     <div className="_47KiJ" >
         <img   src={DpRutuja} height="100" width="100" style={{borderRadius : 70,marginTop:0}}></img>
         <a href="#" onClick={this.clickHandler2}><div style={{ fontSize : 30,marginTop:20,marginLeft:15}}>rutuja_2803</div> </a>
         <img src={Cam} style={{height :50, width : 100,marginLeft:50,marginTop:20 }}></img>
         </div>
  </div>
 <div className="ctQZ">   
     <div className="_47KiJ" >
         <img src={DpNilesh} height="100" width="100" style={{borderRadius : 70,marginTop:0}}></img>
        <a href="#" onClick={this.clickHandler3}> <div    style={{ marginTop : 20, fontSize : 30,marginLeft:15}}>nilu_2710</div></a> 
         <img src={Cam} style={{marginLeft :80, marginTop : 20,height :50, width : 100 }}></img>

     </div>
 </div> 
 <div className="ctQZ">   
     <div className="_47KiJ">
     <img   src={DpPratiksha} height="100" width="100" style={{borderRadius : 70,marginTop:0}}></img>
         <a href="#" onClick = {this.clickHandler4}  > <div  style={{ marginTop : 20, fontSize : 30,marginLeft:15}}>pratii_s05</div></a>
         <img src={Cam} style={{marginLeft :80, marginTop : 20,height :50, width : 100 }}></img>      
     </div>
 </div>
</div>
     </div> 
   
  );
 }
}

export default Inbox;
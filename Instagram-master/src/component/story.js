import React, {Component} from 'react';
import '../App.css';

class App extends Component { 
  constructor(props) {
    super(props)

    this.state = {
      Hastrue: 'false',
      Hastrue1: 'false',
      Hastrue2: 'false',
      Hastrue3: 'false'
    }
  }
  clickHandler = () => {
    this.setState({
      Hastrue: 'true',
      Hastrue1: 'false',
      Hastrue2: 'false',
      Hastrue3: 'false'


        });
        setTimeout(() => {
            window.location.reload(false)
        },3000);
  }
  clickHandler1 = () => {
    this.setState({
      Hastrue1: 'true',
      Hastrue2: 'false',
      Hastrue3: 'false',
      Hastrue: 'false'

    });
    setTimeout(() => {
        window.location.reload(false)
    },3000);
  }
  clickHandler2 = () => {
    this.setState({
      Hastrue2: 'true',
      Hastrue3: 'false',
      Hastrue1: 'false',
      Hastrue: 'false'
    });
    setTimeout(() => {
        window.location.reload(false)
    },3000);
  }
  clickHandler3 = () => {
    this.setState({
      Hastrue3: 'true',
      Hastrue2: 'false',
      Hastrue1: 'false',
      Hastrue: 'false'

    });
    setTimeout(() => {
        window.location.reload(false)
    },3000);
  }

  
  render() {
    let h=''
    let i=''
    let j=''
    let k=''
    if (this.state.Hastrue === 'true'){
      h = <div className="edit ctQZg" style={{marginLeft:180,marginTop:10}}>
              <img src={process.env.PUBLIC_URL + "/img5.jpg"} 
                style={{borderRadius:25,border:'1px solid grey',marginTop:-50}} width = "500px" height = "500px">
                  </img> 
        </div>
    }
    if (this.state.Hastrue1 === 'true'){
       i = <div className="edit ctQZg "style={{marginLeft:180,marginTop:10}}>
        <img src={process.env.PUBLIC_URL + "/img6.jpeg"} style={{borderRadius:25,border:'1px solid grey',marginTop:-50}} width = "500px" height = "500px"/> </div>
    }
    if (this.state.Hastrue2 === 'true'){
     j = <div className="edit ctQZg" style={{marginLeft:180,marginTop:10}}><img src={process.env.PUBLIC_URL + "/img7.jpeg"} style={{borderRadius:25,border:'1px solid grey',marginTop:-50}} width = "500px" height = "500px"/> </div>
    }
    if (this.state.Hastrue3 === 'true'){
       k = <div className="edit ctQZg" style={{marginLeft:180,marginTop:10}}><img src={process.env.PUBLIC_URL + "/img8.jpeg"} style={{borderRadius:25,border:'1px solid grey',marginTop:-50}} width = "500px" height = "500px"/> </div>
    }
    return (
 <div>
     
    <div className="content-details bac">
    <hr style={{marginTop:-15}}/>
        <div className="imagebox" style={{paddingLeft:40,marginTop:20,marginLeft:60}}>&nbsp;&nbsp;
        <a href="#" onClick = {this.clickHandler}> <img src={process.env.PUBLIC_URL + "/img1.jpg"} onTimeUpdate="300" className='rounded' style={{marginLeft:50,borderRadius : 70}}  alt = "pic" width = "50px" height = "50px"/></a>&nbsp;&nbsp;
        <a href="#" onClick = {this.clickHandler1}> <img src={process.env.PUBLIC_URL + "/pratik.jpeg"} className="rounded" alt = "pic" style={{marginLeft:30,borderRadius : 70}} width = "50px" height = "50px"/></a>&nbsp;&nbsp;
        <a href="#" onClick = {this.clickHandler2}> <img src={process.env.PUBLIC_URL + "/pratiksha.jpeg"} className="rounded" alt = "pic"style={{marginLeft:30,borderRadius : 70}}  width = "50px" height = "50px"/></a>&nbsp;&nbsp;
        <a href="#" onClick = {this.clickHandler3}> <img src={process.env.PUBLIC_URL + "/img4.jpeg"} className="rounded" alt = "pic"style={{marginLeft:30,borderRadius : 70}}  width = "50px" height = "50px"/></a>&nbsp;&nbsp;
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="user-1" style={{paddingLeft:40}}><font size='2'>rutuja_2803</font></span>
        <span className="user-2" style={{paddingLeft:40}}><font size='2'>pratik08_</font></span>
        <span className="user-3" style={{paddingLeft:40}}><font size='2'>pratii_s05</font></span>
        <span className="user-4" style={{paddingLeft:40}}><font size='2'>nilu_2710</font></span>
        </div>
    </div>
     <div>{h}</div>
     <div>{i}</div>
     <div>{j}</div>
     <div>{k}</div>
     <hr></hr>
  </div>
    );
  }   
}
export default App;
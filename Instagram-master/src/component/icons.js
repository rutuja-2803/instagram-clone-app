import React, { Component } from 'react';
import '../App.css';
import Img from '../Instagram.png'
import Message from './message'
import Profile from './profile'
import Nileshpic from './nilu2.jpeg'
import User from './user'
import Ac from './Activity'
class icons extends Component {
    constructor(props) {
        super(props)
        this.state={
            hasTrue:'false',
            searchProfile:'',
            hasSearch:'false',
            hasSearchContent:'false',
            hasProfile:'false',
            hasActivity:'false'
        };
        this.handleSearch = this.handleSearch.bind(this);

    }
    handleClick = ()=>{
       this.setState({
           hasTrue:'true',
           hasSearch:'false',
                hasProfile:'false',
                hasActivity:'false'

       });
    }
    handleChange=(event)=>{
        this.setState({
       searchProfile:event.target.value,
       hasSearchContent:'true', 
       hasSearch:'false'  ,
       hasActivity:'false'

         });

      }
       handleSearch=()=>{
            this.setState({
                hasSearch:'true',
                hasProfile:'false',
                hasTrue:'false',
                hasActivity:'false'

                 });
       }
       profil=()=>{
          this.setState({
          hasProfile:'true',
          hasSearch:'false',
          hasTrue:'false',
          hasSearchContent:'false',
          hasActivity:'false'
 
          })
       }
       Activityf=()=>{
         this.setState({
          hasProfile:'false',
          hasSearch:'false',
          hasTrue:'false',
          hasSearchContent:'false',
          hasActivity:'true'

});

       }
    render() {
        let h=''
        if(this.state.hasTrue ==='true'){
            h=<div><Message/></div>
        }
        let k=''
        if(this.state.hasSearch==='true'){
            k=<div><Profile name={this.state.searchProfile}/></div>
        }
        let j=''
        if(this.state.hasProfile === 'true'){
          j=<div style={{marginTop:100}}><User/></div>
        }
        let i=''
        if(this.state.hasActivity==='true'){
          i=<div><Ac/></div>
        }
        return (
            <div>
                <div style={{position:"fixed",marginTop:90,marginLeft:700}}>{h}</div>
                <div style={{position:"fixed",marginTop:190,marginLeft:550}}>{k} </div>
                <div style={{position:"fixed",marginTop:90,marginLeft:700}}>{j} </div>
                <div style={{position:"fixed",marginTop:40,marginLeft:700}}>{i} </div>


                <div className="ctQZg bq"  >
                    <div className="_47KiJ">
                       <div className="img"><img alt="" style={{marginTop:5}} src={Img}/></div> 
                         <div className="serach">
                           <input type="text" placeholder="search" style={{borderRadius:5,border:'1px solid grey',height:20,marginTop:5}} onChange={this.handleChange}/>
                           <button style={{borderRadius:25,border:'1px solid grey'}} onClick={this.handleSearch}>Search</button>
                         </div>
                         <a href="/" style={{marginTop:5}}>
                         <svg aria-label="Home" className="_8-yf1 " fill="#262626" height="22" viewBox="0 0 48 48" width="22">
                           <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z">
                           </path>
                         </svg>
                   </a>
                 <a href="#" style={{marginTop:5}} onClick={this.handleClick}>
                 <svg aria-label="Direct" className="_8-yf2 " fill="#262626" height="22" viewBox="0 0 48 48" width="22">
                  <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z">
                  </path>
             </svg></a>
            
              <a href="" style={{marginTop:5}}>
              <svg aria-label="Find People" className="_8-yf3 " fill="#262626" height="22" viewBox="0 0 48 48" width="22">
                    <path clip-rule="evenodd" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z" 
                    fill-rule="evenodd">
             </path>
             </svg>
              </a>
             <a href="#" style={{marginTop:5}} onClick={this.Activityf}>
               <svg aria-label="Activity Feed" className="_8-yf4 " fill="#262626" height="22" viewBox="0 0 48 48" width="22">
                 <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                 </path>
               </svg>
             </a>
             <a hraf="#" style={{marginTop:5}} onClick={this.profil}><div className='ctQZg'>mangesh_1920</div>
                 <span class="_2dbep qNELH _8-yf5  " role="link" tabindex="0" style={{width:22,height:22}}>
                     <img alt="nilu_2710's profile picture" class="_6q-tv" draggable="false" src={Nileshpic}/>
                 </span> 
             </a>
            
            </div>
          </div>
            
            
    </div>
      
      );
    }
}

export default icons;
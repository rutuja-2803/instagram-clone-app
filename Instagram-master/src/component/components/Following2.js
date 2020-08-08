import React, { Component } from 'react'
import './FollowingR.css'
import Pic2 from './nilesh.jpg'
import BorderWrapper from 'react-border-wrapper'

class Following2 extends Component {
    constructor(props) {
        super(props)
        this.state={
           f:'follow'
        };
     }
     chng = () =>{
      if(this.state.f === 'follow'){
        this.setState({
           f:'following'
        });
      }else{
        this.setState({
           f:'follow'
        });
      }
    }
    render() {
        return (
            <div className = "f0">
                <div className="f1" role="button" tabIndex="0" >
                    <div className="f2" >
                        <div className="f3" >
                            <div className="f4" role="button" tabindex="0" >
                                <canvas className="f5" height="66" width="66" style={{ position: "absolute", top: "-5px", left: "-5px", width: "44px", height: "44px" }}>
                                </canvas>
                                <span className="f6" role="link" tabindex="0" style={{ width: "34px", height: "34px" }}>
                                    <img alt="pratii_s05" className="f7" draggable="false" src={Pic2}>
                                    </img>

                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="f8">
                        <div className="f9" style={{marginTop:0}}>
                            <a className="f10" title="pratii_s05" href=" "  >nilu_2710</a>

                        </div>
                        <div style={{marginLeft:15}}> started following you.</div>
                       <time className="f11" dateTime="2020-06-2405:00:00" title="Jun 23,2020">2d</time>
                    </div>
                    <div style={{marginLeft:40,background:'skyblue' ,borderRadius:5}}>
                        <BorderWrapper
                              marginLeft="10px"
                           borderColour="lightgrey"
                           borderWidth="0.5px"
                           borderRadius="5px"
                           borderType="solid"
                           innerPadding="0.5px"
                           // topElement= topElement}
                           topPosition={0.05}
                           topOffset="22px"
                           topGap="4px"
                           //rightElement={rightElement}
                           rightPosition={0}
                           rightOffset="10px"
                           //   rightGap="1px"
                        >
                                 <button className="f13"  type="button" onClick={this.chng}>{this.state.f} </button>
                           </BorderWrapper>
                           </div>

                </div>
            </div>
        )
    }
}

export default Following2

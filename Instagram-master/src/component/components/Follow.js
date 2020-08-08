import React, { Component } from 'react'
import './FollowR.css'

class Follow extends Component {
    render() {
        return (
            <div className ="in">
               
                        <div className="request" role="button" tabIndex="0">
                            <div className="icon">
                                <div className="text">10+</div>
                            </div>
                            <div className="fr1">
                                <button className="fr2">
                                    <span className="fr3">Follow Requests</span>
                                    <span className="fr4">Approve or ignore requests</span>
                                </button>

                            </div>
                            <div className="arrow">
                                <div className="arrow1">
                                    <div className="arrow2"></div>
                                </div>
                            </div>
                        
                        </div>

                   
            </div>
        )
    }
}

export default Follow







   // < div style = "height:auto ; overflow : hidden auto;" >
     //   <div style="flex-direction : column ; padding-bottom : 0px ; padding-top :0px;">
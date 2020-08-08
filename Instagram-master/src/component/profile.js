import React, { Component } from 'react';
import NileshId from './NileshProfile' 
import RutujaId from './RutujaProfile'
import PratikId from './PratikProfile'
import PratikshaId from './PratikshaProfile'

class profile extends Component {
    render() {
        var s ='';
        if(this.props.name === 'nilu_2710'){
            s=  <div> <NileshId/> </div>
        }
        else if(this.props.name === 'rutuja_2803'){
            s=  <div> <RutujaId/> </div>
        }
        else if(this.props.name==='pratik08_'){
            s=  <div><PratikId/> </div>
        }
        else if(this.props.name ==='pratii_s05'){
            s=  <div> <PratikshaId/> </div>
        }
        else{
            alert("Search valid username");
        }
        return (
            <div className='App bq'>
                 <div>{s}</div>
            </div>
        );
    }
}

export default profile; 

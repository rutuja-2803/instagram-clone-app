import React, { Component } from 'react';
import '../App.css';
import Follow from './components/Follow';
import Following from './components/Following';
import Following1 from './components/Follower1';
import Following2 from './components/Following2';
import Following3 from './components/Following3';
class Activity extends Component {
    render() {
        return (
            <div style={{marginTop:140,borderRadius:25,border:'1px solid grey'}}>
                <Follow />
                <Following />
                <Following1 />
                <Following2 />
                <Following3 />
            </div>
        );
    }
}

export default Activity;
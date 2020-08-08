import React from 'react';
import './App.css';
import Icons from './component/icons'
import Timeline from './component/timeline'

import Story from './component/story'

function App() {
   return (
     <div className='bac'>
        <div className='bq'><Icons/></div><br/><br/>
        <div><Story/></div>
        <div><Timeline/></div>
     </div>
   );
}

export default App;

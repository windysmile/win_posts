import React from 'react'
import './App.scss';
import Topbar from './Components/topbar/Topbar';
import Sidebar from './Components/sidebar/SideBar';
import Feed from './Components/feed/Feed';
import Rightbar from './Components/rightbar/Rightbar';

function App() {

  return (
    <div className='main'>
      <Topbar></Topbar>
      <div className='container'>
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Rightbar></Rightbar>
      </div>
    </div>
  );
}

export default App;

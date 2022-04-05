
import React from 'react';
import Chart from '../../components/Chart/Chart';
import Featured from '../../components/Featured/Featured';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import List from '../../components/Table/List';
import Widgets from '../../components/Widgets/Widgets';
import './Home.scss'
const Home = () => {
    return (
        <div className='home'>
            {/* <h1 className="title"> my home</h1> */}
            <Sidebar/>
            <div className='homeContainer'>
                <Navbar/>
                <div className="widgets">
                <Widgets type="user"/>
                <Widgets type="order"/>
                <Widgets type="earning"/>
                <Widgets type="balance"/>
                </div>
                <div className='charts'>
               <Featured/>
               <Chart/>
           </div>
           <div className="listContainer">
               <div className="listTitle">
                <List></List>
               </div>
           </div>
            </div>
           
        </div>
    );
};

export default Home;
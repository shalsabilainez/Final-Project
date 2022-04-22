import React from 'react';
import Body from '../../components/Body';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';


function Home({ spotify }) {
    return (
        <div className='player'>
            <div className='player__body'>
            <Sidebar />
            <Body spotify={spotify} />
            </div>

            <Footer spotify={spotify} />
        </div>
    );
}

export default Home;
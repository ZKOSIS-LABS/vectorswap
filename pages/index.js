import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SwapComponent from '../components/SwapComponent';
import SideBar from '../components/Sidebar';

export default function Home() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <>
      <div className='mainz'></div>



      <div className='w-full h-screen flex flex-col items-center justify-center bg-[#170d28]'>
      <button
          onClick={toggleSideBar}
          className='kabebe'
        >
          {isSideBarOpen ? '✕' : '☰'}
        </button>

        <SideBar isOpen={isSideBarOpen} onClose={toggleSideBar} width="300px" position="left">
          <h3 className="text-white text-xl font-semibold">MoonBoys Swap</h3>
          <ul className="text-white kiki">
            <li>Home</li> 
            <li>Chat App</li>
            <li>Liquidity Pools</li>
            <li>DEX</li>
            <li>Marketplace</li>
          </ul>
        </SideBar>

        <Header />
        <SwapComponent />
        {/* Uncomment the Footer if you want to include it */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SwapComponent from '../components/SwapComponent';
import SideBar from '../components/Sidebar';

export default function Home() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [dropdown, setDropdown] = useState({
    home: false,
    chatApp: false,
    liquidity: false,
  });

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
        <img src='./uniswap.png' className='hohor' />
        <ul className="text-white kiki">
          {/* Home Dropdown */}
          <li className='bubu'>
            <button
              onClick={() => setDropdown((prev) => ({ ...prev, home: !prev.home }))}
              className="bubu"
            >
            <img src='./swap.svg' className='h-5' />   SWAP  ▼
            </button>
            {dropdown.home && (
              <ul className="ml-4 text-sm">
                <li className="hover:text-gray-300">Submenu 1</li>
                <li className="hover:text-gray-300">Submenu 2</li>
              </ul>
            )}
          </li>

          {/* Chat App Dropdown */}
          <li>
            <button
              onClick={() => setDropdown((prev) => ({ ...prev, chatApp: !prev.chatApp }))}
              className="bubu"
            >
           <img src='./farm.svg' className='h-5' />    FARM ▼
            </button>
            {dropdown.chatApp && (
              <ul className="ml-4 text-sm">
                <li className="hover:text-gray-300">Submenu 1</li>
                <li className="hover:text-gray-300">Submenu 2</li>
              </ul>
            )}
          </li>

          {/* Liquidity Pools Dropdown */}
          <li>
            <button
              onClick={() => setDropdown((prev) => ({ ...prev, liquidity: !prev.liquidity }))}
              className="bubu"
            >
             <img src='./br.svg' className='h-5' /> BRIDGE ▼
            </button>
            {dropdown.liquidity && (
              <ul className="ml-4 text-sm">
                <li className="hover:text-gray-300">Submenu 1</li>
                <li className="hover:text-gray-300">Submenu 2</li>
              </ul>
            )}
          </li>
          <div className='jeje' >

          </div>
          <h2>DAPPS</h2>
          {/* Regular Menu Items */}
          <li>CHAT APP</li>
          <li>LAUNCH PAD</li>
          <li>SMART SWAP</li>
          <li>SMART BID</li>
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

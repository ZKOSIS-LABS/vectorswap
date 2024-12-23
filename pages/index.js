import Footer from '../components/Footer'
import Header from '../components/Header'
import SwapComponent from '../components/SwapComponent'

export default function Home() {
  return (
    <>
    <div className='mainz'></div>
    
    <div className='w-full h-screen flex flex-col items-center justify-center bg-[#0c0f24]'>

      <Header />
      <SwapComponent />
      {/* <Footer /> */}
    </div>
    </>
  )
}

import JobsterLogo from '../assets/JobsterLogo.svg'
import LandingImage from '../assets/LandingImage.svg'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <main className='bg-[#F0F4F8] w-full h-[100vh] p-10 flex'>
      <section className='md:w-[600px]'>
        <img src={JobsterLogo} alt="" className='mb-36' />
        <h1 className='text-[3em] font-bold text-[#102A43] mb-5'>Job <span className='text-[#3B82F6]'>Tracking</span> App</h1>
        <p className='text-[#63768a] font-medium mb-10'>Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up fixie raclette taxidermy craft beer. Brunch bitters synth, VHS crucifix heirloom meggings bicycle rights.</p>
        <Link to='/login' className='bg-[#3B82F6] shadow-xl text-white border-none px-5 static text-[1.3em] font-medium py-4 rounded-lg hover:bg-[#1D4ED8] duration-150'>Login/Register</Link>
      </section>
      <section className=' hidden lg:block'>
        <img src={LandingImage} alt="" />
      </section>
    </main>
  )
}

export default Landing

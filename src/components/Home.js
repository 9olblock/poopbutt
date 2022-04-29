import '../index.css';
import MoonBird from "./moonbird-avatar.png";
import Navbar from './Navbar';

function Home() {
  return (
    <div className="page-wrapper font-Nippo">
      <main className="main-wrapper">
      <div className="h-screen w-full fixed z-1 block bg-[#101113] bg-cover bg-[url('/public/skyy.gif')] ">
          <div className="h-screen w-full  bg-gradient-to-b from-black mix-blend-overlay	">
          
          </div>
        <div className="h-screen w-full bg-[url('/public/finalhome.png')] mix-blend-color-burn 	">
        

        </div>
        
        
      </div>
      


      <div className='flex justify-center items-center w-screen h-screen fixed z-1'>
        <div className='flex-row items-center justify-center px-32 py-32 relative '>
          <div className='static text-white  text-center text-8xl'>
            <div>
            TO 
            </div>
            <div>
            THE
            </div>
            MOON
          </div>

          <div className='static justify-center align-middle pt-4 flex'>
            <button className='flex justify-center align-middle bg-[#00468C] text-white text-center py-3 px-5 static text-2xl hover:bg-opacity-70'>
              <a href="/mint"> GO TO MINT </a>
            </button>
          </div>
        </div>
      </div>

        <Navbar/>

      <div className='hidden lg:block fixed bottom-8 left-0 px-8 z-70'> 
      <div className='relative duration-100 '>
          

      </div>

      </div>
      <div className='fixed h-24 bottom-0 left-0 w-full'>
        <div className='grid grid-cols-1 h-24 w-full '>
            <div className='fixed h-20 lg:bottom-8 lg:right-8 bottom-4 lg:px-0 px-4 lg:w-full lg:max-w-2xl w-full'>
                <div className='bg-[#00468C] w-full text-white rounded relative lg:pr-3 pr-3 h-20 flex items-center shadow-me'>
                    <img className='rounded-md z-100 h-full mx-4' src={MoonBird} />
                    <div className='block lg:mr-4 mr-auto lg:ml-4 ml-0 '>
                        <p className=' font-sans text-3xs tracking-widest font-400 uppercase opacity-50'> Something Is Coming </p>
                        <p className='font-sans uppercase tabular-nums font-700 md:text-xl text-sm'> Azuki</p>

                    </div>
                    <div className='ml-auto'>
                        <a className='lg:px-6 px-4 group flex shadow-me items-center justify-center lg:text-base text-2xs uppercase lg:h-12 h-12 duration-300 cursor-pointer font-600 transform border border-none text-gray-800 hover:text-black bg-white'>
                            MAGIC EDEN </a>

                    </div>
                    
                </div>

            </div>
        </div>
      </div>
      </main>
    </div>
  );
}

export default Home;

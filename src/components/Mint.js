import '../index.css';
import MoonBird from "./moonbird-avatar.png";

function Mint() {
    return (
        <div className="bg-[#101113] bg-cover bg-[url('/public/sky.gif')] ">
            <div className='flex flex-col justify-between h-screen'>
                <div className='flex-grow'>
                    <div className='relative'>
                        <div className='absolute top:0 z-50 w-full'>
                            <div className='mt-10 md:mt-20 md:mb-20 px-10'>
                            </div>
                            <div className='px-10 md:px-0 mt-[70px] block w-full md:inline md:max-w-[744px] m-automd:max-w-[744px] m-auto'>
                                <div className='flex flex-col md:flex-row bg-[#15112D] rounded-card md:max-w-[744px] m-auto rounded-lg'>
                                    <div className='md:w-[288px] bg-[#120E25] rounded-lg p-[24px] md:p-[30px] flex flex-col md:rounded-l-card'>
                                        <div className='md:my-[28px] rounded-lg flex flex-col items-center space-y-[16px]'>
                                            <img src={MoonBird}  className='-mt-[50px] md:block mx-auto w-1/3 md:w-auto'/>
                                            <h4 className='hidden md:block text-[18px] text-white leading-[26px] font-[700]'>
                                                Moonbirds Mint
                                            </h4>
                                            <div className='flex flex-col space-y-[16px]'>
                                                <div className='flex flex-col space-y-[2px] items-center'>
                                                    <h4 className='text-[#B5BCB3] text-[14px] leading-[20px]'>
                                    Mint Price: 
                                                    </h4>
                                                    <p className='text-[#FFF] text-[16px] leading-[20px] font-[600]'>2.5E</p>

                                                </div>
                                                <div className='hidden md:flex flex-col space-y-[2px] items-center'>
                                                    <div className='text-[#B5BCB3] text-[14px] leading-[20px]'>
                                                    Total Supply
                                                    </div>
                                                    <p className='text-[#FFF] text-[16px] leading-[20px] font-[600]'>10,000</p>
                                                </div>
                                                <div className='hidden md:flex flex-col space-y-[2px] items-center'>
                                                    <div className='text-[#B5BCB3] text-[14px] leading-[20px]'> Supply Remaining: </div>
                                                    <p className='text-[#FFF] text-[16px] leading-[20px] font-[600]'> 0 </p>
                                                </div>

                                            </div>

                                        </div>
                                        <p className='text-center'>
                                            <a  className='text-[12px] leading-[20px] text-[#0069D2] font-[600]'> Terms of Sale </a>
                                        </p>
                                        <div className='flex mt-[30px] justify-center space-x-[12px] '>
                                            
                                        </div>


                                        

                                    </div>
                                    

                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Mint;
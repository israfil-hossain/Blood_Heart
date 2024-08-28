import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="container h-full lg:justify-start justify-center flex flex-col items-start">
      <h2 className="text-white  lg:text-[65px] text-[40px] font-medium py-5 lg:pt-32 ">
        <span>Your Partner in Digital</span> <br />
        <span className="">Transformation</span>
      </h2>
      <p className="text-[20px] text-white font-medium py-5">Unlocking new opportunities with innovative solutions</p>
      <p className="text-[20px] font-medium text-white py-5">SCROLL</p>
      <ChevronDown className='text-white text-[20px]'/>
    </div>
  );
}

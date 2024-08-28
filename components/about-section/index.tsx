import { discord, messanger, skype, telegram, vector } from "@/app/assets";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function AboutSection(){
    return(
        <div className="container grid grid-cols-12  gap-5 pb-10">
            <div className="about_1 lg:col-span-4 col-span-12 container">
                <p className="text-white pt-8 pb-4 text-[16px]">
                    Comprehensive ai solutions dashbaord for business insights and innovation 
                </p>
                <p className="text-gray-400 text-[14px] font-normal ">
                    Explore our comprehensive AI solutions dashbaord designed to provide actionable business 
                    insights and drive innovation
                </p>
            </div>
            <div className="about_2 lg:col-span-4 col-span-12 relative">
                <Image src={vector} alt="vector" width={300} height={200} className="absolute left-0 top-0 rounded-[20px]" />
                <div className="absolute top-40 container">
                    <div className="flex gap-3">
                        <Button className="border border-gray-100 bg-transparent rounded-full ">Web Dev</Button>
                        <Button className="border border-gray-100 bg-transparent rounded-full ">Plugins</Button>
                    </div>
                    <p className="text-[14px] font-normal py-8 text-white w-60">
                        Enhance customer support with intelligent chatbots for seamless <br/> service
                    </p>
                    <div className="flex justify-start space-x-2 items-center">
                        <Image src={messanger} alt="messanger" width={100} height={100} className="w-12 h-8"/>
                        <Image src={skype} alt="skype" width={100} height={100} className="w-12 h-8"/>
                        <Image src={telegram} alt="telegram" width={100} height={100} className="w-12 h-8"/>
                        <Image src={discord} alt="discord" width={100} height={100} className="w-12 h-8"/>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-4 col-span-12  space-y-4">
                <div className="about_3  container items-center flex justify-start">
                    <p className="text-[18px] text-white font-normal w-[250px]">
                        Maximize potential with seamless open ai integration <br/> solutions
                    </p>
                </div>
                <div className="about_4 container flex flex-col text-gray-100 items-center justify-center">
                    <h2 className="typograpy">
                        30 Years
                    </h2>
                    <p >Combined Experience in Tech.</p>
                </div>
            </div>
        </div>
    )
}
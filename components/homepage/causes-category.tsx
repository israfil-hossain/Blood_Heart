'use client'

import { Cherry, Cross, HeartPulse, LucideProps, Shirt, Stethoscope } from "lucide-react"
import Image from "next/image"
import { ForwardRefExoticComponent, RefAttributes } from "react";

export default function CausesCategory() {
  type Props = {
    id:number, 
    name: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  }
  const category:Props[]= [
    {
      id:1, 
      name : "Health", 
      icon: HeartPulse,
    },
    {
      id:2, 
      name : "Medicine", 
      icon: Cross,
    },
    {
      id:3, 
      name : "Doctor", 
      icon: Stethoscope
    },
    {
      id:4, 
      name : "Cloths", 
      icon: Shirt
    },
    {
      id:5, 
      name : "Foods", 
      icon: Cherry
    }
  ]
  return (
    <section className="container mx-auto my-16 px-4">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">Causes Category</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {category.map((item:Props,i) => (
          <div key={i} className=" hover:shadow-2xl transition-shadow duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex flex-col items-center bg-rose-100 px-8 py-5 rounded-lg ">
            <div className="rounded-full shadow-xl bg-white p-3 ">
              <item.icon className="h-10 w-10 text-primary" />
            </div>
           
            <p className="mt-2 text-center text-sm font-bold text-rose-400 py-2 ">{item?.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

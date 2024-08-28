'use client'

import { useEffect, useState } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { coverimage, coverimage2 } from "@/app/assets"


export default function HeroSlider() {

  return (
    <section className="relative bg-gray-900 text-white">
    <div className="container mx-auto flex flex-col items-center px-4 py-20 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-4xl">
      <h1 className="text-4xl font-bold leading-5 sm:text-5xl">
       বন্যার্তদের সহযোগিতায় 
      </h1>
      <h2 className="text-4xl font-bold text-primary mt-5 leading-4">
       এগিয়ে আসুন
      </h2>
      {/* <p className="mt-6 mb-8 text-lg sm:mb-12">{"45%"}</p> */}
      <div className="flex flex-wrap justify-center py-5">
        <Button className="bg-primary hover:bg-rose-700 m-2">সাহায্য করুন  </Button>
        {/* <Button variant="outline" className="m-2 text-primary">Read Articles</Button> */}
      </div>
    </div>
    <div className="absolute inset-0 z-0">
      <Image
        src={coverimage2}
        alt="Hero background"
        layout="fill"
        objectFit="fill"
        className="mix-blend-overlay opacity-20"
      />
    </div>
  </section>
  )
}

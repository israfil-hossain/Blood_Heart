'use client'

import { useEffect, useState } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"


export default function HeroSlider() {

  return (
    <section className="relative bg-gray-900 text-white">
    <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
      <h1 className="text-4xl font-bold leading-none sm:text-5xl">
        Small Effort Make <br />
        <span className="text-green-500">Big Change</span>
      </h1>
      <p className="mt-6 mb-8 text-lg sm:mb-12">45%</p>
      <div className="flex flex-wrap justify-center">
        <Button className="bg-green-500 hover:bg-green-600 m-2">Start a Donation</Button>
        <Button variant="outline" className="m-2">Read Articles</Button>
      </div>
    </div>
    <div className="absolute inset-0 z-0">
      <Image
        src=""
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        className="mix-blend-overlay opacity-50"
      />
    </div>
  </section>
  )
}

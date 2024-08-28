'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { blooddonate, freefood, freemedical, freemedicine } from "@/app/assets"

type Props = {
  id:number, 
  name: string,
  image : any,
  raised : number, 
  goal : number
}

export default function FeaturedCampaigns() {
  const features:Props[]= [
    {
      id:1, 
      name : "Provide Free Blood", 
      image: blooddonate,
      raised : 2000, 
      goal : 5000,
    },
    {
      id:2, 
      name : "Provide Free Medicine", 
      image: freemedicine,
      raised : 2000, 
      goal : 5000,
    },
    {
      id:3, 
      name : "Provide Free Foods", 
      image: freefood,
      raised : 2000, 
      goal : 5000,
    },
    {
      id:4, 
      name : "Provide Free Medical Camp", 
      image : freemedical,
      raised : 2000, 
      goal : 5000,
    },
    
  ]
  return (
    <section className="container mx-auto my-16 px-4">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">Featured Campaigns</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 grid-cols-1">
        {features.map((item,i) => (
          <Card key={i} className="h-[450px]">
            <Image
              src={item?.image}
              alt={`Campaign ${i}`}
              width={400}
              height={200}
              className="rounded-t-lg h-[220px] border-b-2 shadow-inner "
            />
            <CardContent className="p-4">
              <h3 className="mb-2 text-xl font-bold">{item?.name}</h3>
              <p className="text-sm text-gray-600">Raised: ${item?.raised}</p>
              <p className="text-sm text-gray-600">Goal: ${item?.goal}</p>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                <div className="h-full w-2/5 rounded-full bg-primary"></div>
              </div>
            </CardContent>
            <CardFooter className="p-4">
              <Button className="w-full bg-primary hover:bg-rose-600">Donate Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

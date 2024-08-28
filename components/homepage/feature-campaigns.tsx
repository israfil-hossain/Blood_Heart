'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function FeaturedCampaigns() {
  return (
    <section className="container mx-auto my-16 px-4">
      <h2 className="mb-8 text-center text-3xl font-bold">Featured Campaigns</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt={`Campaign ${i}`}
              width={400}
              height={200}
              className="rounded-t-lg"
            />
            <CardContent className="p-4">
              <h3 className="mb-2 text-xl font-bold">Provide Free Medicine</h3>
              <p className="text-sm text-gray-600">Raised: $2,000.00</p>
              <p className="text-sm text-gray-600">Goal: $5,000.00</p>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                <div className="h-full w-2/5 rounded-full bg-green-500"></div>
              </div>
            </CardContent>
            <CardFooter className="p-4">
              <Button className="w-full bg-green-500 hover:bg-green-600">Donate Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

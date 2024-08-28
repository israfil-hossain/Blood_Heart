'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function QuickDonation() {
  return (
    <section className="container mx-auto my-8 px-4">
      <div className="flex flex-wrap items-center justify-between rounded-lg bg-gray-100 p-6">
        <h2 className="mb-4 text-2xl font-bold text-gray-800 md:mb-0">Quick Donation</h2>
        <div className="flex flex-wrap items-center space-x-4">
          <Input type="text" placeholder="Emergency Medicine & Health" className="w-64" />
          <Input type="number" placeholder="$100" className="w-32" />
          <Button className="bg-green-500 hover:bg-green-600">Donate Now</Button>
        </div>
      </div>
    </section>
  )
}

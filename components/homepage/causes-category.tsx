'use client'

import Image from "next/image"

export default function CausesCategory() {
  return (
    <section className="container mx-auto my-16 px-4">
      <h2 className="mb-8 text-center text-3xl font-bold">Causes Category</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt={`Cause ${i}`}
              width={100}
              height={100}
              className="rounded-full"
            />
            <p className="mt-2 text-center text-sm">Health & Medical</p>
          </div>
        ))}
      </div>
    </section>
  )
}

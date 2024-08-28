import Image from "next/image";
import { EventCard, SectionTitle, StatCard } from "../common/Card";
import { Button } from "../ui/button";
import { BadgePlus, Heart, Leaf, Users } from "lucide-react";
import { coverimage } from "@/app/assets";

export default function CharityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Success Stories Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                src={coverimage}
                width={600}
                height={400}
                alt="A person working in a field"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Success Stories
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Our organization has helped countless individuals overcome
                    challenges and achieve their goals. Read about their
                    inspiring journeys and see the impact of our work firsthand.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-rose-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rose-700 disabled:pointer-events-none disabled:opacity-50">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <SectionTitle title="About Us" />
            <div className="grid gap-6 items-center">
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mx-auto text-center">
                We are dedicated to making a positive impact in our community.
                Our mission is to provide support, resources, and opportunities
                to those in need, fostering growth and empowerment.
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <StatCard icon={BadgePlus} title="2020" description="Year Founded" />
                <StatCard
                  icon={Users}
                  title="10000"
                  description="People Helped"
                />
                <StatCard icon={Heart} title="150" description="Volunteers" />
                <StatCard
                  icon={Leaf}
                  title="500"
                  description="Trees Planted"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <SectionTitle title="Upcoming Events" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  date: "13 Jul",
                  title: "Provide Free Medicine",
                  color: "bg-green-100",
                },
                {
                  date: "20 Jul",
                  title: "Provide Free Medicine",
                  color: "bg-yellow-100",
                },
                {
                  date: "25 Jul",
                  title: "Provide Free Medicine",
                  color: "bg-purple-100",
                },
                {
                  date: "30 Jul",
                  title: "Provide Free Medicine",
                  color: "bg-orange-100",
                },
              ].map((event, index) => (
                <EventCard
                  key={index}
                  date={event.date}
                  title={event.title}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  color={event.color}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

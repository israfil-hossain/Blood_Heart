"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navbarLinks = [
  {
    id: 0,
    name: "Our Services",
    href: "/",
  },
  {
    id: 1,
    name: "How we do it",
    href: "#",
  },
  {
    id: 2,
    name: "Our Team",
    href: "#",
  }, 
];

export function NavbarLinks() {
  const location = usePathname();

  return (
    <div className="hidden md:flex justify-center items-center col-span-6 gap-x-2">
      <div className=" flex px-4 border border-primary py-1 rounded-full">
        {navbarLinks.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className={cn(
              location === item.href
                ? "text-green-500 font-bold"
                : "hover:text-green-500 hover:bg-opacity-76 hover:font-bold text-gray-700",
              "group flex items-center px-2 py-2 font-medium rounded-md"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

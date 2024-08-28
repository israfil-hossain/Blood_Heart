import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";
import { logohorizontal } from "@/app/assets";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-7">
      <div className="md:col-span-3 ">
        <Link href="/">
          {/* <Image
            src={logohorizontal}
            alt="logo"
            width={300}
            height={100}
            className="w-36 h-9"
          /> */}
          <span className="text-violet-700 font-[900] text-[22px]">Shopno</span>
          <span className="text-green-600 font-[800] text-[22px]">Chowea</span>
         
        </Link>
      </div>
      <NavbarLinks />
      <div className="flex items-center gap-x-2 ms-auto md:col-span-3">
        {/* <Button>Login</Button>
        <Button variant={"secondary"}>Register</Button> */}
        <div className="border border-spacing-2 border-green-400 bg-green-500 rounded-full px-6 py-2 text-white  hover:bg-background hover:font-bold cursor-pointer font-semibold">
          {`> Donate`}
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

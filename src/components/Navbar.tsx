import React from "react";
import Link from "next/link";
import Image from "next/image";
import brand_icon from "../../public/images/brand_logo.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const Navbar = () => {
    return (
      <header className="sticky top-0 z-50 text-slate-400 bg-[#b9223b] ">
        <div className="flex items-center justify-between py-4 px-4 sm:px-8 md:px-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={brand_icon}
              alt="logo"
              layout="intrinsic"
              width={80}
              height={80}
              className="cursor-pointer transition duration-300 ease-in-out transform hover:scale-110  "
            />
          </div>
  
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8 text-lg lg:text-xl hover:text-[#F2AE66] ">
            <Link href="/Blog" >
              Blog
            </Link>
            <Link href="/" >
              Home
            </Link>
            <Link href="/About" >
              About
            </Link>
            <Link href="/Contact" >
              Contact
            </Link>
          </nav>
  
          {/* Search Input */}
          <div className="hidden md:block w-[200px]">
            
          </div>
  
          {/* Mobile Menu Icon */}
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="white"
                  className="ml-auto"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <div className="py-20 px-8">
                
                    </div>
                  </SheetTitle>
                  <SheetDescription>
                    <nav className="space-y-4 text-center text-[#F2AE66] text-lg">
                      <Link href="/Blog" className="block">
                        Blog
                      </Link>
                      <Link href="/" className="block">
                        Home
                      </Link>
                      <Link href="/About" className="block">
                        About
                      </Link>
                      <Link href="/Contact" className="block">
                        Contact
                      </Link>
                    </nav>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    );
  };
  
  export default Navbar;




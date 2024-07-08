"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SignInButton, SignedIn, UserButton, useUser } from "@clerk/nextjs";

const Hero = () => {
    const {user,isSignedIn}=useUser();
  return (
    <div className="h-auto">
      <div className="flex h-[600px] border-b border flex-col items-left p-3 justify-center">
        <div className="text-3xl font-bold uppercase">
          Dreams <div className="text-6xl">Memorable Wedding?</div>
        </div>
        <div className="text-3xl font-bold uppercase">
          Use <div className="text-6xl">PlanWed.</div>
        </div>
      </div>

      <div className="h-[290px] md:h-[400px]  bg-cover bg-[url('/hero_banner.jpg')] flex w-full justify-between px-6 py-4">
        <SignInButton>
            {isSignedIn?
            <Button variant="outline">Plan Your Wed!</Button>
            :
            <Button variant="outline">Sign In</Button>
            
            
        }
        </SignInButton>
        <Button>Know More</Button>
      </div>
    </div>
  );
};

export default Hero;

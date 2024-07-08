"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { SignInButton, SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Header = () => {
  const { user, isSignedIn } = useUser();
  const router=useRouter();
  return (
    <div className="items-center z-[999] px-12 p-6 text-black bg-orange-400 shadow-xl flex justify-between w-full sticky top-0">
      <div className="cursor-pointer" onClick={()=>router.push("/")}>PlanWed</div>
      <div className="flex gap-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Interested In</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link href="/hotels" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Hotels & Restaurants
                  </NavigationMenuLink>
                </Link>
                <Link href="/decorations" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Decorations
                  </NavigationMenuLink>
                </Link>
                <Link href="/fireworks" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Fireworks
                  </NavigationMenuLink>
                </Link>
                <Link href="/others" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Others
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {isSignedIn ? (
          <SignedIn>
            <UserButton />
          </SignedIn>
        ) : (
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
        )}
      </div>
    </div>
  );
};

export default Header;

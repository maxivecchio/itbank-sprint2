import React from "react";
import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { buttonVariants } from "@/components/ui/button";
const Header = () => {
  return (
    <header className="fixed w-full z-50 p-3 bg-[#1a1a1a] h-14 flex items-center justify-between	 text-white">
      <div className="flex items-center">
        <img className="h-7" src="/logo.webp" alt="Rossum Logo" />
        <span className="font-bold ml-2 text-lg">
          <span className="logo_name">Rossum | </span>HomeBanking
        </span>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={`${buttonVariants({
            variant: "outline",
          })} bg-transparent`}
        >
          Juan R Gomez
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;

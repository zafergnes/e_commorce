import React from 'react'
import Logo from "./Logo";
import Search from "./Search";
import CardCount from "./CardCount";
import User from "./User";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-5 md:gap-10 px-3 md:px-10 h-16 bg-orange-600 text-slate-100">
      <Logo />
      <Search />
      <CardCount />
      <User />
      <HamburgerMenu />
    </div>
  );
};

export default Navbar
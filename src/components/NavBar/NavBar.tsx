import { ListChevronsDownUp, ListChevronsUpDown } from "lucide-react";
import navData from "./nav.json";
import { useState } from "react";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const links = navData.map((link) => (
    <a
      key={link.id}
      href={link.path}
      className={`${navOpen ? "hover:bg-rose-400 hover:text-white" : "hover:bg-white hover:text-rose-400"} rounded-xl px-2 p-1  transition-all duration-500 hover:scale-105 font-semibold`}
    >
      {link.name}
    </a>
  ));

  return (
    <nav className="text-gray-700 bg-rose-400 p-4 flex justify-between items-center fixed w-full z-50">
      <div
        className="flex items-center gap-x-4 relative"
        onClick={() => setNavOpen(!navOpen)}
      >
        {navOpen ? (
          <ListChevronsDownUp
            className="lg:hidden cursor-pointer"
            strokeWidth={3}
            size={37}
          />
        ) : (
          <ListChevronsUpDown
            className="lg:hidden cursor-pointer"
            strokeWidth={3}
            size={37}
          />
        )}

        <ul
          className={`lg:hidden border-2 text-rose-400 font-mono text-2xl bg-white flex flex-col gap-2 p-4 shadow-xl rounded-xl absolute transition-all ease-in-out duration-500 min-w-42 ${navOpen ? "top-15" : "-top-80"}`}
        >
          {links}
        </ul>

        <a href="/" className="text-2xl md:text-3xl font-bold font-serif">
          React Ecosystem
        </a>
      </div>
      <ul className="font-mono space-x-4 text-2xl lg:flex hidden items-center">
        {links}
      </ul>
      <a href="/">
        <p className="text-2xl font-bold font-serif">Sign In</p>
      </a>
    </nav>
  );
};

export default NavBar;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiTwotoneBug } from "react-icons/ai";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { lebel: "Dashboard", href: "/" },
    { lebel: "Issues", href: "/issues" },
    { lebel: "Misc", href: "/Misc" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiTwotoneBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              "text-zinc-800 font-bold": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover: text-zinc-800 transition-colors": true,
            })}
            href={link.href}
          >
            {link.lebel}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

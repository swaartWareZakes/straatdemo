"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DropdownMenu = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Works", path: "/works" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <ul className="sf-menu">
      {menuItems.map((item, i) => (
        <li key={i}>
          <Link href={item.path}>
            <span className={pathname === item.path ? "active-page" : ""}>
              {item.name}
            </span>
          </Link>
        </li>
      ))}

      {/* Uncomment for future dropdown support
      <li className="menu-item-has-children">
        <a href="#" className="sf-with-ul">
          <span>More</span>
        </a>
        <ul className="sub-menu mega">
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/team">Team</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
        </ul>
      </li>
      */}
    </ul>
  );
};

export default DropdownMenu;

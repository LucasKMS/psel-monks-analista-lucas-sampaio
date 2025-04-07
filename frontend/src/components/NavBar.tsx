"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const menuItems = [
  { label: "Home", href: "#hero" },
  { label: "Locais", href: "#destinos" },
  { label: "Baixe o App", href: "#app" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-50 bg-[#2d2d2d] text-zinc-300 mt-2">
      <div className="flex items-center justify-between px-6 py-4 md:px-16">
        <div className="text-4xl font-bold text-white mr-6">.monks</div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FiX size={24} color="white" />
            ) : (
              <FiMenu size={24} color="white" />
            )}
          </button>
        </div>

        <ul className="hidden md:flex space-x-8 font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="hover:font-bold transition-all text-xl">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col bg-[#dfbbfe] px-6 py-4 space-y-2">
          {menuItems.map((item, index) => (
            <li key={index} className="font-bold text-black">
              <Link href={item.href} onClick={() => setIsOpen(false)}>
                • {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

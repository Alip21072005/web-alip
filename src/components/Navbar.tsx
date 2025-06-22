"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Dapatkan rute saat ini

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-gray-200 dark:border-gray-700 px-4 py-2.5 absolute w-full z-10">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        {/* Logo/Nama Situs */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
            Alip Maulana
          </span>
        </Link>

        {/* Tombol Hamburger untuk Mobile */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-hamburger"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Menu Navigasi */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-hamburger"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${
                  pathname === "/"
                    ? "text-blue-700 dark:text-blue-500" // Warna biru jika aktif
                    : "text-gray-900 dark:text-gray-400" // Warna default jika tidak aktif
                }`}
                aria-current={pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects" // Sesuaikan dengan nama folder Anda (project/projects)
                className={`block py-2 px-3 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${
                  pathname === "/projects" // Bandingkan dengan rute
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900 dark:text-gray-400"
                } dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/organization"
                className={`block py-2 px-3 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${
                  pathname === "/organization"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900 dark:text-gray-400"
                } dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                Organizations
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className={`block py-2 px-3 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${
                  pathname === "/skills"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900 dark:text-gray-400"
                } dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`block py-2 px-3 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${
                  pathname === "/services"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900 dark:text-gray-400"
                } dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block py-2 px-3 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${
                  pathname === "/contact"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900 dark:text-gray-400"
                } dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
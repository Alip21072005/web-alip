"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const navClass = (path: string) => {
        const isActive = pathname === path;
        return `
      relative px-3 py-2 font-medium transition-colors duration-300
      ${isActive ? "text-blue-600 font-semibold" : "text-gray-900 dark:text-white hover:text-blue-600"}
      group
    `;
    };

    return (
        <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
                <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
                    Alip Maulana
                </Link>
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <Link href="/" className={navClass("/")}>
                            <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100 
                dark:group-hover:text-blue-400
                dark:group-hover:font-semibold
                ">
                                Home
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/skills" className={navClass("/skills")}>
                            <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100
                dark:group-hover:text-blue-400
                dark:group-hover:font-semibold
                ">
                                Skills
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/organization" className={navClass("/organization")}>
                            <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100
                dark:group-hover:text-blue-400
                dark:group-hover:font-semibold
                ">
                                Organization
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className={navClass("/services")}>
                            <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100
                dark:group-hover:text-blue-400
                dark:group-hover:font-semibold
                ">
                                Services
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

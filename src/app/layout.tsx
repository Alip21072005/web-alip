"use client";
import { Geist } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistFont = Geist({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistFont.className} bg-black text-white`}>
        {/* Navigation Bar */}
        <nav className="bg-transparent fixed top-0 left-0 w-full z-10 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-4">
                <a href="/" className="flex items-center text-xl font-bold text-white">
                  <span>ALIP MAULANA</span>
                </a>
                <div className="hidden md:flex md:space-x-8">
                  <a href="/" className="text-white hover:text-blue-500 transition-all py-2 px-3">Home</a>
                  <a href="/about" className="text-white hover:text-blue-500 transition-all py-2 px-3">About</a>
                  <a href="/contact" className="text-white hover:text-blue-500 transition-all py-2 px-3">Contact</a>
                </div>
              </div>

              {/* Mobile Hamburger Icon */}
              <div className="md:hidden">
                <button
                  className="text-white"
                  aria-label="Toggle Menu"
                  onClick={() => { }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        {children}


        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 py-12">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold">De Code</h3>
              <p className="mt-3">Thank you for visiting our website.</p>
              <p className="mt-2">© 2025 All rights reserved.</p>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold">Social Media</h3>
              <ul className="mt-3 space-y-2">
                <li><a href="https://instagram.com/_alip.pppp" className="hover:text-indigo-400 transition">Instagram</a></li>
                <li><a href="https://github.com/Alip21072005" className="hover:text-indigo-400 transition">Github</a></li>
                <li><a href="https://www.tiktok.com/@akualip_2" className="hover:text-indigo-400 transition">Tiktok</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold">Customer Service</h3>
              <ul className="mt-3 space-y-2">
                <li><a href="#" className="hover:text-indigo-400 transition">FAQs</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold">Stay Updated</h3>
              <div className="mt-4 flex">
                <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-l-lg border border-gray-500 bg-gray-700 text-white" />
                <button className="px-4 py-3 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </footer>

        {/* Footer bottom */}
        <div className="bg-gray-900 text-center text-gray-400 py-4 text-sm">
          Made with ❤️ by Alip Maulana
        </div>
      </body>
    </html>
  );
}

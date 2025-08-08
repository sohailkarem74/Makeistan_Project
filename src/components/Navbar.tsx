"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

const navItems = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'About',
      dropdown: [
        { name: 'About Us', href: '/about', icon: '📖', title: 'About MAKEISTAN' },
        { name: 'Our Team', href: '/team', icon: '👥', title: 'About Team' }
      ]
    },
    {
      name: 'Labs',
      dropdown: [
        { name: 'Climate Innovation Lab', href: '/labs/climate', icon: '🌱' },
        { name: 'Green Energy Lab', href: '/labs/energy', icon: '⚡' },
        { name: 'Robotics & AI Lab', href: '/labs/robotics', icon: '🤖' }
      ]
    },
    {
      name: 'Fellowship Programs',
      href: '/programs'
    },
    {
      name: 'Blog',
      href: '/blog'
    },
    {
      name: 'Our Work',
      href: '/work'
    }
];
  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-md z-50 shadow-lg border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto pl-1 pr-4 sm:pr-6 lg:pr-8">
          <div className="flex items-center h-20">
            {/* Logo - Left Side */}
            <div className="flex items-center h-full">
              <Link href="/" className="flex items-center">
                <img 
                  src="/images/logo/llogo.png" 
                  alt="MAKEISTAN" 
                  className="h-40 w-auto"
                />
              </Link>
            </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => {
                  if (hoverTimeout) {
                    clearTimeout(hoverTimeout);
                    setHoverTimeout(null);
                  }
                  setActiveDropdown(item.name);
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setActiveDropdown(null);
                  }, 150);
                  setHoverTimeout(timeout);
                }}
              >
                {item.dropdown ? (
                  <>
                    <button className="px-4 py-2 text-white hover:text-gray-200 font-medium transition-colors duration-300">
                      {item.name}
                    </button>
                    {activeDropdown === item.name && (
                      <div 
                        className="absolute left-0 mt-1 w-64 bg-gray-800/95 backdrop-blur-md rounded-lg shadow-2xl border border-gray-600 overflow-hidden transform opacity-0 scale-95 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100"
                        onMouseEnter={() => {
                          if (hoverTimeout) {
                            clearTimeout(hoverTimeout);
                            setHoverTimeout(null);
                          }
                          setActiveDropdown(item.name);
                        }}
                        onMouseLeave={() => {
                          const timeout = setTimeout(() => {
                            setActiveDropdown(null);
                          }, 150);
                          setHoverTimeout(timeout);
                        }}
                      >
                        <div className="py-2">
                          {item.dropdown.map((dropdownItem, index) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              target={dropdownItem.target || '_self'}
                              title={dropdownItem.title || dropdownItem.name}
                              className="group/item flex items-center px-4 py-3 text-white hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:text-gray-200 transition-all duration-300 transform hover:translate-x-1"
                            >
                              <span className="text-xl mr-3 opacity-70 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all duration-300">
                                {dropdownItem.icon}
                              </span>
                              <span className="font-medium">{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || '/'}
                    className="px-4 py-2 text-white hover:text-gray-200 font-medium transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name} className="px-3 py-2">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      className="w-full text-left text-base font-medium text-white hover:text-gray-200"
                    >
                      {item.name}
                    </button>
                    {activeDropdown === item.name && (
                      <div className="mt-2 pl-4 border-l-2 border-gray-700">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center py-2 text-sm text-white hover:text-gray-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="mr-2">{dropdownItem.icon}</span>
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href || '/'}
                    className="block text-base font-medium text-white hover:text-gray-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
];

export default function Navigation() {
  const [activeLink, setActiveLink] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center p-4">
      <nav className={`group/nav flex items-center gap-1 rounded-full border p-1 transition-all duration-500 backdrop-blur-md ${
        isScrolled 
          ? 'bg-black/90 border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]' 
          : 'bg-black/80 border-white/10 shadow-[0_1px_20px_rgba(0,0,0,0.15)]'
      }`}>
        {navItems.map((item, index) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={(e) => {
              handleSmoothScroll(e, item.href);
              setActiveLink(item.name);
            }}
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`group/link relative rounded-full px-4 py-1.5 text-sm font-medium font-body transition-all duration-300 overflow-hidden ${
              activeLink === item.name
                ? 'bg-primary text-primary-foreground scale-105 shadow-[0_0_20px_rgba(128,242,95,0.3)]'
                : 'text-muted hover:text-foreground hover:scale-105'
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <span className="relative z-10 transition-transform duration-300 group-hover/link:scale-110">
              {item.name}
            </span>
            
            {/* Hover background effect */}
            <div className={`absolute inset-0 bg-primary/20 rounded-full transition-all duration-300 ${
              hoveredItem === item.name && activeLink !== item.name
                ? 'scale-100 opacity-100' 
                : 'scale-0 opacity-0'
            }`}></div>
            
            {/* Active indicator with pulse */}
            {activeLink === item.name && (
              <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-20"></div>
            )}
            
            {/* Ripple effect on click */}
            <div className="absolute inset-0 bg-primary/30 rounded-full scale-0 group-active/link:scale-150 transition-transform duration-200 opacity-0 group-active/link:opacity-100"></div>
          </Link>
        ))}
        
        <Link
          href="#contact"
          onClick={(e) => handleSmoothScroll(e, '#contact')}
          onMouseEnter={() => setHoveredItem('contact')}
          onMouseLeave={() => setHoveredItem(null)}
          className="group/contact relative rounded-full px-4 py-1.5 text-sm font-medium font-body transition-all duration-300 bg-white text-black hover:bg-gray-200 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] overflow-hidden"
        >
          <span className="relative z-10 transition-transform duration-300 group-hover/contact:scale-110">
            Contact
          </span>
          
          {/* Hover glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-primary/20 to-white rounded-full transition-all duration-300 ${
            hoveredItem === 'contact' 
              ? 'scale-100 opacity-100' 
              : 'scale-0 opacity-0'
          }`}></div>
          
          {/* Click ripple effect */}
          <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-active/contact:scale-150 transition-transform duration-200 opacity-0 group-active/contact:opacity-100"></div>
        </Link>
        
        {/* Navigation background glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </nav>
    </header>
  );
}
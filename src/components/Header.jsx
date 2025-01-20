import { useEffect } from 'react';
import '../styles/header.css'

const Header = () => {
  // Mobile Menu Toggle
  useEffect(() => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    const toggleMenu = () => {
      navLinks.classList.toggle('active');
    };

    const closeMenu = () => {
      navLinks.classList.remove('active');
    };

    menuToggle.addEventListener('click', toggleMenu);
    navItems.forEach(item => {
      item.addEventListener('click', closeMenu);
    });

    return () => {
      menuToggle.removeEventListener('click', toggleMenu);
      navItems.forEach(item => {
        item.removeEventListener('click', closeMenu);
      });
    };
  }, []);

   // Header Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="header">
        <div className="logo">
          <a href="#home" className="logo-link">mindFlow</a>
        </div>
        <button className="menu-toggle" id="menu-toggle">&#9776;</button>
        <nav>
          <ul className="nav-links">
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header

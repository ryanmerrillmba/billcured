import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

function Header({ minimal = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  // Minimal header for landing pages - just logo, no navigation
  if (minimal) {
    return (
      <header className="header header--minimal">
        <div className="container header-container">
          <Link to="/" className="logo">
            <img src="/images/logo.png?v=2" alt="BillCured" className="logo-img" />
          </Link>
        </div>
      </header>
    )
  }

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <img src="/images/logo.png?v=2" alt="BillCured" className="logo-img" />
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <NavLink to="/" onClick={closeMobileMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMobileMenu}>About</NavLink>
          <NavLink to="/blog" onClick={closeMobileMenu}>Blog</NavLink>
          <NavLink to="/faq" onClick={closeMobileMenu}>FAQ</NavLink>
          <NavLink to="/resources" onClick={closeMobileMenu}>Resources</NavLink>
          <Link to="/product" className="btn btn-primary nav-cta" onClick={closeMobileMenu}>
            Get the Blueprint
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

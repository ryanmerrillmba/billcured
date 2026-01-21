import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <span className="logo-text">BillCured</span>
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

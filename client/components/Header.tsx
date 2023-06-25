import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header-container">
      <img
        src="server/Public/headerImage.webp"
        alt="logo"
        className="header-logo"
      />

      <Link to="/about" className="header-about-us">
        About Us
      </Link>
      <Link to="/faq" className="header-faq">
        FAQs
      </Link>
      <Link to="/login" className="header-login">
        Login
      </Link>
    </div>
  )
}

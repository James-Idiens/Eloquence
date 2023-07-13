import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="flex items-center justify-between py-0 px-6">
      <img
        src="server/Public/headerImage.webp"
        alt="logo"
        className="h-16 sm:h-16 md:h-32 lg:h-48 -ml-2 -my-10"
      />
      <div className="flex space-x-8">
        <Link to="/about" className="text-white text-4xl">
          About Us
        </Link>
        <Link to="/faq" className="text-white text-4xl ml-4">
          FAQs
        </Link>
        <Link to="/login" className="text-white text-4xl">
          Login
        </Link>
      </div>
    </div>
  )
}

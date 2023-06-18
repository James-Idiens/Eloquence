import Header from './Header'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      <Header />
      <div></div>
      <div className="laptop-image-container">
        <img
          className="laptop-image"
          src="server/Public/laptopImage.webp"
          alt="laptop displaying application"
        ></img>
        <Link to="/novels" className="start-writing-button">
          Start Writing
        </Link>
      </div>
    </div>
  )
}

import Header from '../components/Header'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="grid md:grid-cols-2 items-center justify-center">
        <div className="md:col-start-1 md:col-end-2">
          <img
            className="w-full"
            src="server/Public/laptopImage.webp"
            alt="laptop"
          />
        </div>
        <div className="md:col-start-2 text-center mt-4 md:mt-0">
          <Link
            to="/novels"
            className="bg-blue-300 hover:bg-blue-400 text-black font-bold py-4 px-14 rounded-full text-4xl"
          >
            Start Writing
          </Link>
        </div>
      </div>
    </div>
  )
}

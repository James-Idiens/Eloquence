import Header from '../components/Header'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      <Header />
      <div></div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-8">
        <img
          className="h-30vh w-auto md:w-1/3 mx-auto md:mx-0 md:mr-8 mb-8 md:mb-0 max-w-md"
          src="server/Public/laptopImage.webp"
          alt="laptop displaying application"
        />
        <Link
          to="/novels"
          className="bg-blue-300 hover:bg-blue-400 text-black font-bold py-4 px-14 rounded-full text-4xl"
        >
          Start Writing
        </Link>
      </div>
    </div>
  )
}

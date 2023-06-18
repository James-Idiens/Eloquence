import NovelForm from './NovelForm'
import Header from './Header'

function App() {
  return (
    <div>
      <Header />
      <div>
        <NovelForm />
      </div>
      <div className="laptop-image-container">
        <img
          className="laptop-image"
          src="server/Public/laptopImage.webp"
          alt="laptop displaying application"
        ></img>
      </div>
    </div>
  )
}

export default App

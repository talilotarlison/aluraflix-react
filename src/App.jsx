
import './App.css'
import Menu from "./componestes/menu/"
import BannerMain from "./componestes/BannerMain"
import Carousel from "./componestes/Carousel"
import Data from "./data/dados_iniciais.json"
import Footer from './componestes/Footer'

function App() {

  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain videoTitle={Data.categorias[0].videos[0].titulo}
        videoDescription="Como ser um Front and de sucesso!!"
        url={Data.categorias[0].videos[0].url} />

      <Carousel ignoreFirstVideo
        category={Data.categorias[0]}
      />

      <Carousel ignoreFirstVideo
        category={Data.categorias[1]}
      />
      <Carousel ignoreFirstVideo
        category={Data.categorias[2]}
      />
      <Carousel ignoreFirstVideo
        category={Data.categorias[3]}
      />
      <Carousel ignoreFirstVideo
        category={Data.categorias[4]}
      />
      <Carousel ignoreFirstVideo
        category={Data.categorias[5]}
      />

      <Footer />
    </div>
  )
}

export default App

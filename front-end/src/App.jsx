
import './App.css'
import Header from './components/Header'
import TopBar from './components/TopBar'
import HeroBanner from './components/HeroBanner'
import Destaque from './components/RoupaDestaque'
import Colecao from './components/Colecao'
import DestaqueEstacao from './components/DestaqueEstacao'
function App() {


  return (
    <>
    <TopBar/>
      <Header />
      <HeroBanner/>
      <Colecao/>
      <Destaque/>
      <DestaqueEstacao/>
    </>
  )
}

export default App

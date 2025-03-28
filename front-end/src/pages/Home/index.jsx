

import Header from '../../components/Header'
import TopBar from '../../components/TopBar'
import HeroBanner from '../../components/HeroBanner'
import Destaque from '../../components/RoupaDestaque'
import Colecao from '../../components/Colecao'
import DestaqueEstacao from '../../components/DestaqueEstacao'

import { useContext, useEffect } from 'react'
import { Context } from '../../Contexto/provider'


function Home() {

  return (
    <div >
      <Header/>
      <TopBar />
      <HeroBanner />
      <Colecao />
      <Destaque />

      <DestaqueEstacao />
    </div>


  )
}

export default Home

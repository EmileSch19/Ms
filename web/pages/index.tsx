import Head from 'next/head'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import Header from '@/src/components/Hearder'
import Form from '@/src/components/Form'
import Ticket from '@/src/components/Tickets'
import PucesInformation from '@/src/components/pucesInformation'
import Acceuil from '@/src/components/Acceuil'
import Present from '@/src/components/Presentation'
import Parcours from '@/src/components/Parcours/index'
import Footer from '@/src/components/Footer'
const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Bedrine GAME</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:image" content="https://www.bredrinegame.com/Logo_FactAuto.png"/>
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Un Nouvel Escape Game" />
            <meta property="og:url" content="https://bredrinegame.com/"></meta>
            <meta property="og:site_name" content="bredrinegame.com"></meta>
            <meta property="og:description" content="Vivez une expérience escape game sous en horreur ou murder mistery" />
            <meta name="description" content="Vivez une expérience escape game sous en horreur ou murder mistery" />
            <meta name="keywords" content="secape, game, escape game, jeu, lyon, bedrine, horreur, murder, horror, mystery, meurtre, serial, killer"></meta> 
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.className}`}>

        <Header/>
        <Acceuil/>
        <Present/>
        <Ticket/>
        <PucesInformation/>
        <Parcours/>
        <Form/>
        <Footer/>
        
      </main>
    </>
  )
}

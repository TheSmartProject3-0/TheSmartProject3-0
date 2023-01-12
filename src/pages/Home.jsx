import React from 'react'
// import Form from '../components/Form'
// import LeftCard from '../components/LeftCard'
// import RightCard from '../components/RightCard'
// import Carrusel from '../components/Carrusel'
import {
  LeftCard,
  RightCard,
  Carrusel,
  Form,
  Hero
} from '../components'

function Home() {
  return (
    <>
      <Hero />
      <Carrusel />
      <RightCard />
      <LeftCard />
      <Form />
    </>
  )
}

export default Home
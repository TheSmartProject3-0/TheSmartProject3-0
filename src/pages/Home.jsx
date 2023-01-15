import React from 'react'
import { Outlet } from 'react-router-dom'
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
      <Outlet />
      <Carrusel />
      <RightCard />
      <LeftCard />
      <Form />
    </>
  )
}

export default Home
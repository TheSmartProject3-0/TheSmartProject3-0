import React from 'react'
import { Carousel } from 'flowbite-react/lib/cjs/components/Carousel'

const Carrusel = () => {
  return (
<div className=" h-56 sm:h-64 xl:h-96 2xl:h-96 rounded-none">
  <Carousel slideInterval={5000} className='rounded-none'>
    <img
      src="imagenes/banner-blackdrops.png"
      alt="..."
    />
    <img
      src="imagenes/banner-neomito.png"
      alt="..."
    />
    <img
      src="imagenes/banner-talgidi.png"
      alt="..."
    />
    <img
      src="imagenes/banner-vescis.png"
      alt="..."
    />
    <img
      src="imagenes/banner-jurisconsulta.png"
      alt="..."
    />
  </Carousel>
</div>
  )
}

export default Carrusel
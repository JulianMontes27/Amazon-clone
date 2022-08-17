import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {  
  return (
    <div className='home'>
        <div className='home__container'>
            <img 
            className='home__image' 
            src='https://m.media-amazon.com/images/S/sonata-images-prod/ACQ_HO_T1/89aa0cfb-43bf-4651-afd5-9ce43a831060._UR3000,600_.jpeg'/>

        <div className='home__row'>
          <Product 
            id='1234567891'
            title='The Lean Startup' price={29.99}
            image='https://pictures.abebooks.com/inventory/md/md31240124767.jpg'
            rating={5}
            />

          <Product
            id='1234567891'
            title='The Lean Startup' price={19.99}
            image='https://pictures.abebooks.com/inventory/md/md31240124767.jpg'
            rating={5}
          />
        </div>

        <div className='home__row'>
          <Product
          id='1234567891'
          title='The Lean Startup' price={29.99}
          image='https://pictures.abebooks.com/inventory/md/md31240124767.jpg'
          rating={5}
          />

          <Product
          id='1234567891'
          title='The Lean Startup' price={29.99}
          image='https://pictures.abebooks.com/inventory/md/md31240124767.jpg'
          rating={5}
          />

          <Product
          id='1234567891'
          title='The Lean Startup' price={29.99}
          image='https://pictures.abebooks.com/inventory/md/md31240124767.jpg'
          rating={5}
          />
        </div>

        <div className='home__row'>
        <Product
        id='1234567891'
        title='The Lean Startup' price={29.99}
        image='https://pictures.abebooks.com/inventory/md/md31240124767.jpg'
        rating={5}
        />

        </div>
      </div>
    </div>
  )
}

export default Home


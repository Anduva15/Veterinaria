import React, { Fragment } from 'react'
import { Header } from './components/header'
import { Slides } from './components/slides'
import { Services } from './components/services'
import { Membresia } from './components/membresia'
import { Footer } from './components/footer'


export default function App() {
    return (
      <Fragment>
          <div>
              <Header/>
              <Slides/>
              <Services/>
              <Membresia/>
              <Footer/>
          </div>
       </Fragment>
    )
}

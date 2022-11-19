import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

export default function main(props) {
  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  )
}

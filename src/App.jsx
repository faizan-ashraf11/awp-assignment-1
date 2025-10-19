import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Footer, { contactInfo } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12">
        <About />
        <Projects />
      </main>
      <Footer info={contactInfo} />
    </div>
  )
}

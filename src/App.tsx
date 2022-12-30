import './App.scss'
import { Blog, Brand, CTA, FAQGPT3, Features, Footer, Header, Navbar, Possibility } from './components'

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <FAQGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App

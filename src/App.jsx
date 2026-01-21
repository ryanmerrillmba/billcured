import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components'
import { Home, About, FAQ, Resources, Product, Privacy, Terms } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/product" element={<Product />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App

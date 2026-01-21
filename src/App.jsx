import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components'
import { Home, About, FAQ, Resources } from './pages'

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
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App

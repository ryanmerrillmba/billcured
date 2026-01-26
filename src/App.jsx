import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Header, Footer } from './components'
import { Home, About, FAQ, Resources, Product, Privacy, Terms, Blog, BlogPost, Success, FreeGuide } from './pages'

function AppLayout() {
  const location = useLocation()
  const isLandingPage = location.pathname.startsWith('/lp/')

  return (
    <>
      <Header minimal={isLandingPage} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/product" element={<Product />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/success" element={<Success />} />
          <Route path="/free-guide" element={<FreeGuide />} />
          <Route path="/lp/free-guide" element={<FreeGuide />} />
          <Route path="/lp/blueprint" element={<Product />} />
        </Routes>
      </main>
      {!isLandingPage && <Footer />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App

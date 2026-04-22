import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Header, Footer, ScrollToTop } from './components'
import { Home, About, FAQ, Resources, Product, Privacy, Terms, Success, FreeGuide } from './pages'

const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))

function AppLayout() {
  const location = useLocation()
  const isLandingPage = location.pathname.startsWith('/lp/')

  return (
    <>
      <ScrollToTop />
      <Header minimal={isLandingPage} />
      <main>
        <Suspense fallback={<div className="page-loading">Loading...</div>}>
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
        </Suspense>
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

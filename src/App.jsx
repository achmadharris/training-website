import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Shop from './pages/Shop.jsx'
import Privacy from './pages/Privacy.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App

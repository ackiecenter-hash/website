import { Route, Routes } from "react-router-dom"

import { Layout } from "./components/layout/Layout"
import { About } from "./pages/About"
import { Articles } from "./pages/Articles"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { ProductDetail } from "./pages/ProductDetail"
import { Products } from "./pages/Products"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App

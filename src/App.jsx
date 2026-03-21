import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import CateringPage from './pages/CateringPage'
import ContactPage from './pages/ContactPage'
import QuoteRequestPage from './pages/QuoteRequestPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="ueber-ramiro" element={<AboutPage />} />
        <Route path="dienstleistungen" element={<ServicesPage />} />
        <Route
          path="dienstleistungen/:serviceSlug"
          element={<ServiceDetailPage />}
        />
        <Route path="catering" element={<CateringPage />} />
        <Route path="kontakt" element={<ContactPage />} />
        <Route path="offerte" element={<QuoteRequestPage />} />
      </Route>
    </Routes>
  )
}

export default App
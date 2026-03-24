import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ServiceDetailPage from './pages/ServiceDetailPage.jsx'
import CateringPage from './pages/CateringPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import QuoteRequestPage from './pages/QuoteRequestPage.jsx'

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
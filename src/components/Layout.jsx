import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import VirtualAssistant from './VirtualAssistant'
import { useLanguage } from '../context/LanguageContext'

function Layout() {
  const { language } = useLanguage()

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <VirtualAssistant language={language} />
    </>
  )
}

export default Layout
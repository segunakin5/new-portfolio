import React, { useEffect, useState, useCallback } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingNav from './components/FloatingNav.jsx'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [notification, setNotification] = useState(null)

  const sectionIds = ['home','about','projects','contact']

  const showNotification = useCallback((message, type='info') => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 4000)
  }, [])

  // Observe scroll position to update active nav
  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const onScroll = () => {
      let current = ''
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 200) current = s.id
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Reveal sections
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('revealed'))
    }, { threshold: .1, rootMargin: '0px 0px -100px 0px' })
    document.querySelectorAll('section').forEach(el => io.observe(el))
    const hero = document.querySelector('.hero'); if (hero) hero.classList.add('revealed')
    return () => io.disconnect()
  }, [])

  return (
    <>
      {notification && (
        <div style={{
          position:'fixed',top:20,right:20,background: notification.type==='success' ? 'linear-gradient(135deg,#34d399,#10b981)' : notification.type==='error' ? 'linear-gradient(135deg,#ef4444,#dc2626)' : 'linear-gradient(135deg,#60a5fa,#3b82f6)',
          color:'#fff',padding:'1rem 1.25rem',borderRadius:12,boxShadow:'0 10px 25px rgba(0,0,0,.35)',zIndex:10000
        }}>{notification.message}</div>
      )}

      <Navbar sectionIds={sectionIds} activeSection={activeSection} />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contact onSubmitOk={() => showNotification('Message sent (demo).', 'success')} onSubmitFail={(m)=>showNotification(m,'error')}/>
      <FloatingNav
        activeSection={activeSection}
        onNavigate={(id)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'})}
      />
      <Footer />
    </>
  )
}

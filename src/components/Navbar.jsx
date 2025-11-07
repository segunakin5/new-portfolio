import React, { useEffect, useState } from 'react'

export default function Navbar({ sectionIds=[], activeSection }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })
    setOpen(false)
  }

  return (
    <nav className="navbar" style={{borderBottomColor: scrolled ? 'rgba(255,255,255,.15)' : 'rgba(255,255,255,.1)'}}>
      <div className="nav-container">
        <div className="nav-brand"><span>Ayomide</span></div>

        <ul className={`nav-menu ${open ? 'active' : ''}`}>
          {sectionIds.map(id => (
            <li key={id}>
              <a href={`#${id}`} className="nav-link" onClick={(e)=>{e.preventDefault(); goTo(id)}}
                 style={{color: activeSection===id ? '#60a5fa' : undefined}}>
                {id[0].toUpperCase()+id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className={`hamburger ${open ? 'active':''}`} onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu" role="button">
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  )
}

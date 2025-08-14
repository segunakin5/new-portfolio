import React, { useState } from 'react'

export default function Contact({ onSubmitOk = ()=>{}, onSubmitFail = ()=>{} }) {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [busy, setBusy] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // demo-only validation
    if (!form.name || !form.email || !form.subject || !form.message) {
      onSubmitFail('Please fill all fields.')
      return
    }
    setBusy(true)
    setTimeout(() => {
      setBusy(false)
      onSubmitOk()
      setForm({ name:'', email:'', subject:'', message:'' })
    }, 800)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Let's Work <span className="gradient-text">Together</span></h2>
          <p className="section-subtitle">Ready to bring your ideas to life? Let's discuss your next project</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <a href="mailto:segunakintoye5@gmail.com">segunakintoye5@gmail.com</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <a href="tel:+2347086905489">+234 708 690 5489</a>
                <a href="tel:+2348107917981">+234 810 791 7981</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <div className="contact-details">
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/ayomide-akintoye-0b123b267" target="_blank" rel="noreferrer">Connect with me</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={onChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={onChange} required />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={onChange} required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" value={form.message} onChange={onChange} required />
              </div>
              <button type="submit" className="submit-btn" disabled={busy}>
                <span>{busy ? 'Sending…' : 'Send Message'}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

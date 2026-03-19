import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '16px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: scrolled ? 'rgba(13,13,20,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--accent)' }}>
        JG
      </span>
      <div style={{ display: 'flex', gap: '32px' }}>
        {['About', 'Projects', 'Contact'].map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.9rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  )
}

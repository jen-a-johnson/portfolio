import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
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
      padding: '18px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: scrolled ? 'rgba(250,245,238,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <span style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 900,
        fontSize: '1.3rem',
        color: scrolled ? 'var(--accent)' : 'var(--yellow)',
        transition: 'color 0.3s',
        letterSpacing: '-0.02em',
      }}>
        JJ
      </span>
      <div style={{ display: 'flex', gap: '36px' }}>
        {['About', 'Projects', 'Contact'].map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              color: scrolled ? 'var(--text-muted)' : 'rgba(245,237,224,0.75)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = scrolled ? 'var(--text)' : '#f5ede0'}
            onMouseLeave={e => e.target.style.color = scrolled ? 'var(--text-muted)' : 'rgba(245,237,224,0.75)'}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  )
}

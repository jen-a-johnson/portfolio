export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      maxWidth: '960px',
      margin: '0 auto',
    }}>
      <div>
        <p style={{
          color: 'var(--accent)',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontSize: '0.85rem',
          marginBottom: '16px',
          fontFamily: "'Inter', sans-serif",
        }}>
          Hi, I&apos;m
        </p>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
          fontWeight: 800,
          lineHeight: 1.05,
          marginBottom: '24px',
          color: 'var(--text)',
        }}>
          Jennifer Johnson
        </h1>
        <p style={{
          fontSize: 'clamp(1.05rem, 2.5vw, 1.3rem)',
          color: 'var(--text-muted)',
          maxWidth: '560px',
          marginBottom: '40px',
          lineHeight: 1.8,
        }}>
          I build AI-powered tools that put the power of technology in the hands of non-technical teams —
          taking ideas from prototype to production.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a
            href="#projects"
            style={{
              background: 'var(--accent)',
              color: '#fff',
              padding: '12px 28px',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '0.95rem',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            View Projects
          </a>
          <a
            href="#contact"
            style={{
              border: '1.5px solid var(--border)',
              color: 'var(--text)',
              padding: '12px 28px',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '0.95rem',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.target.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.target.style.borderColor = 'var(--border)'}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

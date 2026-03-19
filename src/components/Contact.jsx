export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--hero-bg)', borderTop: '6px solid var(--yellow)' }}>
      <div className="section-container" style={{ textAlign: 'center' }}>
        <h2 className="section-title light">Get In <span style={{ color: 'var(--yellow)' }}>Touch</span></h2>
        <p style={{
          color: 'rgba(245,237,224,0.65)',
          fontSize: '1.15rem',
          maxWidth: '480px',
          margin: '0 auto 48px',
          lineHeight: 1.8,
        }}>
          Interested in working together or just want to talk AI and product? My inbox is open.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="mailto:jagfaris@icloud.com"
            style={{
              background: 'var(--yellow)',
              color: 'var(--hero-bg)',
              padding: '15px 36px',
              borderRadius: '4px',
              fontWeight: 800,
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/jennifer-a-johnson-f/"
            target="_blank"
            rel="noreferrer"
            style={{
              border: '2px solid rgba(255,255,255,0.5)',
              color: '#fff',
              padding: '14px 36px',
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.target.style.borderColor = '#fff'}
            onMouseLeave={e => e.target.style.borderColor = 'rgba(255,255,255,0.5)'}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jen-a-johnson"
            target="_blank"
            rel="noreferrer"
            style={{
              border: '2px solid rgba(255,255,255,0.5)',
              color: '#fff',
              padding: '14px 36px',
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.target.style.borderColor = '#fff'}
            onMouseLeave={e => e.target.style.borderColor = 'rgba(255,255,255,0.5)'}
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

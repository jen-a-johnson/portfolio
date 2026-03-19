export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--accent)' }}>
      <div className="section-container" style={{ textAlign: 'center' }}>
        <h2 className="section-title light">Get In <span>Touch</span></h2>
        <p style={{
          color: 'rgba(255,255,255,0.8)',
          fontSize: '1.15rem',
          maxWidth: '480px',
          margin: '0 auto 48px',
          lineHeight: 1.8,
        }}>
          Interested in working together or just want to talk AI and product? My inbox is open.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="mailto:jennifer@example.com"
            style={{
              background: '#fff',
              color: 'var(--accent)',
              padding: '14px 36px',
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.target.style.opacity = '0.9'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            Send Email
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

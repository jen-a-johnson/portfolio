export default function Contact() {
  return (
    <section id="contact">
      <div className="section-container" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '1.05rem',
          maxWidth: '480px',
          margin: '0 auto 40px',
          lineHeight: 1.7,
        }}>
          Interested in working together or just want to talk AI and product? My inbox is open.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="mailto:jennifer@example.com"
            style={{
              background: 'var(--accent)',
              color: '#fff',
              padding: '12px 28px',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.95rem',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            Send Email
          </a>
          <a
            href="https://github.com/jen-a-johnson"
            target="_blank"
            rel="noreferrer"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--text)',
              padding: '12px 28px',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.95rem',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.target.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.target.style.borderColor = 'var(--border)'}
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

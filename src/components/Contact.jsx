import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="section-container">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>Let&apos;s talk.</h2>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1.05rem',
            maxWidth: '480px',
            marginBottom: '36px',
            lineHeight: 1.7,
          }}>
            Interested in working together or just want to talk AI and product? My inbox is open.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="mailto:jagfaris@icloud.com" className="btn btn-primary">
              Email me <span className="arrow">→</span>
            </a>
            <a href="https://www.linkedin.com/in/jennifer-a-johnson-f/" target="_blank" rel="noreferrer" className="btn btn-secondary">
              LinkedIn
            </a>
            <a href="https://github.com/jen-a-johnson" target="_blank" rel="noreferrer" className="btn btn-secondary">
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

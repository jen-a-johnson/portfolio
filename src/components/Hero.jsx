export default function Hero() {
  return (
    <section style={{
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      padding: '120px 40px 80px',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: '1040px', margin: '0 auto', width: '100%' }}>
        <p className="hero-in eyebrow" style={{ animationDelay: '0.05s', marginBottom: '20px' }}>
          Product Manager · SaaS B2B
        </p>
        <h1 className="hero-in" style={{
          animationDelay: '0.15s',
          fontSize: 'clamp(3rem, 8vw, 5.5rem)',
          fontWeight: 600,
          lineHeight: 1.02,
          letterSpacing: '-0.045em',
          marginBottom: '28px',
        }}>
          Jennifer Johnson
        </h1>
        <p className="hero-in" style={{
          animationDelay: '0.28s',
          fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
          color: 'var(--text-muted)',
          maxWidth: '560px',
          marginBottom: '40px',
          lineHeight: 1.6,
          letterSpacing: '-0.01em',
        }}>
          I build systems, automate the friction out of how teams work,
          and make sure everyone — technical or not — can keep up.
        </p>
        <div className="hero-in" style={{ animationDelay: '0.4s', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn btn-primary">
            View projects <span className="arrow">→</span>
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}

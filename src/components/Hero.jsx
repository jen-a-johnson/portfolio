export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'var(--hero-bg)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Big decorative circle */}
      <div style={{
        position: 'absolute',
        top: '-120px',
        right: '-120px',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        border: '1px solid rgba(245,239,230,0.08)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '-60px',
        right: '-60px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        border: '1px solid rgba(184,83,42,0.25)',
        pointerEvents: 'none',
      }} />
      {/* Accent block */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '6px',
        height: '40%',
        background: 'var(--accent-light)',
      }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%', position: 'relative' }}>
        <p style={{
          color: 'var(--accent-light)',
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          fontSize: '0.75rem',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <span style={{ display: 'inline-block', width: '32px', height: '2px', background: 'var(--accent-light)' }} />
          Hi, I&apos;m
        </p>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(4rem, 12vw, 8.5rem)',
          fontWeight: 900,
          lineHeight: 0.95,
          marginBottom: '8px',
          color: '#f5ede0',
          letterSpacing: '-0.03em',
        }}>
          Jennifer
        </h1>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(4rem, 12vw, 8.5rem)',
          fontWeight: 900,
          lineHeight: 0.95,
          marginBottom: '36px',
          WebkitTextStroke: '2px var(--accent)',
          color: 'transparent',
          letterSpacing: '-0.03em',
        }}>
          Johnson
        </h1>

        {/* Role pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: 'var(--accent)',
          color: '#fff',
          padding: '8px 20px',
          borderRadius: '99px',
          fontSize: '0.82rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '28px',
        }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--text-light)', flexShrink: 0 }} />
          Product Manager · SaaS B2B
        </div>

        <p style={{
          fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
          color: 'rgba(245,237,224,0.65)',
          maxWidth: '500px',
          marginBottom: '48px',
          lineHeight: 1.8,
          display: 'block',
        }}>
          I build systems, automate the friction out of how teams work,
          and make sure everyone — technical or not — can keep up.
        </p>

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <a href="#projects" style={{
            background: 'var(--accent)',
            color: '#fff',
            padding: '15px 36px',
            borderRadius: '6px',
            fontWeight: 800,
            fontSize: '0.85rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            View Projects
          </a>
          <a href="#contact" style={{
            border: '1px solid rgba(245,239,230,0.3)',
            color: 'var(--text-light)',
            padding: '15px 36px',
            borderRadius: '6px',
            fontWeight: 800,
            fontSize: '0.85rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--text-light)' }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(245,239,230,0.3)' }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

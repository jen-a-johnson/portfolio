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
      {/* Background accent circle */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(196,84,31,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%', position: 'relative' }}>
        <p style={{
          color: 'var(--gold)',
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          fontSize: '0.8rem',
          marginBottom: '24px',
        }}>
          Hi, I&apos;m
        </p>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(3.5rem, 10vw, 7rem)',
          fontWeight: 800,
          lineHeight: 1.0,
          marginBottom: '12px',
          color: '#f5ede0',
          letterSpacing: '-0.02em',
        }}>
          Jennifer
        </h1>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(3.5rem, 10vw, 7rem)',
          fontWeight: 800,
          lineHeight: 1.0,
          marginBottom: '40px',
          color: 'var(--accent)',
          letterSpacing: '-0.02em',
        }}>
          Johnson
        </h1>

        <div style={{
          width: '60px',
          height: '3px',
          background: 'var(--gold)',
          marginBottom: '32px',
        }} />

        <p style={{
          fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
          color: 'rgba(245,237,224,0.65)',
          maxWidth: '520px',
          marginBottom: '48px',
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
              padding: '14px 32px',
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.target.style.background = 'var(--accent-dark)'}
            onMouseLeave={e => e.target.style.background = 'var(--accent)'}
          >
            View Projects
          </a>
          <a
            href="#contact"
            style={{
              border: '1.5px solid rgba(245,237,224,0.3)',
              color: '#f5ede0',
              padding: '14px 32px',
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.target.style.borderColor = 'rgba(245,237,224,0.8)'}
            onMouseLeave={e => e.target.style.borderColor = 'rgba(245,237,224,0.3)'}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

const skills = [
  'AI / LLM Integration',
  'Prompt Engineering',
  'React',
  'Node.js',
  'Python',
  'Product Strategy',
  'Rapid Prototyping',
  'Stakeholder Enablement',
]

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg)' }}>
      <div className="section-container">
        <h2 className="section-title">About <span>Me</span></h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px',
          alignItems: 'start',
        }}>
          <div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '1.1rem', lineHeight: 1.9 }}>
              I specialize in bridging the gap between cutting-edge AI capabilities and the teams that need them most.
              My work focuses on designing and shipping tools that non-technical users can actually rely on —
              not just demos, but production-grade applications.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.9 }}>
              I&apos;ve taken multiple projects from zero-to-one: rough prototypes with real potential, shaped into
              durable products with thoughtful UX, reliable infrastructure, and measurable impact.
            </p>
          </div>
          <div>
            <p style={{
              color: 'var(--accent)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>
              Skills &amp; Focus Areas
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {skills.map(skill => (
                <span key={skill} style={{
                  background: 'var(--accent)',
                  color: '#fff',
                  padding: '8px 16px',
                  borderRadius: '3px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

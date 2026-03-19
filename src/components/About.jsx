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
    <section id="about" style={{ background: 'var(--surface)' }}>
      <div className="section-container">
        <h2 className="section-title">About <span>Me</span></h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px',
          alignItems: 'start',
        }}>
          <div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '1.05rem', lineHeight: 1.8 }}>
              I specialize in bridging the gap between cutting-edge AI capabilities and the teams that need them most.
              My work focuses on designing and shipping tools that non-technical users can actually rely on —
              not just demos, but production-grade applications.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              I&apos;ve taken multiple projects from zero-to-one: rough prototypes with real potential, shaped into
              durable products with thoughtful UX, reliable infrastructure, and measurable impact.
            </p>
          </div>
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Skills &amp; Focus Areas
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {skills.map(skill => (
                <span key={skill} style={{
                  background: 'var(--bg)',
                  border: '1.5px solid var(--border)',
                  color: 'var(--accent)',
                  padding: '6px 14px',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  fontWeight: 500,
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

const skills = [
  'AI / LLM Integration',
  'Prompt Engineering',
  'Workflow Automation',
  'Cross-tool Integration',
  'Product Strategy',
  'Team Enablement',
  'Customer Insights',
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
              I&apos;m a Product Manager at <strong style={{ color: 'var(--text)' }}>Craftable</strong>, a SaaS B2B company,
              where I do a lot more than manage a roadmap. I build systems. I find the friction in how teams work,
              then design and automate my way out of it — connecting tools, integrating AI, and shipping solutions
              that actually stick.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.9 }}>
              I&apos;m also the person who makes sure the whole team can keep up. I teach non-technical colleagues
              how to use AI as a real part of their workflow — not as a gimmick, but as leverage. I&apos;m curious,
              I build fast, and I care about impact you can measure.
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

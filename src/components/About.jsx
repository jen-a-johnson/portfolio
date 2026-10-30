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
              I&apos;m a Product Manager in the SaaS B2B space,
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
            {/* Quote callout block */}
            <div style={{
              background: 'var(--accent-soft)',
              borderLeft: '4px solid var(--accent)',
              padding: '24px 28px',
              borderRadius: '4px 10px 10px 4px',
              marginBottom: '32px',
            }}>
              <p style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--text)',
                lineHeight: 1.4,
              }}>
                "I&apos;m a generalist who builds — curious enough to explore, technical enough to ship."
              </p>
            </div>

            <p style={{
              color: 'var(--accent)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}>
              Skills &amp; Focus Areas
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {skills.map(skill => (
                <span key={skill} style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  padding: '9px 18px',
                  borderRadius: '99px',
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

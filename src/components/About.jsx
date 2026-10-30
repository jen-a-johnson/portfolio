import Reveal from './Reveal'

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
    <section id="about">
      <div className="section-container">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 className="section-title">A generalist who builds.</h2>
        </Reveal>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px',
          alignItems: 'start',
        }}>
          <Reveal>
            <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '1.05rem', lineHeight: 1.8 }}>
              I&apos;m a Product Manager in the SaaS B2B space,
              where I do a lot more than manage a roadmap. I build systems. I find the friction in how teams work,
              then design and automate my way out of it — connecting tools, integrating AI, and shipping solutions
              that actually stick.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              I&apos;m also the person who makes sure the whole team can keep up. I teach non-technical colleagues
              how to use AI as a real part of their workflow — not as a gimmick, but as leverage. I&apos;m curious,
              I build fast, and I care about impact you can measure.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <blockquote style={{
              borderLeft: '2px solid var(--text)',
              paddingLeft: '20px',
              marginBottom: '40px',
              fontSize: '1.2rem',
              fontWeight: 500,
              lineHeight: 1.5,
              letterSpacing: '-0.015em',
            }}>
              &ldquo;Curious enough to explore, technical enough to ship.&rdquo;
            </blockquote>

            <p className="eyebrow" style={{ marginBottom: '14px' }}>Focus areas</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {skills.map(skill => (
                <span key={skill} style={{
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

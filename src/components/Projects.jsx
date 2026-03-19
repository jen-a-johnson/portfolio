const projects = [
  {
    title: 'Escalation Autopilot',
    stat: '7 hrs → 30 min',
    description:
      'Customer escalations were taking 7+ hours to resolve — spanning customer care all the way to engineering — often closing as WAI without a real fix. I automated internal documentation across Notion, HubSpot, and Linear using Claude Code MCPs, cutting resolution time to 30 minutes of customer support work and significantly reducing cost.',
    tags: ['Claude Code', 'MCP', 'Notion', 'HubSpot', 'Linear'],
  },
  {
    title: 'Product Intelligence Hub',
    stat: 'Weeks reclaimed',
    description:
      'Consolidated five data sources — Pendo, Avoma, HubSpot, Slack, and Linear — into a single layer for product analysis. The team can now explore user feedback, deal blockers, and churn risk signals across every channel at once, saving weeks of manual discovery per research cycle.',
    tags: ['Pendo', 'Avoma', 'HubSpot', 'Slack', 'Linear'],
  },
  {
    title: 'Customer Pulse Dashboard',
    stat: 'C-suite visibility',
    description:
      'Built an internal dashboard for the Chief Customer Officer to monitor agent tone, performance, and customer sentiment in real time based on support ticket data. Turned a reactive process into a proactive one — leadership now has a live read on customer health without waiting for reports.',
    tags: ['Dashboard', 'Sentiment Analysis', 'Support Data'],
  },
  {
    title: 'AI Fluency Program',
    stat: 'Team-wide',
    description:
      'Taught my team how to use Claude as a real part of their daily workflow — from codebase review to feature speccing. The goal wasn\'t tool adoption for its own sake, but building genuine AI literacy so the team could move faster and think bigger without depending on engineering for every answer.',
    tags: ['Claude', 'AI Enablement', 'Team Training', 'Feature Speccing'],
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--surface)' }}>
      <div className="section-container">
        <h2 className="section-title">Selected <span>Projects</span></h2>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '32px',
          marginTop: '-24px',
        }}>
          <span style={{
            background: 'var(--hero-bg)',
            color: 'var(--gold)',
            padding: '6px 14px',
            borderRadius: '3px',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}>
            AI Enablement
          </span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '28px',
        }}>
          {projects.map(project => (
            <div key={project.title} style={{
              background: 'var(--card)',
              borderTop: '4px solid var(--accent)',
              borderRadius: '4px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              boxShadow: '0 2px 16px rgba(28,16,7,0.07)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(28,16,7,0.14)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(28,16,7,0.07)'
              }}
            >
              <div style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.75rem',
                fontWeight: 800,
                color: 'var(--accent)',
                lineHeight: 1,
              }}>
                {project.stat}
              </div>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: 'var(--text)',
                fontWeight: 700,
                fontSize: '1.2rem',
                lineHeight: 1.3,
              }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.93rem', lineHeight: 1.8, flex: 1 }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                    padding: '4px 10px',
                    borderRadius: '3px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    fontFamily: 'monospace',
                    letterSpacing: '0.03em',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

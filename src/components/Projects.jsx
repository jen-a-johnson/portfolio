const personalProjects = [
  {
    title: 'My Mortgage Buddy',
    stat: 'Loan options, side by side',
    description:
      'A closing-cost tool built for mortgage loan officers who need to quote fast and explain clearly. Build a fee sheet in minutes, then switch to presentation mode for a clean, side-by-side comparison of loan options — the view a loan officer actually walks a borrower through. Everything saves to Supabase.',
    tags: ['SvelteKit', 'Tailwind CSS', 'shadcn-svelte', 'Supabase'],
    demo: 'https://mymortgagebuddy.vercel.app/',
    github: 'https://github.com/jen-a-johnson/mymortgagebuddy',
  },
  {
    title: 'Tally',
    stat: 'Your wins, logged',
    description:
      'A task manager built for professionals who want a record of what they actually shipped. Complete a task and Claude automatically rewrites it as a polished achievement statement. Everything saves to Supabase. Generate a Win Recap at any time — ready to paste into a performance review, standup, or LinkedIn.',
    tags: ['Next.js', 'Claude API', 'Supabase', 'Vercel'],
    demo: 'https://tally-rouge.vercel.app/',
    github: 'https://github.com/jen-a-johnson/tally',
  },
]

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
    stat: '6 days → 2 hrs',
    description:
      'Discovery used to mean hours of Avoma call reviews, Pendo replay sessions, days waiting on internal teams to surface what they remembered, and more days coordinating customer calls — before a direction could even be decided. I consolidated Pendo, Avoma, HubSpot, Slack, and Linear into a single analysis layer. Now the full cycle takes under two hours.',
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
    <section id="projects" style={{ background: 'var(--green)' }}>
      <div className="section-container">
        <h2 className="section-title" style={{ color: '#f5ede0' }}>Selected <span style={{ color: 'var(--yellow)' }}>Projects</span></h2>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '32px',
          marginTop: '-24px',
        }}>
          <span style={{
            background: 'var(--yellow)',
            color: 'var(--hero-bg)',
            padding: '6px 16px',
            borderRadius: '99px',
            fontSize: '0.72rem',
            fontWeight: 800,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}>
            AI Enablement
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.15)' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '24px',
        }}>
          {projects.map(project => (
            <div key={project.title} style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderTop: '4px solid var(--yellow)',
              borderRadius: '4px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              transition: 'transform 0.2s, background 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
              }}
            >
              <div style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.75rem',
                fontWeight: 900,
                color: 'var(--yellow)',
                lineHeight: 1,
              }}>
                {project.stat}
              </div>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: '#f5ede0',
                fontWeight: 700,
                fontSize: '1.2rem',
                lineHeight: 1.3,
              }}>
                {project.title}
              </h3>
              <p style={{ color: 'rgba(245,237,224,0.7)', fontSize: '0.93rem', lineHeight: 1.8, flex: 1 }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: 'rgba(245,237,224,0.8)',
                    padding: '4px 10px',
                    borderRadius: '99px',
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

        {/* Personal Projects */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px', marginTop: '56px' }}>
          <span style={{
            background: 'var(--accent)',
            color: '#fff',
            padding: '6px 16px',
            borderRadius: '99px',
            fontSize: '0.72rem',
            fontWeight: 800,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}>
            Personal Projects
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.15)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '28px' }}>
          {personalProjects.map(project => (
            <div key={project.title} style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderTop: '4px solid var(--accent)',
              borderRadius: '4px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              transition: 'transform 0.2s, background 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
              }}
            >
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.75rem', fontWeight: 900, color: 'var(--accent)', lineHeight: 1 }}>
                {project.stat}
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#f5ede0', fontWeight: 700, fontSize: '1.2rem', lineHeight: 1.3 }}>
                {project.title}
              </h3>
              <p style={{ color: 'rgba(245,237,224,0.7)', fontSize: '0.93rem', lineHeight: 1.8, flex: 1 }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: 'rgba(245,237,224,0.8)',
                    padding: '4px 10px',
                    borderRadius: '99px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    fontFamily: 'monospace',
                    letterSpacing: '0.03em',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{
                  padding: '10px 22px',
                  background: 'var(--accent)',
                  color: '#fff',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  textDecoration: 'none',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}>
                  Live Demo →
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                  padding: '10px 22px',
                  border: '1.5px solid rgba(255,255,255,0.25)',
                  color: 'rgba(245,237,224,0.8)',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  textDecoration: 'none',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

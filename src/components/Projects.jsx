const personalProjects = [
  {
    title: 'My Mortgage Buddy',
    stat: 'Loan options, side by side',
    description:
      'A closing-cost tool built for mortgage loan officers who need to quote fast and explain clearly. Build a fee sheet in minutes, then switch to presentation mode for a clean, side-by-side comparison of loan options — the view a loan officer actually walks a borrower through.',
    tags: ['Svelte', 'JavaScript', 'Hono', 'Neon Postgres'],
    demo: 'https://mymortgagebuddyapp.com/',
    github: 'https://github.com/jen-a-johnson/mymortgagebuddy',
  },
  {
    title: 'Signl',
    stat: 'Market intel, on schedule',
    description:
      'Competitor and market intelligence delivered to your inbox. Tell Signl your role, industry, and the competitors you care about — it searches the web and Claude writes a personalized brief, sent daily, weekly, or monthly on the schedule you choose.',
    tags: ['Next.js', 'Claude API', 'Supabase', 'Resend', 'Vercel'],
    demo: 'https://www.mysignls.com/',
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

function GroupLabel({ children, first }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '28px',
      marginTop: first ? '-24px' : '72px',
    }}>
      <span style={{
        color: 'var(--accent)',
        fontSize: '0.75rem',
        fontWeight: 700,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
      }}>
        {children}
      </span>
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <div style={{
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: '10px',
      padding: '32px',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      boxShadow: '0 1px 2px rgba(26,21,18,0.04)',
      transition: 'transform 0.2s, box-shadow 0.2s',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 14px 32px rgba(26,21,18,0.08)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 1px 2px rgba(26,21,18,0.04)'
      }}
    >
      <div style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: '1.6rem',
        fontWeight: 800,
        color: 'var(--accent)',
        lineHeight: 1.1,
      }}>
        {project.stat}
      </div>
      <h3 style={{
        color: 'var(--text)',
        fontWeight: 600,
        fontSize: '1.05rem',
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
            color: 'var(--text-muted)',
            padding: '4px 10px',
            borderRadius: '99px',
            fontSize: '0.75rem',
            fontWeight: 500,
          }}>
            {tag}
          </span>
        ))}
      </div>
      {project.demo && (
        <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{
            padding: '10px 20px',
            background: 'var(--accent)',
            color: '#fff',
            borderRadius: '6px',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
          }}>
            Live Demo →
          </a>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
              padding: '10px 20px',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              borderRadius: '6px',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
            }}>
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--surface)' }}>
      <div className="section-container">
        <h2 className="section-title">Selected <span>Projects</span></h2>

        <GroupLabel first>AI Enablement</GroupLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px' }}>
          {projects.map(project => <ProjectCard key={project.title} project={project} />)}
        </div>

        <GroupLabel>Personal Projects</GroupLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px' }}>
          {personalProjects.map(project => <ProjectCard key={project.title} project={project} />)}
        </div>
      </div>
    </section>
  )
}

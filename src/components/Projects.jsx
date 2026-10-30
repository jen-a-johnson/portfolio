import Reveal from './Reveal'

const personalProjects = [
  {
    title: 'My Mortgage Buddy',
    stat: 'Loan options, side by side',
    description:
      'Fee sheets for loan officers in minutes, plus a presentation mode that walks borrowers through loan options side by side.',
    tags: ['SvelteKit', 'Hono', 'Neon Postgres', 'Tailwind CSS'],
    demo: 'https://mymortgagebuddyapp.com/',
    github: 'https://github.com/jen-a-johnson/mymortgagebuddy',
  },
  {
    title: 'Signl',
    stat: 'Market intel, on schedule',
    description:
      'Tell it your role, industry, and competitors. Claude researches the web and emails you a personalized market brief on your schedule.',
    tags: ['Next.js', 'Claude API', 'Supabase', 'Resend', 'Vercel'],
    demo: 'https://www.mysignls.com/',
  },
  {
    title: 'Tally',
    stat: 'Your wins, logged',
    description:
      'A task manager where Claude turns finished tasks into polished achievement statements, ready for your next review or standup.',
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
      'Escalations took 7+ hours and often closed without a fix. I automated documentation across Notion, HubSpot, and Linear with Claude Code MCPs.',
    tags: ['Claude Code', 'MCP', 'Notion', 'HubSpot', 'Linear'],
  },
  {
    title: 'Product Intelligence Hub',
    stat: '6 days → 2 hrs',
    description:
      'Discovery meant days of call reviews and chasing teams for context. I unified Pendo, Avoma, HubSpot, Slack, and Linear into one analysis layer.',
    tags: ['Pendo', 'Avoma', 'HubSpot', 'Slack', 'Linear'],
  },
  {
    title: 'Customer Pulse Dashboard',
    stat: 'C-suite visibility',
    description:
      'A live view of agent tone, performance, and customer sentiment for the Chief Customer Officer, built from support ticket data.',
    tags: ['Dashboard', 'Sentiment Analysis', 'Support Data'],
  },
  {
    title: 'AI Fluency Program',
    stat: 'Team-wide',
    description:
      'Taught my team to use Claude daily, from codebase review to feature specs, so they move faster without waiting on engineering.',
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
      height: '100%',
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
        <Reveal>
          <h2 className="section-title">Selected <span>Projects</span></h2>
          <GroupLabel first>AI Enablement</GroupLabel>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px' }}>
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 120}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <GroupLabel>Personal Projects</GroupLabel>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px' }}>
          {personalProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 120}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

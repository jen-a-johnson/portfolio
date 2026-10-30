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

function GroupLabel({ children }) {
  return (
    <h3 style={{
      fontSize: '0.95rem',
      fontWeight: 600,
      color: 'var(--text)',
      paddingBottom: '14px',
      marginBottom: '24px',
      borderBottom: '1px solid var(--border)',
    }}>
      {children}
    </h3>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="card">
      <div style={{
        fontSize: '1.5rem',
        fontWeight: 600,
        letterSpacing: '-0.03em',
        lineHeight: 1.2,
        marginBottom: '6px',
      }}>
        {project.stat}
      </div>
      <h4 style={{ fontSize: '0.92rem', fontWeight: 500, color: 'var(--text-subtle)', marginBottom: '16px' }}>
        {project.title}
      </h4>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '20px' }}>
        {project.description}
      </p>
      {/* marginTop auto pins tags and buttons to the bottom so they line up across cards */}
      <div style={{ marginTop: 'auto' }}>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', lineHeight: 1.6 }}>
          {project.tags.join(' · ')}
        </p>
        {project.demo && (
          <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
              Live demo <span className="arrow">→</span>
            </a>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-secondary">
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

const grid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      <div className="section-container">
        <Reveal>
          <p className="eyebrow">Work</p>
          <h2 className="section-title">Selected projects</h2>
          <GroupLabel>AI enablement</GroupLabel>
        </Reveal>
        <div style={grid}>
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal style={{ marginTop: '72px' }}>
          <GroupLabel>Personal projects</GroupLabel>
        </Reveal>
        <div style={grid}>
          {personalProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const projects = [
  {
    title: 'AI Content Assistant',
    description:
      'A natural-language interface that lets marketing and ops teams generate, edit, and publish content without writing a single line of code. Reduced turnaround time by 60% across three internal teams.',
    tags: ['React', 'OpenAI API', 'Node.js', 'Postgres'],
    link: '#',
  },
  {
    title: 'Prototype → Production App',
    description:
      'Took a rough Notion-based workflow tool used by 5 people and rebuilt it as a full-stack web app now used by 200+. Includes role-based access, audit logs, and a self-serve onboarding flow.',
    tags: ['React', 'Express', 'AWS', 'Stripe'],
    link: '#',
  },
  {
    title: 'Internal Knowledge Base Chatbot',
    description:
      'Embedded a retrieval-augmented chatbot into a company intranet so non-technical staff could query internal docs in plain English. Cut support ticket volume by 40% in the first quarter.',
    tags: ['LangChain', 'Python', 'Pinecone', 'Next.js'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-title">Selected <span>Projects</span></h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {projects.map(project => (
            <div key={project.title} style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <h3 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.1rem' }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, flex: 1 }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    background: 'var(--surface)',
                    color: 'var(--accent-light)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    fontFamily: 'monospace',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              {project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noreferrer" style={{
                  color: 'var(--accent)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                }}>
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

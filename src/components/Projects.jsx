const projects = [
  {
    title: 'AI Content Assistant',
    description:
      'A natural-language interface that lets marketing and ops teams generate, edit, and publish content without writing a single line of code. Reduced turnaround time by 60% across three internal teams.',
    tags: ['React', 'OpenAI API', 'Node.js', 'Postgres'],
    link: '#',
    stat: '60% faster',
  },
  {
    title: 'Prototype → Production App',
    description:
      'Took a rough Notion-based workflow tool used by 5 people and rebuilt it as a full-stack web app now used by 200+. Includes role-based access, audit logs, and a self-serve onboarding flow.',
    tags: ['React', 'Express', 'AWS', 'Stripe'],
    link: '#',
    stat: '5 → 200+ users',
  },
  {
    title: 'Internal Knowledge Base Chatbot',
    description:
      'Embedded a retrieval-augmented chatbot into a company intranet so non-technical staff could query internal docs in plain English. Cut support ticket volume by 40% in the first quarter.',
    tags: ['LangChain', 'Python', 'Pinecone', 'Next.js'],
    link: '#',
    stat: '40% fewer tickets',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--surface)' }}>
      <div className="section-container">
        <h2 className="section-title">Selected <span>Projects</span></h2>
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
                fontSize: '2rem',
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
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.75, flex: 1 }}>
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

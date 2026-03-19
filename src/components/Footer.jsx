export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '32px 24px',
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontSize: '0.85rem',
    }}>
      <p>Jennifer Johnson &mdash; {new Date().getFullYear()}</p>
    </footer>
  )
}

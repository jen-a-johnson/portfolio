export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '28px 40px',
      textAlign: 'center',
      color: 'var(--text-subtle)',
      fontSize: '0.82rem',
    }}>
      <p>&copy; {new Date().getFullYear()} Jennifer Johnson</p>
    </footer>
  )
}

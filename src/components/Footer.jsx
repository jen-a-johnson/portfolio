export default function Footer() {
  return (
    <footer style={{
      background: 'var(--hero-bg)',
      padding: '32px 40px',
      textAlign: 'center',
      color: 'rgba(245,237,224,0.4)',
      fontSize: '0.85rem',
    }}>
      <p>Jennifer Johnson &mdash; {new Date().getFullYear()}</p>
    </footer>
  )
}

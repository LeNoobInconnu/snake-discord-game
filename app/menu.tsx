import Link from 'next/link';

export default function Menu() {
  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>🎮 Menu des Jeux</h1>
      <Link href="/snake">
        <button style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}>Jouer à Snake 🐍</button>
      </Link>
    </main>
  );
}

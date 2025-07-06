import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Bienvenue dans le Snake Discord Game 🐍</h1>
      <Link href="/menu">
        <button style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
          Accéder au menu de jeux
        </button>
      </Link>
    </main>
  );
}

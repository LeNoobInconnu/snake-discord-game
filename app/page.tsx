'use client';

import { useState } from 'react';

export default function Home() {
  const [showGame, setShowGame] = useState(false);

  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      {!showGame ? (
        <>
          <h1>🎮 Menu Principal</h1>
          <button
            onClick={() => setShowGame(true)}
            style={{
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              marginTop: '2rem',
              cursor: 'pointer',
            }}
          >
            Jouer au Snake 🐍
          </button>
        </>
      ) : (
        <>
          <h1>🐍 Le jeu Snake est prêt !</h1>
          <p>Appuie sur “Espace” pour commencer.</p>
        </>
      )}
    </main>
  );
}

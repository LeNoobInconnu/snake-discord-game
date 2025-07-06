'use client';

import { useState } from 'react';

export default function Home() {
  const [view, setView] = useState<'menu' | 'snake'>('menu');

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {view === 'menu' ? (
        <>
          <h1 style={{ textAlign: 'center' }}>🎮 Menu des jeux</h1>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
              maxWidth: '600px',
              margin: '2rem auto',
            }}
          >
            <div
              onClick={() => setView('snake')}
              style={{
                background: '#222',
                color: '#fff',
                padding: '2rem',
                textAlign: 'center',
                cursor: 'pointer',
                borderRadius: '8px',
              }}
            >
              🐍 Snake
            </div>
            <div style={emptyBoxStyle}>À venir</div>
            <div style={emptyBoxStyle}>À venir</div>
            <div style={emptyBoxStyle}>À venir</div>
          </div>
        </>
      ) : (
        <>
          <h1 style={{ textAlign: 'center' }}>🐍 Le jeu Snake</h1>
          <p style={{ textAlign: 'center' }}>Le jeu arrive bientôt...</p>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              onClick={() => setView('menu')}
              style={{
                padding: '0.8rem 1.5rem',
                fontSize: '1rem',
                cursor: 'pointer',
                borderRadius: '6px',
              }}
            >
              🔙 Retour au menu
            </button>
          </div>
        </>
      )}
    </main>
  );
}

const emptyBoxStyle = {
  background: '#eee',
  color: '#999',
  padding: '2rem',
  textAlign: 'center',
  borderRadius: '8px',
};

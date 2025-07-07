'use client';
import React from 'react';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>🎮 Menu des jeux</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          maxWidth: '1000px',
          margin: '2rem auto',
          flexWrap: 'wrap',
        }}
      >
        <a
          href="https://openfront.io/"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          🌍 OpenFront
        </a>
        <a
          href="https://makeitmeme.com/fr/play"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          🎬 Make it Meme
        </a>
        <a
          href="https://garticphone.com/fr"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          🧩 Gartic Phone
        </a>
      </div>
    </main>
  );
}

const buttonStyle: React.CSSProperties = {
  background: '#222',
  color: '#fff',
  padding: '2rem',
  textAlign: 'center',
  cursor: 'pointer',
  borderRadius: '8px',
  textDecoration: 'none',
  fontSize: '1.2rem',
  minWidth: '180px',
};

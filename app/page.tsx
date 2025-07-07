'use client';
import { useState } from 'react';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
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
        <MenuButton label="🐍 Snake" link="/snake" />
        <MenuButton label="🧠 Memory" link="https://example.com/memory" />
        <MenuButton label="🧩 Puzzle" link="https://example.com/puzzle" />
        <MenuButton label="🚀 Space Game" link="https://example.com/space" />
      </div>
    </main>
  );
}

type MenuButtonProps = {
  label: string;
  link: string;
};

function MenuButton({ label, link }: MenuButtonProps) {
  const isExternal = link.startsWith('http');
  return isExternal ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyle}
    >
      {label}
    </a>
  ) : (
    <a href={link} style={buttonStyle}>
      {label}
    </a>
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
};

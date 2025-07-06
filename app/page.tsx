'use client';

import { useState, useEffect, useRef } from 'react';

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
          <SnakeGame />
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

function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [dir, setDir] = useState({ x: 1, y: 0 });
  const [running, setRunning] = useState(true);
  const gridSize = 20;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
          if (dir.y === 0) setDir({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
        case 's':
          if (dir.y === 0) setDir({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
        case 'a':
          if (dir.x === 0) setDir({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
        case 'd':
          if (dir.x === 0) setDir({ x: 1, y: 0 });
          break;
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [dir]);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = { ...prev[0] };
        head.x += dir.x;
        head.y += dir.y;

        if (
          head.x < 0 ||
          head.y < 0 ||
          head.x >= gridSize ||
          head.y >= gridSize ||
          prev.some((s) => s.x === head.x && s.y === head.y)
        ) {
          setRunning(false);
          return prev;
        }

        const newSnake = [head, ...prev];
        if (head.x === food.x && head.y === food.y) {
          setFood({
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize),
          });
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [dir, food, running]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    snake.forEach((segment) => {
      ctx.fillStyle = '#0f0';
      ctx.fillRect(segment.x * 20, segment.y * 20, 18, 18);
    });

    ctx.fillStyle = '#f00';
    ctx.fillRect(food.x * 20, food.y * 20, 18, 18);
  }, [snake, food]);

  return (
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <canvas
        ref={canvasRef}
        width={gridSize * 20}
        height={gridSize * 20}
        style={{ border: '2px solid #333' }}
      />
      {!running && <p style={{ color: 'red' }}>💀 Game Over</p>}
    </div>
  );
}

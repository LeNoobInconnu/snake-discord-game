'use client';
import { useEffect, useRef, useState } from 'react';

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const box = 20;
    let snake = [{ x: 9 * box, y: 10 * box }];
    let food = {
      x: Math.floor(Math.random() * 19 + 1) * box,
      y: Math.floor(Math.random() * 19 + 1) * box,
    };
    let direction: 'LEFT' | 'RIGHT' | 'UP' | 'DOWN' = 'RIGHT';

    const draw = () => {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, 400, 400);

      for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? 'green' : 'lightgreen';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
      }

      ctx.fillStyle = 'red';
      ctx.fillRect(food.x, food.y, box, box);

      let head = { ...snake[0] };

      if (direction === 'LEFT') head.x -= box;
      if (direction === 'RIGHT') head.x += box;
      if (direction === 'UP') head.y -= box;
      if (direction === 'DOWN') head.y += box;

      // Collision
      if (
        head.x < 0 || head.x >= 400 || head.y < 0 || head.y >= 400 ||
        snake.some(segment => segment.x === head.x && segment.y === head.y)
      ) {
        alert('Game Over');
        setScore(0);
        snake = [{ x: 9 * box, y: 10 * box }];
        direction = 'RIGHT';
        return;
      }

      snake.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 1);
        food = {
          x: Math.floor(Math.random() * 19 + 1) * box,
          y: Math.floor(Math.random() * 19 + 1) * box,
        };
      } else {
        snake.pop();
      }

      requestAnimationFrame(draw);
    };

    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT';
      if (e.key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP';
      if (e.key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT';
      if (e.key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN';
    });

    draw();
  }, []);

  return (
    <main style={{ textAlign: 'center' }}>
      <h1>🐍 Snake Game</h1>
      <canvas ref={canvasRef} width={400} height={400} style={{ border: '2px solid black' }} />
      <p>Score : {score}</p>
    </main>
  );
}

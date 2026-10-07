import confetti from 'canvas-confetti';

export function fireCelebrationConfetti() {
  try {
    // Left burst
    confetti({
      particleCount: 40,
      angle: 60,
      spread: 55,
      origin: { x: 0.1, y: 0.6 },
      colors: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'],
    });

    // Right burst
    confetti({
      particleCount: 40,
      angle: 120,
      spread: 55,
      origin: { x: 0.9, y: 0.6 },
      colors: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'],
    });

    // Center starburst after slight delay
    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 90,
        origin: { x: 0.5, y: 0.45 },
        colors: ['#FFD700', '#FFA07A', '#98FB98', '#87CEFA', '#DDA0DD'],
      });
    }, 200);
  } catch {
    // Graceful fallback
  }
}

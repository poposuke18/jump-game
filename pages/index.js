// pages/index.js
import { useState, useEffect } from 'react';
import Character from '../components/Character';

const Game = () => {
    const [score, setScore] = useState(0);
    const [isJumping, setIsJumping] = useState(false);

    const jump = () => {
        if (isJumping) return;
        setIsJumping(true);
        setScore(score + 1);
        setTimeout(() => {
            setIsJumping(false);
        }, 1000); // ジャンプの時間
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === 'Space') {
                jump();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isJumping, score]);

    return (
        <div className="game">
            <h1>スコア: {score}</h1>
            <Character isJumping={isJumping} />
            <style jsx>{`
                .game { text-align: center; }
            `}</style>
        </div>
    );
};

export default Game;
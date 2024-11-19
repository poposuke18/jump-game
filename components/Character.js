// components/Character.js
const Character = ({ isJumping }) => {
    return (
        <div className={`character ${isJumping ? 'jump' : ''}`}></div>
        <style jsx>{`
            .character {
                width: 50px;
                height: 50px;
                background: blue;
                position: relative;
                transition: bottom 1s;
            }
            .jump {
                animation: jump-animation 1s forwards;
            }
            @keyframes jump-animation {
                0% { bottom: 0; }
                50% { bottom: 100px; }
                100% { bottom: 0; }
            }
        `}</style>
    );
};

export default Character;
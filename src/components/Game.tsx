import { useState, useRef } from "react";
import "../Styles/Game.css";

interface GameProps {
  verifyLetter: (letter: string) => void;
  letters: string[];
  pickedCategory: string;
  guessedLetters: string[];
  wrongLetter: string[];
  score: number;
  guesses: number;
}

const Game = ({
  verifyLetter,
  letters,
  pickedCategory,
  guessedLetters,
  wrongLetter,
  score,
  guesses,
}: GameProps) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter("");
    letterInputRef.current?.focus();
  };
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Advinhe a Palavra</h1>
      <h3 className="tip">
        {" "}
        Dica sobre a palavra: <span>{pickedCategory.toUpperCase()}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter.toUpperCase()}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Tente Advinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            maxLength={1}
            name="letter"
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetter.map((letter, i) => (
          <span key={i}>{letter} </span>
        ))}
      </div>
    </div>
  );
};

export default Game;

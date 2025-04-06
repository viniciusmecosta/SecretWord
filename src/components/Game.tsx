import "./Game.css";

interface GameProps {
  verifyLetter: () => void;
}

const Game = ({ verifyLetter }: GameProps) => {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: 000</span>
      </p>
      <h1>Advinhe a Palavra</h1>
      <h3 className="tip">
        {" "}
        Dica sobre a palavra: <span>Dica ...</span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSpace"></span>
      </div>
      <div className="letterContainer">
        <p>Tente Advinhar uma letra da palavra:</p>
        <form>
          <input type="text" maxLength={1} name="letter" required />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas: </p>
        <span>a,</span>
      </div>
    </div>
  );
};

export default Game;

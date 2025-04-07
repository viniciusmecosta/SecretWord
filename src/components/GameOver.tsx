import "../Styles/GameOver.css";

interface gameOverProps {
  retry: () => void;
  score: number;
}
const GameOver = ({ retry,score }: gameOverProps) => {
  return (
    <div>
      <h1>Fim de Jogo!</h1>
      <h2>
        {" "}
        A sua pontuação foi: <span>{score}</span>
      </h2>
      <button onClick={retry}>Resetar Jogo</button>
    </div>
  );
};

export default GameOver;

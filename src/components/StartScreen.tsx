import "./StartScreen.css";

interface StartScreenProps {
  start: () => void;
}

const StartScreen = ({ start }: StartScreenProps) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para comecar a jogar</p>
      <button onClick={start}>Começar a Jogar</button>
    </div>
  );
};

export default StartScreen;

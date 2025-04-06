import "./GameOver.css"

interface gameOverProps{
    retry: ()=> void;
}
const GameOver = ({retry}:gameOverProps) => {
  return (
    <div>
        <h1>GameOver</h1>
        <button onClick={retry}>Resetar Jogo</button>
    </div>
  )
}

export default GameOver
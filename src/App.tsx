import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { wordsList } from "./data/words";
import StartScreen from "./components/StartScreen";
import { Stage } from "./models/Stage";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages: Stage[] = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [pickedWord, setPickedWord] = useState("");
  const [pickCategory, setPickCategory] = useState("");
  const [letters, setLetters] = useState<string[]>([]);
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState<typeof wordsList>(wordsList);

  const pickWordAndCategory = () => {
    const categories = Object.keys(words) as Array<keyof typeof words>;
    const category = categories[Math.floor(Math.random() * categories.length)];
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];
    return { word, category };
  };

  const startGame = () => {
    const { word, category } = pickWordAndCategory();
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((w) => w.toLowerCase());
    console.log(wordLetters);
    setPickedWord(word);
    setPickCategory(category);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  };

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <>
      <div className="App">
        {gameStage === "start" && <StartScreen start={startGame} />}
        {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
        {gameStage === "end" && <GameOver retry={retry} />}
      </div>
    </>
  );
}

export default App;

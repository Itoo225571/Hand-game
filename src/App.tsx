import { useState } from "react";
import "./App.css";

import Game from "./components/Game";

const hands = {
    rock: "✊",
    scissors: "✌️",
    paper: "✋",
};

function App() {
    const [playerHand, setPlayerHand] = useState(null);
    const [computerHand, setComputerHand] = useState(null);
    const [result, setResult] = useState("選べ！");

    // playerが手を選択した後の動き
    const play = (hand) => {
        const choices = ["rock", "scissors", "paper"];
        const computer = choices[Math.floor(Math.random() * choices.length)];

        setPlayerHand(hand);
        setComputerHand(computer);

        if (hand === computer) {
            setResult("あいこ！");
        } else if (
            (hand === "rock" && computer === "scissors") ||
            (hand === "scissors" && computer === "paper") ||
            (hand === "paper" && computer === "rock")
        ) {
            setResult("あなたの勝ち！");
        } else {
            setResult("あなたの負け！");
        }
    };

    return (
        <Game
            playerHand={playerHand}
            computerHand={computerHand}
            result={result}
            play={play}
            hands={hands}
        />
    );
}

export default App;
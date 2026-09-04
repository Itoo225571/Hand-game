import { useState } from "react";
import "./App.css";

import Game from "./components/Game";
import type { Card, HandType } from "./types";

const handCards: Card[] = [
    {
        name: "ぐー",
        type: "rock",
        image: "rock.png",
        description: "ただのグー。それ以上でも以下でもない。",
        rarity: "N",
    },
    {
        name: "ちょき",
        type: "scissors",
        image: "scissors.png",
        description: "チョキ。",
        rarity: "N",
    },
    {
        name: "ぱー",
        type: "paper",
        image: "paper.png",
        description: "パー。",
        rarity: "N",
    },
];

function App() {
    const [playerHand, setPlayerHand] =
        useState<HandType | null>(null);

    const [computerHand, setComputerHand] =
        useState<HandType | null>(null);

    const [result, setResult] =
        useState<string>("じゃんけん…");

    const play = (hand: HandType) => {
        const choices: HandType[] = [
            "rock",
            "scissors",
            "paper",
        ];

        const computer =
            choices[Math.floor(Math.random() * choices.length)];

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
            hands={handCards}
        />
    );
}

export default App;
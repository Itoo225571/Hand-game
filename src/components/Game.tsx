import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import type { Card, HandType } from "../types";

type GameProps = {
    playerHand: HandType | null;
    computerHand: HandType | null;
    result: string;
    play: (player: HandType) => void;
    hands: Card[];
};

function Game({
    playerHand,
    computerHand,
    result,
    play,
    hands,
}: GameProps) {
    const computer = hands.find(
        (hand) => hand.type === computerHand
    );
    return (
        <div className="container min-vh-100 d-flex flex-column justify-content-center text-center">
            <div className="row justify-content-center align-items-center mb-5">
                <div className="col-5 col-md-3">
                    <h2 className="h4">敵</h2>
                    <div className="display-1 my-3">
                        {computer ? computer.name : "？"}
                    </div>
                </div>
            </div>

            <h2 className="mb-4">{result}</h2>
            <div className="col-3">
                <div className="card hand-card">
                    <div className="card-header position-relative text-center">
                        <span className="h2">ぐー</span>

                        <OverlayTrigger
                            trigger="click"
                            placement="top"
                            rootClose
                            overlay={
                                <Popover>
                                    <Popover.Body>
                                        <div>
                                            {playerHand}
                                        </div>
                                    </Popover.Body>
                                </Popover>
                            }
                        >
                            <button className="btn position-absolute end-0 top-50 translate-middle-y">
                                <i className="bi bi-info-circle"></i>
                            </button>
                        </OverlayTrigger>
                    </div>

                    <div
                        className={`card-body d-flex flex-column hand-button ${
                            playerHand === "rock" ? "selected" : ""
                        }`}
                        onClick={() => play("rock")}
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}images/rock.png`}
                            alt="グー"
                            className="mx-auto mt-auto hand-image"
                        />
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center gap-2">
                <button
                    className={`btn hand-button ${
                        playerHand === "rock" ? "selected" : ""
                    }`}
                    onClick={() => play("rock")}
                >
                    <img src={`${import.meta.env.BASE_URL}images/rock.png`} alt="グー" className="hand-image"/>
                </button>

                <button
                    className={`btn hand-button ${
                        playerHand === "scissors" ? "active" : ""
                    }`}
                    onClick={() => play("scissors")}
                >
                    <img src={`${import.meta.env.BASE_URL}images/scissors.png`} alt="チョキ" className="hand-image"/>
                </button>

                <button
                    className={`btn hand-button ${
                        playerHand === "paper" ? "active" : ""
                    }`}
                    onClick={() => play("paper")}
                >
                    <img src={`${import.meta.env.BASE_URL}images/paper.png`} alt="パー" className="hand-image"/>
                </button>
            </div>
        </div>
    );
}

export default Game;
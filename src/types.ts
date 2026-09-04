export type HandType = "rock" | "scissors" | "paper";

export type Card = {
    // 名前
    name: string;
    // 種類
    type: HandType;
    // 画像URL
    image: string;
    // 説明文
    description: string;

    // レアリティ
    rarity: "N" | "SR" | "ER" | "LR";
};
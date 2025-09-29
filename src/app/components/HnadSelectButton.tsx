import Image from "next/image";
import rockImage from "../asserts/goo.png";
import paperImage from "../asserts/per.png";
import scissorsImage from "../asserts/choki.png";   

type Hand = "rock" | "paper" | "scissors";

interface Props {
  hand: Hand;
}

export const HandSelectButton: React.FC<Props> = ({ hand }) => {
  const getImage = () => {
    switch (hand) {
      case "rock":
        return rockImage;
      case "scissors":
        return scissorsImage;
      case "paper":
        return paperImage;
    }
  };

  const backgroundColor = () => {
    switch (hand) {
      case "rock":
        return "bg-pink-400";
      case "scissors":
        return "bg-lime-500";
      case "paper":
        return "bg-sky-300";
    }
  };

  return (
    <button className={`size-20 rounded-full border border-gray-300 overflow-hidden shadow-md ${backgroundColor()}`}>
      <Image
        src={getImage()}
        alt={hand}
        width={1024}
        height={1024}
        className="size-full object-cover"
      />
    </button>
  );
};

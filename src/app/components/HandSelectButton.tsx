import Image from "next/image";
import rockImage from "../assets/goo.png";
import paperImage from "../assets/per.png";
import scissorsImage from "../assets/choki.png";   

type Hand = "rock" | "paper" | "scissors";

type Props = {
  hand: Hand;
};

export const HandSelectButton = ({ hand }: Props) => {
  const getHandProperties = () => {
    switch (hand) {
      case "rock":
        return {
          image: rockImage,
          backgroundColor: "bg-pink-400",
        };
      case "scissors":
        return {
          image: scissorsImage,
          backgroundColor: "bg-lime-500",
        };
      case "paper":
        return {
          image: paperImage,
          backgroundColor: "bg-sky-300",
        };
    }
  };

  const { image, backgroundColor } = getHandProperties();
    

  return (
    <button className={`size-20 rounded-full cursor-pointer border border-gray-300 overflow-hidden shadow-md ${backgroundColor}`}>
      <Image
        src={image}
        alt={hand}
        width={1024}
        height={1024}
        className="size-full object-cover"
      />
    </button>
  );
};

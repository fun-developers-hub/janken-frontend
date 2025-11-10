import rockImage from "../assets/goo.png";
import paperImage from "../assets/per.png";
import scissorsImage from "../assets/choki.png";   

import { Hand } from "../types/typs";


export const getHandProperties = (hand : Hand) => {
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
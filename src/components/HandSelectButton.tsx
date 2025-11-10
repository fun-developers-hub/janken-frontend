import Image from "next/image";
import type { Hand } from "../types/typs";
import { getHandProperties } from "../utils/getHandProperties";

type Props = {
  hand: Hand;
  onClick: () => void;
};


export const HandSelectButton = ({ hand, onClick }: Props) => {
  const { image, backgroundColor } = getHandProperties(hand);

  return (
    <button
      className={`size-20 rounded-full cursor-pointer border border-gray-300 overflow-hidden shadow-md ${backgroundColor}`}
      onClick={onClick}
    >
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

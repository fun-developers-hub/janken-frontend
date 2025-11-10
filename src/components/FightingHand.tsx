import Image from "next/image";
import type { Hand } from "../types/typs";
import { getHandProperties } from "../utils/getHandProperties";

type Props = {
  hand: Hand;
};

export const FightingHand = ({ hand }: Props) => {
  const { image, backgroundColor } = getHandProperties(hand);

  return (
    <button
      className={`size-32 rounded-full border border-gray-300 overflow-hidden shadow-md ${backgroundColor}`}
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

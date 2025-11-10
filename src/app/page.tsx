import { HandSelectButton } from "../components/HandSelectButton";
import { StatusDisplay } from "../components/StatusDisplay";
import { FightingHand } from "../components/FightingHand";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <StatusDisplay>
        win
      </StatusDisplay>

      <div className="flex gap-4">
        <FightingHand hand="scissors" />
      </div>

      <div className="flex gap-4">
        <HandSelectButton hand="rock" />
        <HandSelectButton hand="scissors" />
        <HandSelectButton hand="paper" />
      </div>
    </div>
  );
}


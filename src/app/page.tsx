import { HandSelectButton } from "./components/HandSelectButton";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen gap-4">
      <HandSelectButton hand="rock" />
      <HandSelectButton hand="scissors" />
      <HandSelectButton hand="paper" />
    </div>
  );
}


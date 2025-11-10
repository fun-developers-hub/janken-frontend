"use client";
import { useState } from "react";

import { HandSelectButton } from "../components/HandSelectButton";
import { StatusDisplay } from "../components/StatusDisplay";
import { FightingHand } from "../components/FightingHand";
import { Hand } from "@/types/typs";

export default function Home() {
  const [userHand, setUserHand] = useState<Hand | null>(null);
  const [cpuHand, setCpuHand] = useState<Hand | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const handleHandSelect = async (hand: Hand) => {
    const data = await fetchAPI(hand);
    setUserHand(hand);
    setCpuHand(data.cpuHand);
    setResult(data.result);
  }
  
  const fetchAPI = async (hand: Hand) => {
    const res = await fetch(`http://localhost:1323/janken?u_hand=${hand}`, {
      method: "POST",
    });
    const data = (await res.json()) as { cpuHand: Hand; result: string };

    return data;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <div className="flex gap-4 rotate-180">
        {cpuHand && <FightingHand hand={cpuHand} />}
      </div>
      
      <StatusDisplay>{result}</StatusDisplay>

      <div className="flex gap-4">
        {userHand && <FightingHand hand={userHand} />}
      </div>

      <div className="flex gap-4">
        <HandSelectButton hand="rock" onClick={() => handleHandSelect("rock")} />
        <HandSelectButton hand="scissors" onClick={() => handleHandSelect("scissors")}/>
        <HandSelectButton hand="paper" onClick={() => handleHandSelect("paper")} />
      </div>
    </div>
  );
}

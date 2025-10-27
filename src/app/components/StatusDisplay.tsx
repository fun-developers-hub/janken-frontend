type Status = "win" | "lose" | "draw" | "waiting";

type Props = {
  status: Status;
};

export const StatusDisplay = ({ status }: Props) => {
  const getJankenStatus = () => {
    switch (status) {
      case "win":
        return {
          text: "勝ち！",
          backgroundColor: "bg-rose-300",
        };
      case "lose":
        return {
          text: "負け...",
          backgroundColor: "bg-indigo-300",
        };
      case "draw":
        return {
          text: "あいこ",
          backgroundColor: "bg-emerald-300",
        };
      case "waiting":
        return {
          text: "じゃんけん...",
          backgroundColor: "bg-slate-300",
        };
    }
  };

  const { text, backgroundColor } = getJankenStatus();

  return (
    <div
      className={`text-2xl font-bold p-4 rounded shadow-md ${backgroundColor} text-center w-48 h-20 flex items-center justify-center`}
    >
      {text}
    </div>
  );
};

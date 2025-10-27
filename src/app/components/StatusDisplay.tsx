

type Props = {
  children?: React.ReactNode;
};

export const StatusDisplay = ({ children, }: Props) => {
  
  return (
    <div
      className={`text-2xl font-bold p-4 rounded shadow-md bg-white text-center w-48 h-20 flex items-center justify-center`}
    >{children}
    </div>
  );
};

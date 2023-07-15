interface DisplayButtonProps {
  label: string;
  onclick: () => void;
  color: string;
}

const DisplayButton: React.FC<DisplayButtonProps> = ({
  label,
  onclick,
  color,
}) => {
  return (
    <div
      className={`rounded inline px-2 py-1 cursor-pointer text-white font-medium w-1/4 text-center hover:shadow-md transition ${color}`}
      onClick={onclick}
    >
      {label}
    </div>
  );
};

export default DisplayButton;

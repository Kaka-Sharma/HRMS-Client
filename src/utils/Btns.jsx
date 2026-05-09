import { ArrowRightIcon } from "../components/ui/Icons";


export const DemoButton = ({
  label = "Demo",
  path,
  Icon,
  color = "#1e90ff",
  textColor = "#fff",
  action,
}) => {

  return (
    <button
      onClick={action}
      style={{
        backgroundColor: color,
        color: textColor,
        border: "none",
        padding: "10px 16px",
        borderRadius: "8px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        gap: "6px",
        fontWeight: 500,
      }}
    >
      {label}
      {Icon && <ArrowRightIcon size={16} />}
    </button>
  );
};

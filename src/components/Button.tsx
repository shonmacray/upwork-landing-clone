import headerStyles from "../styles/root.module.scss";
interface Props {
  right?: JSX.Element;
  label: string;
  type?: string;
}

export default function AppButton({
  right,
  label = "button",
  type = "",
}: Props): JSX.Element {
  return (
    <button
      className={`${headerStyles.talent} ${headerStyles.btn} ${
        type === "covered"
          ? headerStyles.btnPrimary
          : type === "outline"
          ? headerStyles.btnOutline
          : type === "green"
          ? headerStyles.btnGreen
          : type === "blue"
          ? headerStyles.btnBlue
          : null
      }`}
    >
      <div>{label}</div> {right}
    </button>
  );
}

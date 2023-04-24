import headerStyles from "../styles/sample.module.scss";
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
          : null
      }`}
    >
      <p>{label}</p> {right}
    </button>
  );
}

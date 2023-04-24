import headerStyles from "../styles/sample.module.scss";
interface Props {
  right?: JSX.Element;
  label: string;
  covered?: boolean;
}

export default function AppButton({
  right,
  label = "button",
  covered = false,
}: Props): JSX.Element {
  return (
    <button
      className={`${headerStyles.talent} ${headerStyles.btn} ${
        covered && headerStyles.btnPrimary
      }`}
    >
      <p>{label}</p> {right}
    </button>
  );
}

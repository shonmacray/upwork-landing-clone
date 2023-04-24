import homeStyles from "../styles/home.module.scss";
interface Props {
  title: string;
  subTitle: string;
  icon: JSX.Element;
}

export default function ListWithIcon({
  title,
  subTitle,
  icon,
}: Props): JSX.Element {
  return (
    <div className={homeStyles.aList}>
      <div>{icon}</div>
      <div className={homeStyles.wordContainer}>
        <h2>{title}</h2>
        <h4>{subTitle}</h4>
      </div>
    </div>
  );
}

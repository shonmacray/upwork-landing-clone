import homeStyles from "../styles/home.module.scss";
interface Props {
  title: string;
  subTitle: string;
  icon: JSX.Element;
  num?: number;
}

export default function Card({
  title,
  subTitle,
  icon,
  num = 1,
}: Props): JSX.Element {
  return (
    <div className={`${homeStyles.card} ${num > 1 && homeStyles.brown}`}>
      <div className={homeStyles.wordContainer}>
        <div>{icon}</div>
        <h2>{title}</h2>
        <h4>{subTitle}</h4>
      </div>
      <div>
        <h4>Results</h4>
        <div className={homeStyles.listContainer}>
          <div className={homeStyles.first}>
            <h3>Emmy Winning</h3>
            <h4>Facebook Watch program</h4>
          </div>
          <div>
            <h3>Millions</h3>
            <h4>of impressions generated per client per IPO</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

import homeStyles from "../styles/home.module.scss";
interface Props {
  title: string;
  subTitle: string;
  icon: JSX.Element;
  light?: boolean;
}

export default function ListWithIcon2({
  title,
  subTitle,
  icon,
  light,
}: Props): JSX.Element {
  return (
    <div className={homeStyles.aList}>
      <div>{icon}</div>
      <div
        className={`${homeStyles.wordContainer} ${homeStyles.wordContainer2}`}
      >
        <h2 className={`${homeStyles.h2} ${light && homeStyles.h22}`}>
          {title}
        </h2>
        <h4 className={`${homeStyles.h4} ${light && homeStyles.h44}`}>
          {subTitle}
        </h4>
      </div>
    </div>
  );
}

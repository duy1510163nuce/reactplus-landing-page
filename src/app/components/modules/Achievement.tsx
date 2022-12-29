import { FC, ReactElement } from "react";
import "app/styles/elements/Achievement.scss";
// import { listAchievement } from "app/constant/mockApi";
 type AchievementType = {
  Id: number;
  name: string;
  Image: string;
  title: string;
};

type AchievementListProps = {
  achievements:AchievementType[]
}


const Achievement: FC<AchievementListProps> = ({achievements}): ReactElement => {
  const History = (history:AchievementType) => {
      return (
        <div className="history">
          <img alt="img-history" src={history.Image} className="img-history" />
          <p className="his-name">{history.name}</p>
          <div className="his-footer">
            <div className="his-border"></div>
            <p className="his-title">{history.title}</p>
          </div>
        </div>
      );
    };
  return (
    <div className="achievement">
      <div className="left">
        {achievements?.map((history, index) => {
          return <History {...history} key={index} />;
        })}
      </div>
        <div className="right">
        <h1 className="right-title">30 Years Experience</h1>
        <p className="right-content">
          Our company has been the leading provided construction services to
          clients throughout the USA since 1988
        </p>
        <button className="right-btn">Contact Us</button>
      </div>
    </div>
  );
};

export default Achievement;

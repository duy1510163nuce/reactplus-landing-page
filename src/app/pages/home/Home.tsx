import { FC, ReactElement } from "react";
import { HomeContainer } from "app/components/modules/HomeContainer";
import 'app/styles/global.scss'
const Home: FC = (): ReactElement => {
  return (
    <div className="home">
      <HomeContainer />
    </div>
  );
};

export default Home;

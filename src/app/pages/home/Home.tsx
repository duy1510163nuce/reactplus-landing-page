import { FC, ReactElement } from "react";
import { HomeContainer } from "app/components/elements/HomeContainer";

const Home: FC = (): ReactElement => {
  return (
    <div className="home">
      <HomeContainer />
    </div>
  );
};

export default Home;

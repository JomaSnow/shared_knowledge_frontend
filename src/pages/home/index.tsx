import Display from "./Display";

type Props = {
  errorMsg?: string;
};

const Home: React.FC<Props> = ({ errorMsg }) => {
  return <Display errorMsg={errorMsg} />;
};

export default Home;

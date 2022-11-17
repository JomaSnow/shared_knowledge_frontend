import { StyledMain, PageTitle } from "./styles";

type Props = {
  errorMsg?: string;
};

const Display: React.FC<Props> = ({ errorMsg }) => {
  return (
    <StyledMain>
      <PageTitle>Display Home</PageTitle>
      {errorMsg}
    </StyledMain>
  );
};

export default Display;

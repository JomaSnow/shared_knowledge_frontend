import React from "react";
import { Background, Text } from "./styles";

type Props = {
  errMsg: string;
  showErr: boolean;
};

const Display: React.FC<Props> = ({ errMsg, showErr }) => {
  return (
    <Background showErr={showErr}>
      <Text>{errMsg}</Text>
    </Background>
  );
};

export default Display;

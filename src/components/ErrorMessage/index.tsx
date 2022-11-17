import { useEffect, useState } from "react";
import Display from "./Display";

type Props = {
  errMsg: string;
};

const ErrorMessage: React.FC<Props> = ({ errMsg }) => {
  const [showErr, setShowErr] = useState<boolean>(false);

  useEffect(() => {
    if (errMsg) {
      setShowErr(true);
      setTimeout(() => {
        setShowErr(false);
      }, 3000);
    }
  }, [errMsg]);

  return <Display errMsg={errMsg} showErr={showErr} />;
};

export default ErrorMessage;

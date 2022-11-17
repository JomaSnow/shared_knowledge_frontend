import { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Navbar from "../components/Navbar";
import RoutesTSX from "./routes/Routes";

const App = () => {
  const [errMsg, setErrMsg] = useState<string>("");
  const [detectErrMsg, setDetectErrMsg] = useState<string>();

  useEffect(() => {
    if (detectErrMsg) {
      setErrMsg(detectErrMsg);
    }
  }, [detectErrMsg]);

  return (
    <>
      <Navbar />
      <ErrorMessage errMsg={errMsg} />
      <RoutesTSX setErrorMsg={setDetectErrMsg} />
    </>
  );
};

export default App;

import { Dispatch, SetStateAction } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../../components/ProtectedRoute";

import About from "../about";
import Account from "../account";
import Admin from "../admin";
import Home from "../home";
import Messages from "../messages";
import Authentication from "../signin_signup";

type Props = {
  setErrorMsg: Dispatch<SetStateAction<string | undefined>>;
};

const RoutesTSX: React.FC<Props> = ({ setErrorMsg }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/account"
        element={
          <ProtectedRoute key="account" logged={true} setErrorMsg={setErrorMsg}>
            <Account />
          </ProtectedRoute>
        }
      />
      <Route
        path="/messages"
        element={
          <ProtectedRoute
            key="messages"
            logged={true}
            setErrorMsg={setErrorMsg}
          >
            <Messages />
          </ProtectedRoute>
        }
      />
      <Route path="/authentication" element={<Authentication />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute
            key="admin"
            logged={true}
            adminRoute
            setErrorMsg={setErrorMsg}
          >
            <Admin />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default RoutesTSX;

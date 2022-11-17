import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Role, User } from "../../api/models/User";
import { getUserFromStorage } from "../../helper/getUserFromStorage";

type Props = {
  logged?: boolean;
  adminRoute?: boolean;
  redirectPath?: string;
  children?: any;
  setErrorMsg: Dispatch<SetStateAction<string | undefined>>;
};

const ProtectedRoute: React.FC<Props> = ({
  adminRoute = false,
  redirectPath = "/",
  logged,
  children,
  setErrorMsg,
}) => {
  const [redirect, setRedirect] = useState<boolean>(false);

  useEffect(() => {
    console.log("mounted");
    setRedirect(false);
  }, []);

  if (!logged) {
    return <Navigate to={redirectPath} replace />;
  }

  const user: User | undefined = getUserFromStorage();

  if (user && adminRoute === true && user.role !== Role.ADMIN) {
    setErrorMsg(`Você não tem autorização para acessar esta página.`);
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <>
      {redirect && <Navigate to={redirectPath} replace />}
      {children}
    </>
  );
};

export default ProtectedRoute;

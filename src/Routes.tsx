import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Account from "./pages/account";
import Admin from "./pages/admin";
import Home from "./pages/home";
import Messages from "./pages/messages";
import Authentication from "./pages/signin_signup";

function RoutesTSX() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/account" element={<Account />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/authentication" element={<Authentication />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default RoutesTSX;

import { Outlet } from "react-router-dom";
import GlobalStyles from "../my-styled-components/GlobalStyles";

export default function AuthLayout() {
  return (
    <>
      <GlobalStyles />
      <Outlet />
    </>
  );
}

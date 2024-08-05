import Header from "../Header/Header";
import pagesCSS from "../../pages/pages.module.css";
import { FC, ReactNode } from "react";

interface ILayout {
  children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={pagesCSS.container}>{children}</main>
    </>
  );
};

export default Layout;

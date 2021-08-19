import { FunctionComponent } from "react";
import { ILayoutProps } from "./Layout.props";
import styles from "./Layout.module.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { AppContextProvider, IAppContext } from "../context/app";
import Logo from "./logo.svg";

const Layout: React.FC<ILayoutProps> = ({
  children,
}: ILayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};
export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
export default Layout;

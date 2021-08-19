import { ISidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.scss";
import Menu from "../Menu";
import Logo from "../logo.svg";
import cn from "classnames";
import { Search } from "../../components";
import Link from "next/link";

const Sidebar: React.FC<ISidebarProps> = ({
  className,
  ...props
}: ISidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Link href={`/`}>
        <a>
          <Logo />
        </a>
      </Link>
      <Search />
      <Menu />
    </div>
  );
};

export default Sidebar;

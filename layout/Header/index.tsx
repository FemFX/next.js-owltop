import { IHeaderProps } from "./Header.props";
import styles from "./Header.module.scss";

const Header: React.FC<IHeaderProps> = ({
  ...props
}: IHeaderProps): JSX.Element => {
  return (
    <div {...props}>
      <h1>Header</h1>
    </div>
  );
};

export default Header;

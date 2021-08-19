import { IFooterProps } from "./Footer.props";
import styles from "./Footer.module.scss";
import cn from "classnames";
import { format } from "date-fns";

const Footer: React.FC<IFooterProps> = ({
  className,
  ...props
}: IFooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</div>
      <a href="#">Пользовательское соглашение</a>
      <a href="#">Политика конфиденциальности</a>
    </footer>
  );
};

export default Footer;

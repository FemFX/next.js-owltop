import { useState } from "react";
import { ISearchProps } from "./Search.props";
import styles from "./Search.module.scss";
import cn from "classnames";
import { Button, Input } from "..";
import GlassIcon from "./glass.svg";
import { useRouter } from "next/router";

const Search = ({ className, ...props }: ISearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    });
  };
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      goToSearch();
    }
  };
  return (
    <div className={cn(styles.search, className)} {...props}>
      <Input
        placeholder="Поиск..."
        value={search}
        className={styles.input}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        appearence="primary"
        className={styles.button}
        onClick={goToSearch}
      >
        <GlassIcon />
      </Button>
    </div>
  );
};
export default Search;

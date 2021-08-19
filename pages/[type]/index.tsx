import { withLayout } from "../../layout";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { MenuItem } from "../../interfaces/menu.interfaces";
import { firstLevelMenu } from "../../helpers";
import { ParsedUrlQuery } from "querystring";
import { TopLevelCategory } from "../../interfaces/page.interfaces";

const Type: React.FC<ITypeProps> = ({
  firstCategory,
  menu,
}: ITypeProps): JSX.Element => {
  return <>Type:{firstCategory}</>;
};

export default withLayout(Type);
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((m) => "/" + m.route),
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps<ITypeProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }
  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    { firstCategory: firstCategoryItem.id }
  );
  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};
interface ITypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
}

import { useReducer, useEffect } from "react";
import { ITopPageComponentProps } from "./TopPage.props";
import styles from "./TopPage.module.scss";
import {
  Advantages,
  Card,
  HTag,
  P,
  Product,
  Sort,
  Tag,
} from "../../components";
import { HhData } from "../../components/hhData";
import { TopLevelCategory } from "../../interfaces/page.interfaces";
import { SortEnum } from "../../components/Sort/Sort.props";
import { sortReducer } from "../../components/Sort/sort.reducer";

const TopPageComponent = ({
  firstCategory,
  page,
  products,
}: ITopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatch] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.Rating,
    }
  );
  const setSort = (sort: SortEnum) => {
    dispatch({ type: sort });
  };
  useEffect(() => {
    dispatch({ type: "reset", initialState: products });
  }, [products]);
  return (
    <>
      <div className={styles.title}>
        <HTag tag="h1">{page.title}</HTag>
        {products && (
          <Tag color="grey" size="m">
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts &&
          sortedProducts.map((p) => <Product key={p._id} product={p} />)}
      </div>
      <div className={styles.hhTitle}>
        <HTag tag="h2">Вакансии - {page.category}</HTag>
        {products && (
          <Tag color="red" size="m">
            hh.ru
          </Tag>
        )}
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <HTag tag="h2">Преимущества</HTag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        ></div>
      )}
      <HTag tag="h2">Получаемые навыки</HTag>
      {page.tags.map((t) => (
        <Tag key={t} color="primary">
          {t}
        </Tag>
      ))}
    </>
  );
};

export default TopPageComponent;

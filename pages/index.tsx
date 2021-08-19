import { GetStaticProps } from "next";
import { useState } from "react";
import axios from "axios";
import { HTag, Button, P, Tag, Rating, Input, Textarea } from "../components";
import { withLayout } from "../layout";
import { MenuItem } from "../interfaces/menu.interfaces";

interface IHomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

function Home({ menu, firstCategory }: IHomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(3);
  return (
    <>
      <HTag tag="h1">Text</HTag>
      <Button arrow="right">text</Button>
      <Button appearence="ghost" arrow="down">
        text
      </Button>
      <P>1</P>
      <Tag size="s" color="primary">
        tag
      </Tag>
      <Rating rating={rating} setRating={setRating} isEditable={true} />
      <ul></ul>
      {menu.map((item) => (
        <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
      ))}
      <Input></Input>
      <Textarea></Textarea>
    </>
  );
}
export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    { firstCategory }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

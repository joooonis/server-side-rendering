import { GetStaticProps } from "next";
import Link from "next/link";

interface Props {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function SSR({ title, body }: Props) {
  return (
    <div>
      <h1>this is SSR Page</h1>
      <h3>{title}</h3>
      <pre>{body}</pre>
      <Link href="/">Go to CSR page</Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/posts/1");
  const data: Props = await res.json();
  console.log("SSR page is rendered");
  return {
    props: data,
  };
};

import Link from "next/link";

interface Props {
  movie: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
}

export default function SSR({ movie }: Props) {
  return (
    <div>
      <h1>this is SSR Page</h1>
      <h6>{movie.title}</h6>
      <pre>{movie.body}</pre>
      <Link href="/">Go to CSR page</Link>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/posts/1");
  const data: Props = await res.json();
  console.log("SSR page is rendered");
  return {
    props: {
      movie: data,
    },
  };
};

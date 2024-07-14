import Link from "next/link";
import React from "react";

interface Props {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function CSR() {
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://jsonplaceholder.typicode.com/posts/1");
      const data = await res.json();
      setMovie(data);
    };
    fetchData();
  }, []);

  const [movie, setMovie] = React.useState<Props>();

  return (
    <div>
      <h1>this is CSR Page</h1>

      {movie ? (
        <>
          <h3>{movie.title}</h3>
          <pre>{movie.body}</pre>
        </>
      ) : (
        <>...loading</>
      )}
      <Link href="/ssr">Go to SSR page</Link>
    </div>
  );
}

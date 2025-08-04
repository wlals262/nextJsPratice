import { ReactNode, useEffect } from "react";
import SearchableLayout from "./components/searchable-layout";
import style from "./index.module.css";
import books from "@/mock/books.json"; //@는 src 폴더를 의미함.
import BookItem from "./components/book-item";
import { InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";

export const getServerSideProps = async () => {
  // 컴포넌트보다 먼저 실행되어, 컴포넌트에 필요한 데이터를 불러오는 함수

  const allBooks = await fetchBooks();
  // fetchBooks 함수를 사용하기 위해 async/await 사용

  return {
    props: {
      allBooks,
    },
  };
};

// export default function Home({
//   data,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
export default function Home({
  allBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  useEffect(() => {
    console.log(window);
  }, []);

  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
        {/* map 함수를 통해 각 요소를 BookItem 컴포넌트에 반환 + */}
        {/* 유니크 키를 book.id로 하고 book의 모든 값을 컴포넌트에 props로 전달 */}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

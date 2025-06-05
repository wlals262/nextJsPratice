import { ReactNode } from "react";
import SearchableLayout from "./components/searchable-layout";
import style from "./index.module.css";
import books from "@/mock/books.json"; //@는 src 폴더를 의미함.
import BookItem from "./components/book-item";

export default function Home() {
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

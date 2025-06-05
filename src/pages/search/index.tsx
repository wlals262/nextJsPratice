import { useRouter } from "next/router";
import { ReactNode } from "react";
import SearchableLayout from "../components/searchable-layout";
import books from "@/mock/books.json"; //@는 src 폴더를 의미함.
import BookItem from "../components/book-item";

export default function Search() {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Search.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

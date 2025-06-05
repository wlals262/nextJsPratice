import type { BookData } from "@/types";
import Link from "next/link";
import style from "./book-item.module.css";

// book 아이템을 보여주는 컴포넌트
export default function BookItem({
  id,
  title,
  subTitle,
  description,
  author,
  publisher,
  coverImgUrl,
}: BookData) {
  // 구조분해할당으로 props를 받아옴
  // 타입을 지정하지 않으면 오류가 발생하기 때문에 타입을 지정해줌.
  return (
    <Link href={`/book/${id}`} className={style.container}>
      <img src={coverImgUrl} />
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <br />
        <div className={style.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
}

import Link from "next/link";
import { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <div>
      <div>페이지가 존재하지 않습니다. 다른 페이지를 검색하세요.</div>
      <Link href="/serach">검색</Link>
    </div>
  );
};

export default NotFound;

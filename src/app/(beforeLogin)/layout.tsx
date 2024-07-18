import { Children } from "react";
import styles from "@/app/page.module.css";

export default function Layout({
  children,
  modal,
}: {
  children: JSX.Element;
  modal: JSX.Element;
}) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}

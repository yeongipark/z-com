"use client";
import style from "./tap.module.css";
import { useState } from "react";

export default function Tab() {
  const [tab, setTab] = useState("rec");

  const onClickRec = () => {
    setTab("rec");
  };
  const onClickFol = () => {
    setTab("fol");
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeText}>홈</div>
      <div className={style.homeTab}>
        <div onClick={onClickRec}>추천</div>
        <div onClick={onClickFol}>팔로우 중</div>
        <div
          className={`${style.tabIndicator} ${
            tab === "rec" ? style.rec : style.fol
          }`}
        />
      </div>
    </div>
  );
}

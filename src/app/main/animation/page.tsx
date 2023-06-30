"use client"
import { useState } from 'react';
import animation from './animation.module.css'

export default function Animation() {
  const [isClicked, setIsClicked] = useState(false);
  function handleOnClick() {
    setIsClicked(!isClicked);
    console.log("isClicked:", isClicked)
  }

  return (
    <div className="p-2">
      <div>
        DEMO01 animation slideIn
      </div>
      <div className='overflow-hidden'>
        <div className={`
          ${animation["anima-demo-01"]} 
        `}>
          これはアニメーションのデモ01です。3秒のdurationで画面の右端から左端にこの文字がスライドインします。
        </div>
      </div>

      <div>
        DEMO02 animation fadeIn
      </div>
      <div
        className={`
        ${animation["anima-demo-02"]}
      `}>
        これはアニメーションのデモ02です。10秒のdurationで文字がふわっとフェードインします。
      </div>
      <div>
        DEMO03 animation 拡大
      </div>
      <div
        className={`
        flex justify-center
        ${animation["anima-demo-03"]}
      `}>
        これはアニメーションのデモ03です。
      </div>
      <div>
        DEMO04 animation イメージファイル ねこぱんち
      </div>
      <p>これはアニメーションのデモ04です。</p>
      <div
        className={`
        ${animation["anima-demo-04"]}
      `}>
      </div>

    </div>
  )
}

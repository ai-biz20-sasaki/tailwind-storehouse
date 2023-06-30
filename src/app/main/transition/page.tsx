"use client"
import { useState } from 'react';
import transition from './transition.module.css'

export default function Transition() {
  const [isClicked, setIsClicked] = useState(false);
  function handleOnClick() {
    setIsClicked(!isClicked);
    console.log("isClicked:", isClicked)
  }

  return (
    <div className="p-2">
      <div>
        DEMO01 transition: font-size 3s 1s;
      </div>
      <div className={`
        ${transition["trans-demo-01"]} 
        ${transition["trans-demo-01:hover"]}
      `}>
        Hover me! フォントサイズ14px→36px
      </div>

      <div>
        DEMO02 Click on the button to TRANSITION
      </div>
      <button
        className={`
        ${transition["trans-demo-02"]}
        ${isClicked ? transition["trans-demo-02-clicked"] : ""}`}
        onClick={handleOnClick} 
      >
        Click me! background-color red to blue
      </button>


    </div>
  )
}

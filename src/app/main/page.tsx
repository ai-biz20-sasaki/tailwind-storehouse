"use client"
import Link from 'next/link';
import { useState } from 'react';
import Breadcrumb from "../components/breadcrumb"
import LeftSidebar from "../components/left-sidebar"
import Fontsize from "../main/fontsize"
import Main from "../main/main"

export default function main() {
  const [currentPos, setCurrentPos] = useState('main')
 
  return (
    <div>
      <nav className="flex flex-row p-2 m-1">
        <Breadcrumb isNavbar={true} pos={currentPos} />
      </nav>
      <div className="flex flex-row p-2 m-1">
        <div className="basis-1/4 p-2 m-1">
          <div onClick={() => setCurrentPos('main')}>main</div>
          <div onClick={() => setCurrentPos('fontsize')}>fontsize</div>
        </div>        
        <div className="basis-3/4 p-2 m-1">
        {
          //即時関数の中でif文を実行する
          (()=> {
            if( currentPos === 'main' ) {
              return (<Main />) 
            } else if( currentPos === 'fontsize' ) {
              return (<Fontsize />)
            } else {
              return ("コンポーネントがない！")
            }
          })()
        }
        </div>
      </div>
    </div>
  )
}

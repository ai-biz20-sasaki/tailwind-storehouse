"use client"
import Breadcrumb from "../../components/breadcrumb"
import LeftSidebar from "../../components/left-sidebar"

export default function main() {
  return (
    <div>
      <nav className="flex flex-row p-2 m-1">
        <Breadcrumb />
      </nav>
      <div className="flex flex-row p-2 m-1">
        <div className="basis-1/4 p-2 m-1">
          <LeftSidebar />
        </div>        
        <div className="basis-3/4 p-2 m-1">
          <p>Main</p><br />
          <p>メインページ</p>
          <p>左サイドバーを選択してください</p>
        </div>
      </div>
    </div>
  )
}

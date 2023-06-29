"use client"
import Link from "next/link";
import { PosContext } from "../components/pos-context";
import styles from './styles.module.css'

export default function Home() {

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center mt-32">
        <PosContext.Provider value="main">
          <Link className="text-5xl"
            href="/main"
          >
            Tailwind Storehouse <br />
          </Link>
        </PosContext.Provider>
        <div className="text-2xl p-4">
          ようこそ！
        </div>
        <div className={`${styles["text-normal"]} pt-2`}>
          このサイトはTailWindのサンプル集です。
        </div>
      </div>
    </div>
  )
}

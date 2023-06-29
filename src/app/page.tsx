import Link from "next/link";
import styles from './styles.module.css'

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center mt-32">
        <div className="p-4">
          <Link className="text-5xl"
            href="/main"
          >
            Tailwind Storehouse <br />
          </Link>
        </div>
        <div className="text-2xl p-4">
          ようこそ！
        </div>
        <div className={`${styles.dashboard} pt-2`}>
          このサイトはTailWindのサンプル集です。
        </div>
      </div>
    </div>
  )
}

import Link from "next/link";

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
        <div className="p-4">
          ようこそ！
        </div>
        <div className="p-4">
          このサイトはTailWindのサンプル集です。
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link';

export default function fontsize() {
  return (
    <div>
      <div className="flex flex-row p-2 m-1">
        <div className="basis-1/4 p-2 m-1">
          <Link
            href="/main"
            className=""
          >
            mainに戻る
          </Link>
        </div>
        <div className="basis-3/4 p-2 m-1">
          <p>フォントサイズ</p><br />
          <p className="text-sm">フォントサイズ text-sm はどれくらいに見える</p>
          <p className="text-xm">フォントサイズ text-xm はどれくらいに見える</p>
          <p className="text-base">フォントサイズ text-base はどれくらいに見える</p>
          <p className="text-lg">フォントサイズ text-lg はどれくらいに見える</p>
          <p className="text-xl">フォントサイズ text-xl はどれくらいに見える</p>
          <p className="text-2xl">フォントサイズ text-2xl はどれくらいに見える</p>
          <p className="text-3xl">フォントサイズ text-3xl はどれくらいに見える</p>
          <p className="text-4xl">フォントサイズ text-4xl はどれくらいに見える</p>
          <p className="text-5xl">フォントサイズ text-5xl はどれくらいに見える</p>
          <p className="text-6xl">フォントサイズ text-6xl はどれくらいに見える</p>
          <p className="text-7xl">フォントサイズ text-7xl はどれくらいに見える</p>
          <p className="text-8xl">フォントサイズ text-8xl はどれくらいに見える</p>
          <p className="text-9xl">フォントサイズ text-9xlはどれくらいに見える</p>
        </div>
      </div>
    </div>
  )
}

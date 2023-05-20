import Link from 'next/link';

export default function Home() {
  return (
      <div>
        <p>home</p>
        <Link
          href="/fontsize"
          className=""
        >
          fontsize
        </Link>
      </div>
  )
}

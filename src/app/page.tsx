import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="flex flex-row p-2 m-1">
        <p>home</p>
      </div>
      <div className="flex flex-row p-2 m-1">
        <div className="basis-1/4 p-2 m-1">
          <Link 
            href="/fontsize"
          >
            fontsize
          </Link>
          <br />
        </div>
        <div className="basis-3/4 p-2 m-1">
        <p>aaa</p>
        </div>
      </div>
    </div>
  )
}

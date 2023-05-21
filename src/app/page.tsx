import Link from 'next/link';

export default function Home() {
  return (
    <div className='container mx-auto h-64'>
        <Link className='w-full h-full flex justify-center items-center text-5xl'
          href="/main"
        >
          Tailwind Storehouse <br />
        </Link>
        <p className='w-full flex justify-center items-center'>
          ようこそ！
        </p>
        <p className='w-full flex justify-center items-center'>
          このサイトはTailWindのサンプル集です。
        </p>
    </div>
  )
}

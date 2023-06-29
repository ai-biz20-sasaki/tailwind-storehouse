"use client"
import Link from 'next/link';

export default function LeftSidebar() {
  return (
    <>
      <div>
        <Link className="" href="/main">
            main
        </Link>
      </div>
      <div>
        <Link className="" href="/main/fontsize">
            fontsize
        </Link>
      </div>
    </>
  )
}

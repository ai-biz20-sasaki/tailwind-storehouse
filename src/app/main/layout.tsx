"use client"
import { useState } from 'react';
import Breadcrumb from "../components/breadcrumb"

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  const [currentPos, setCurrentPos] = useState("main");
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="flex flex-row p-2 m-1">
        <div>
          <Breadcrumb isNavbar={true} pos={currentPos} />
        </div>
      </nav>
      {children}<Breadcrumb isNavbar={false} pos={currentPos} />
    </section>
  )
}
"use client"
import Breadcrumb from "../../components/breadcrumb"
import LeftSidebar from "../../components/left-sidebar"

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div>
      <nav className="flex flex-row p-2 m-1">
        <Breadcrumb />
      </nav>
      <div className="flex flex-row p-2 m-1">
        <div className="basis-1/4 p-2 m-1">
          <LeftSidebar />
        </div>        
        <div className="basis-3/4 p-2 m-1">
          {children}
        </div>
      </div>
    </div>
    </section>
  )
}
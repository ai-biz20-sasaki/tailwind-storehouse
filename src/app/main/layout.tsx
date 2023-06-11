import Breadcrumb from "../components/breadcrumb"

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="flex flex-row p-2 m-1">
        <Breadcrumb />
      </nav>
      {children}
    </section>
  )
}
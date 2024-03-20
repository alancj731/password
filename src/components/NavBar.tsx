import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full h-10  sticky top-0 ">
      <div className="container w-full h-full flex justify-round">
        <nav className="flex h-12 items-center px-4 border-gray-200 shrink-0 gap-10">
          <Link
            className="font-semibold text-white hover:no-underline hover:text-green-500"
            href="/"
          >
            All Memo
          </Link>
          <Link
            className="font-semibold  text-white hover:no-underline hover:text-green-500"
            href="/newmemo"
          >
            Add New
          </Link>
        </nav>
      </div>
    </div>
  );
}

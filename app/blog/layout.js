export default function BlogLayout({ children }) {
  return (
    <>
      <header className="bg-gray-800 text-white p-6 text-center">
        <nav className="space-x-6 flex place-content-start hover:text-yellow-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
          </svg>
          <a href="/" className="hover:text-yellow-500">Back to Home Page</a>
        </nav>
      </header>
      <main className="flex p-8 min-h-screen">
        <section className="blog-page flex-1 p-4">{children}</section>
      </main>
      <footer className="text-center bg-gray-800 text-white p-4">
        © 2022 Developed by Maksym Hordiienko
      </footer>
    </>
  );
}

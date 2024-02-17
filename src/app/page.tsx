import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav>
        <Link href="/dashboard">Dashboard</Link>
      </nav>        

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <p>main content</p>
        <p>goes</p>
        <p>in</p>
        <p>here</p>
      </div>
    </main>
  );
}

import Link from "next/link";
import { LoginButton, LogoutButton } from "./auth";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav>
        <LoginButton />
        <LogoutButton />
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/api/auth/signin">Sign In</Link>
      </nav>        
    </main>
  );
}

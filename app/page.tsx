import Link from "next/link";

export default function Home() {
  return (
    <Link href="/login" className="font-bold p-2 bg-gray-100 rounded-sm">Login</Link>
  );
}

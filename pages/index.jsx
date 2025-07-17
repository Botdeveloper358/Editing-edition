import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white text-center space-y-6">
      <h1 className="text-5xl font-bold">🎬 Editing Edition</h1>
      <p className="text-lg">Premium Portfolio by Weesh Master</p>
      <div className="flex space-x-6">
        <Link href="/login"><button className="px-6 py-2 bg-blue-600 rounded">Login</button></Link>
        <Link href="/register"><button className="px-6 py-2 bg-green-600 rounded">Register</button></Link>
        <Link href="/dashboard"><button className="px-6 py-2 bg-purple-600 rounded">Dashboard</button></Link>
        <Link href="/payment"><button className="px-6 py-2 bg-pink-600 rounded">Payment</button></Link>
      </div>
    </div>
  );
}

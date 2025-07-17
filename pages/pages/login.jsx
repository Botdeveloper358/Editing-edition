export default function Login() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white space-y-4">
      <h1 className="text-4xl">🔑 Login</h1>
      <form className="flex flex-col space-y-4 w-72">
        <input className="p-2 rounded bg-gray-700" placeholder="Email" type="email" />
        <input className="p-2 rounded bg-gray-700" placeholder="Password" type="password" />
        <button className="p-2 rounded bg-blue-500">Login</button>
      </form>
    </div>
  );
}

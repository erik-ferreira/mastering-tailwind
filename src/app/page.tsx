export default function Home() {
  return (
    <div className="h-screen bg-slate-900 p-8 text-slate-100">
      <h1 className="font-bold text-5xl flex items-center gap-3 before:w-0.5 before:h-8 before:bg-sky-500 before:flex">
        Hello guys
      </h1>
      <h2>Hello tailwind</h2>
      <p>Hello paragraph</p>

      <button
        disabled
        className="bg-sky-500 px-4 py-2 rounded-md font-medium mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        Sign in
      </button>
    </div>
  )
}
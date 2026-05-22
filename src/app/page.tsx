import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black px-6">

      <main className="max-w-4xl w-full  rounded-3xl shadow-xl p-10">

        <div className="flex flex-col items-center text-center gap-6">

          <h1 className="text-5xl font-bold text-black dark:text-white">

            Lead Distribution System

          </h1>

          <p className="max-w-2xl text-zinc-600 dark:text-zinc-400 text-lg">

            Automatically distribute customer service requests among providers using
            smart allocation rules including mandatory assignment, round robin,
            quota handling and live dashboard tracking.

          </p>

        </div>


        <div className="mt-10">

          <h2 className="text-xl font-semibold mb-4 dark:text-white">

            How to use

          </h2>

          <div className="space-y-3 text-zinc-700 dark:text-zinc-300">

            <p>1️⃣ Submit a service request using Request Service.</p>

            <p>2️⃣ System processes and allocates providers automatically.</p>

            <p>3️⃣ Open Dashboard to track provider assignments.</p>

            <p>4️⃣ Use Test Tools to generate sample leads and reset quota.</p>

          </div>

        </div>



        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            href="/request-service"
            className="px-6 py-3 rounded-xl bg-white text-black hover:bg-blue-700 transition"
          >
            Request Service
          </Link>

          <Link
            href="/dashboard"
            className="px-6 py-3 rounded-xl border border-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            Dashboard
          </Link>

          <Link
            href="/test-tools"
            className="px-6 py-3 rounded-xl border border-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            Test Tools
          </Link>

        </div>

      </main>

    </div>
  );
}
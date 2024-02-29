import Image from 'next/image'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'create-exwind-app',
  description: 'Built with create-exwind-app',
}

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-16 max-w-2xl mx-auto">

      <div className="flex flex-col space-y-4">
        <Image
          src='/logo.jpeg'
          alt="exwind logo"
          width={1000}
          height={1000}
          className="w-3/4 h-auto mx-auto"
        />
        <p className="pt-4 font-light text-lg text-neutral-500">
          This template is designed to enforce type safety across your application, without compromise. It uses Next.js with TypeScript <span className="text-emerald-600">(obviously)</span>,
          Tailwind with Shadcn/ui, Convex <span className="text-emerald-600">(optional)</span> as a complete backend solution, and Jest & React Testing Library 
          so you never forget to test!
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 w-full">
        <a
          href="/"
          className="group rounded-lg border border-neutral-500 px-5 py-4 transition-colors hover:border-emerald-300 hover:bg-emerald-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-lg font-light text-emerald-900`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn more about <code className="text-emerald-600">create-exwind-app</code>.
          </p>
        </a>
      </div>

      <span className="mt-12 text-neutral-500 text-xs">The tech &mdash;</span>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 w-full gap-4 mb-2">
        <a
          href="https://nextjs.org/"
          className="group rounded-lg border border-neutral-500 px-5 py-4 transition-colors hover:border-emerald-300 hover:bg-emerald-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-lg font-light text-emerald-900`}>
            Next.js{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
            Next.js is the industry-standard for building React applications.
          </p>
        </a>
        <a
          href="https://tailwindcss.com/"
          className="group rounded-lg border border-neutral-500 px-5 py-4 transition-colors hover:border-emerald-300 hover:bg-emerald-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-lg font-light text-emerald-900`}>
            Tailwind{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
            Tailwind lets you speedrun CSS. It's quick, efficient, and easy to use. 
          </p>
        </a>
        <a
          href="https://www.convex.dev/"
          className="group rounded-lg border border-neutral-500 px-5 py-4 transition-colors hover:border-emerald-300 hover:bg-emerald-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-lg font-light text-emerald-900`}>
            Convex{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
            Convex is a fullstack TypeScript dev platform. It's realtime, efficient, and offers a great DX.
          </p>
        </a>
        <a
          href="https://jestjs.io/"
          className="group rounded-lg border border-neutral-500 px-5 py-4 transition-colors hover:border-emerald-300 hover:bg-emerald-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-lg font-light text-emerald-900`}>
            Jest{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
            Jest is unmatched in unit testing. It's straight forward and easy to use.  
          </p>
        </a>
      </div>
    </main>
  );
}

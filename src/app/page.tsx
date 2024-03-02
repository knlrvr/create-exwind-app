import Image from 'next/image'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import type { Metadata } from 'next'
import { ThemeToggle } from '@/components/toggle-theme';
import { FAQAccordion } from '@/components/faq';

export const metadata: Metadata = {
  title: 'create-exwind-app',
  description: 'Built with create-exwind-app',
}

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-16 max-w-2xl mx-auto">

      <ThemeToggle />

      <div className="mt-8">
        <h1 className="text-center text-lg sm:text-2xl">Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-emerald-500 dark:from-emerald-200 dark:to-teal-700">create-exwind-app</span> !</h1>
        <p className="text-center sm:text-left pt-4 font-light text-lg text-neutral-500">
          This template is designed to enforce type safety across your application, without compromise. It uses Next.js with TypeScript <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-emerald-500 dark:from-emerald-200 dark:to-teal-700">(obviously)</span>,
          Tailwind with Shadcn/ui, Convex <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-emerald-500 dark:from-emerald-200 dark:to-teal-700">(optional)</span> as a complete backend solution, and Jest
          so you never forget to test!
        </p>
      </div>

      <div className="grid grid-cols-1 w-full mt-12">
        <a
          href="https://github.com/knlrvr/create-exwind-app"
          className="group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card>
            <CardHeader>
              <CardTitle>Docs</CardTitle>
              <CardDescription>create-exwind-app documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-500 font-light">Learn more about create-exwind-app. If you like what you see or have any ideas, star the repo, send me a message, or contribute!</p>
            </CardContent>
            <CardFooter>
              <p className="text-neutral-500 text-xs">Learn More &rarr;</p>
            </CardFooter>
          </Card>
        </a>
      </div>

      <div className="my-12 grid grid-cols-1 sm:grid-cols-2 w-full gap-4">
        
        <a
          href="https://nextjs.org/"
          className="group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card>
            <CardHeader>
              <CardTitle>Next.js</CardTitle>
              <CardDescription>React Framework</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-500 font-light">The industry standard for React applications in 2024.</p>
            </CardContent>
            <CardFooter>
              <p className="text-neutral-500 text-xs">Learn More &rarr;</p>
            </CardFooter>
          </Card>
        </a>


        <a
          href="https://tailwindcss.com/"
          className="group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card>
            <CardHeader>
              <CardTitle>Tailwind CSS</CardTitle>
              <CardDescription>React Framework</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-500 font-light">Tailwind basically lets you speedrun CSS. </p>
            </CardContent>
            <CardFooter>
              <p className="text-neutral-500 text-xs">Learn More &rarr;</p>
            </CardFooter>
          </Card>
        </a>

        <a
          href="https://www.convex.dev/"
          className="group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card>
            <CardHeader>
              <CardTitle>Convex</CardTitle>
              <CardDescription>TypeScript Backend</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-500 font-light">Convex is a fullstack TypeScript dev platform.</p>
            </CardContent>
            <CardFooter>
              <p className="text-neutral-500 text-xs">Learn More &rarr;</p>
            </CardFooter>
          </Card>
        </a>
        <a
          href="https://jestjs.io/"
          className="group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card>
            <CardHeader>
              <CardTitle>Jest</CardTitle>
              <CardDescription>Unit testing</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-500 font-light">The easiest testing framework.</p>
            </CardContent>
            <CardFooter>
              <p className="text-neutral-500 text-xs">Learn More &rarr;</p>
            </CardFooter>
          </Card>
        </a>
      </div>

      <FAQAccordion />
    </main>
  );
}

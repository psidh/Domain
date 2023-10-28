"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import { useRouter, usePathname, useSearchParams } from 'next/navigation' // import the new hooks from next/navigation
import { useState, useEffect } from 'react'
import Loading from './loading'
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  const router = useRouter()
  const pathname = usePathname() // use the usePathname hook to get the current path
  const searchParams = useSearchParams() // use the useSearchParams hook to get the current query
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url) => (url !== pathname) && setLoading(true) // compare url with pathname instead of router.asPath
    const handleComplete = (url) => (url === pathname) && setLoading(false) // compare url with pathname instead of router.asPath

    // router.events is not supported, so you need to use other hooks or methods to listen for route changes
    // see https://beta.nextjs.org/docs/routing/linking-and-navigating for more details

    return () => {
      // remove the event listeners as well
    }
  }, [router, pathname, searchParams]) // add pathname and searchParams as dependencies

  return (
    <html lang="en">
      <body className={inter.className}>
        {loading ? <div><Loading /></div> : children}
      </body>
    </html>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import siteConfig from '../config/site.json'
import Navbar from '../components/Navbar'
import FileListing from '../components/FileListing'
import Footer from '../components/Footer'

export default function Home() {
  const { query } = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>{siteConfig.title}</title>
      </Head>

      <main className="flex flex-col w-full flex-1 bg-gray-50">
        <Navbar />
        <div className="mx-auto w-full max-w-4xl border-4 border-red-100">
          <FileListing query={query} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
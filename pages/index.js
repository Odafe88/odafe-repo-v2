import Head from 'next/head'
import { Hompage } from '../page-components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Odafe Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hompage />
      </div>
    </div>
  )
}

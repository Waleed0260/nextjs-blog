import Link from "next/link";
import Image from 'next/image'
import Layout from "../../Component/Layout";
import Head from 'next/head'

export default function FirstPost() {
    return <>
    <Layout>
          <Head>
        <title>First Post</title>
      </Head>
    <h1>First Post</h1>
    <Image 
    src="/profile.jpg"
    width={400}
    height={400}
    />
    <Link href="/">Back to home</Link>
    </Layout>
    </>;
  }

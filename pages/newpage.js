import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head';
import Layout from '../components/layout';



export default function newPage() {
    return (
        <Layout>
            <Head>
                <title>New Page!</title>
                <link rel="icon" href="/static/icon.png"></link>
            </Head>
            <h1>New Page!</h1>
            <h2>
                <Link href="/">
                    <a>Back To Home!</a>
                </Link>
            </h2>
            {/* <img src="/images/profile.png" width="1440" height="1440" alt="Your Name" /> */}
            <Image
                src={"/images/profile.png"}
                width={1440}
                height={1440}
                alt={"Name is Khan"}
            />
        </ Layout>        
    );
}
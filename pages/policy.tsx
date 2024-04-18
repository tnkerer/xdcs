import Head from 'next/head'
import PolicyPage from '../components/privacypolicy/page'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Policy() {
    return (
        <>
            <Head>
                <title>XDCS - Privacy and Policy</title>
                <meta name="description" content="XDCS official website." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <PolicyPage />
            <Footer isLandingPage={false}/>
        </>
    )
}
import Head from 'next/head'
import BuyDcentPage from '../components/buydcent/page'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function BuyDcent() {
    return (
        <>
            <Head>
                <title>XDCS - Buy D&apos;Cent Wallet</title>
                <meta name="description" content="XDCS official website." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <BuyDcentPage />
            <Footer isLandingPage={false}/>
        </>
    )
}
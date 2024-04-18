import Head from 'next/head'
import ContactPage from '../components/contact/page'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Contact() {
    return (
        <>
            <Head>
                <title>XDCS - Get in touch</title>
                <meta name="description" content="XDCS official website." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <ContactPage />
            <Footer isLandingPage={false}/>
        </>
    )
}
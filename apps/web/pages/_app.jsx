import React from 'react'
import Script from 'next/script';
import { ParallaxProvider } from 'react-scroll-parallax';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import '../src/styles/global.scss'
import 'swiper/css'
import "swiper/css/effect-creative"
import "swiper/css/navigation"

export default function MyApp({ Component, pageProps }) {
    return(
        <>
            <Script id='analytics-cdn' strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-BZ1SLQEZEY`} />
            <Script id='script-analytics' strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                   
                    gtag('config', 'G-BZ1SLQEZEY');
                `}
            </Script>
            <PayPalScriptProvider options={{ "client-id": "AYMprwST6h7ZarJYCALE4AjhOg8Xilbls21O109JGDeM0V5AFDeuQW8Z18wI-jj3bOvM6hzLgEBeaJ05", currency: "MXN" }}>
                <ParallaxProvider>
                    <Component {...pageProps} />
                </ParallaxProvider>
            </PayPalScriptProvider> 
        </>
    )
}
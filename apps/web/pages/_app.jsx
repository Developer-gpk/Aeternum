import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import '../src/styles/global.scss'
import 'swiper/css'
import "swiper/css/effect-creative"
import "swiper/css/navigation"

export default function MyApp({ Component, pageProps }) {
    return(
        <ParallaxProvider>
            <Component {...pageProps} />
        </ParallaxProvider>
    )
}
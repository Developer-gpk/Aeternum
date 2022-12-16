import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SmartPhone, Coin1, Coin2, Coin3, Coin4, Coin5, Coin6, AeternumIcon } from 'ui'
import { Parallax  } from 'react-scroll-parallax'
import BlockContent from "@sanity/block-content-to-react"
import { useInView } from "react-hook-inview"
import Slide from 'react-reveal/Slide'
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

export default function Expertos({ title1, title2, title3 }){
    const [ref, inView] = useInView({ threshold: 1, unobserveOnEnter: true });
    const customAnimation = keyframes`
        0% {
            transform: rotateY(-30deg) translateY(300px) skewY(30deg);
            opacity: 0;
        }
        100% {
            transform: rotateY(0deg) translateY(0) skewY(0deg);
            opacity: 1;
        }
    `;
    return(
        <section className='block expertos' id='expertos'>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className='flex-row'>
                        <div className='texto'>
                            <div className='texto1' ref={ref}>
                                <Slide bottom when={inView ? true : false} delay={0}>
                                    <BlockContent blocks={title1} />
                                </Slide>
                            </div>
                            <div className='texto2' ref={ref}>
                                <Slide bottom when={inView ? true : false} delay={500}>
                                    <BlockContent blocks={title2} />
                                </Slide>
                            </div>
                            <div className='texto1 espacio' ref={ref}>
                                <Slide bottom when={inView ? true : false} delay={1000}>
                                    <BlockContent blocks={title3} />
                                </Slide>
                            </div>
                            <Link href="/#contacto" legacyBehavior>
                                <a>Has llegado con los expertos.</a>
                            </Link>
                        </div>
                        <Reveal keyframes={inView ? customAnimation : ""} style={{maxWidth: "551px", position: "relative", width: "100%"}}>
                            <div className={`imagenes`}>
                                <div className='background'>
                                    <Parallax speed={3}>
                                        <div className='coin1'>
                                            <Image src={Coin1} fill quality={100} alt="Criptomoneda"/>
                                        </div>
                                    </Parallax>
                                    <Parallax speed={2}>
                                        <div className='coin2'>
                                            <Image src={Coin2} fill quality={100} alt="Criptomoneda"/>
                                        </div>
                                    </Parallax>
                                    <Parallax speed={4}>
                                        <div className='coin3'>
                                            <Image src={Coin3} fill quality={100} alt="Criptomoneda"/>
                                        </div>
                                    </Parallax>
                                    <Parallax speed={5}>
                                        <div className='coin4'>
                                            <Image src={Coin4} fill quality={100} alt="Criptomoneda"/>
                                        </div>
                                    </Parallax>
                                    <Parallax speed={5}>
                                        <div className='coin5'>
                                            <Image src={Coin5} fill quality={100} alt="Criptomoneda"/>
                                        </div>
                                    </Parallax>
                                    <Parallax speed={3}>
                                        <div className='coin6'>
                                            <Image src={Coin6} fill quality={100} alt="Criptomoneda"/>
                                        </div>
                                    </Parallax>
                                    <div className='icono'>
                                        <Parallax speed={3}>
                                            <Image src={AeternumIcon} fill quality={100} alt="Aeternum"/>
                                        </Parallax>
                                    </div>
                                </div>
                                <div className='imagen'>
                                    <Image src={SmartPhone} fill quality={100} alt="smartphone" />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}
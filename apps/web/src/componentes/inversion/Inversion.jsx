import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SmartPhone2 } from 'ui'
import { Parallax  } from 'react-scroll-parallax'
import { useInView } from "react-hook-inview"
import { separator } from '../../../libs/complementos'
import { keyframes } from "@emotion/react"
import { Reveal } from "react-awesome-reveal"

export default function Inversion({ titlePrecio, titlePrecioCrypto, precio, precioCrypto, adicionalPrecioCrypto}){
    const [ref, inView] = useInView({ threshold: 0, unobserveOnEnter: true });
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
        <section className='block inversion' id='inversion'>
            <div className="holder">
                <div className="container-fluid">
                    <div className="flex-row">
                        <div className='inversion'>
                            <div className='title' ref={ref}>
                                <p className={inView ? "isActive" : ""}>Inversión</p>
                            </div>
                            <div className='precios'>
                                <div className="transferencia">
                                    <div className={`costo ${inView ? "isActive" : ""}`}><strong>$</strong> {separator(precio)} <span>MXN</span></div>
                                    <div className={`titulo ${inView ? "isActive" : ""}`}>{titlePrecio}</div>
                                </div>
                                <div className="crypto">
                                    <div className={`costo ${inView ? "isActive" : ""}`}><strong>$</strong> {separator(precioCrypto)} <span>MXN</span></div>
                                    <div className={`titulo ${inView ? "isActive" : ""}`}>{titlePrecioCrypto}</div>
                                    <div className={`subtitulo ${inView ? "isActive" : ""}`}>{adicionalPrecioCrypto}</div>
                                </div>
                            </div>
                            <div className={`terminos ${inView ? "isActive" : ""}`}>
                                Si deseas cancelar tu participación favor de hacerlo mínimo con 3 días de anticipación. Una vez realizada la operación de crypto, no hay devolución.
                            </div>
                            <div className='button'>
                                <Link href="/#contacto" legacyBehavior>
                                    <a>Inscríbete al Crash Course</a>
                                </Link>
                            </div>
                        </div>
                        <Reveal keyframes={inView ? customAnimation : ""} style={{maxWidth: "533px", position: "relative", width: "100%"}}>
                            <div className={`imagen `}>
                                <div className="background">
                                    <Parallax speed={-5}>
                                        <div className='circulo1'></div>
                                    </Parallax>
                                </div>
                                <Parallax speed={-3}>
                                    <div className='circulo2'></div>
                                </Parallax>
                                <div className="img">
                                    <Image src={SmartPhone2} fill alt='SmartPhone' />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}
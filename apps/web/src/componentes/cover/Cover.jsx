import React from 'react'
import Image from 'next/image'
import { Textura1, Textura2, ImagenCover } from 'ui'
import { Parallax  } from 'react-scroll-parallax'
import { useInView } from "react-hook-inview"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

export default function Cover({ title1, title2, title3}){
    const [ref, inView] = useInView({ threshold: 0, unobserveOnEnter: true });
    const customAnimation = keyframes`
        0% {
            transform: translateY(50px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    `;
    return(
        <section className='block cover' id='cover'>
            <div className='textura1'>
                <Image src={Textura1} fill alt='Textura 1 cover' priority quality={100} />
            </div>
            <div className='holder'>
                <div className='container-fluid' ref={ref}>
                    <div className="texto-1">
                        <span className={inView ? "isActive" : ""}>Comienza tu experiencia en el mundo de las</span>
                    </div>
                    <div className="texto-2">
                        <p className={inView ? "isActive" : ""}>Criptomonedas y Blockchain con nuestro Crash Course.</p>
                    </div>
                    <div className="text-3">
                        <p className={inView ? "isActive" : ""}>TU LLAVE AL MUNDO CRIPTO.</p>
                    </div>
                    <Link className={inView ? "view" : ""} to="contacto" spy={true} smooth={true} duration={1000} delay={0}>
                        Inscríbete al Crash Course
                    </Link>
                </div>
            </div>
            <div className='textura2'>
                <Image src={Textura2} fill alt='Textura 2 cover' priority quality={100} />
            </div>
            <div className={`cover`}>
                <Parallax speed={-5}>
                    <Reveal keyframes={inView ? customAnimation : ""}>
                        <Image src={ImagenCover} fill alt='Imagen cover' priority quality={100} />
                    </Reveal>
                </Parallax>
            </div>
        </section>
    )
}
import React from 'react'
import Image from 'next/image'
import { Textura1, Textura2, ImagenCover } from 'ui'
import { Parallax  } from 'react-scroll-parallax'
import { useInView } from "react-hook-inview"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Cover({ title1, title2, title3}){
    const [ref, inView] = useInView({ threshold: 0 });
    return(
        <section className='block cover' id='cover'>
            <div className='textura1'>
                <Image src={Textura1} fill alt='Textura 1 cover' />
            </div>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className="texto-1" ref={ref}>
                        Comienza tu experiencia en el mundo de las
                    </div>
                    <div className='texto-2'>
                        Criptomonedas y Blockchain con nuestro Crash Course.
                    </div>
                    <div className='text-3'>
                        Tu llave al mundo crypto.
                    </div>
                    <Link className={`${inView ? "view" : ""}`} to="contacto" spy={true} smooth={true} duration={1000} delay={0}>
                        Inscríbete al Crash Course
                    </Link>
                        <div className='text-cover-1'>
                            <div className={`cover-1 ${inView ? "view" : ""}`}></div>
                        </div>
                        <div className='text-cover-2'>
                            <div className={`cover-2 ${inView ? "view" : ""}`}></div>
                        </div>
                        <div className={`text-cover-3 ${inView ? "view" : ""}`}>
                            
                        </div>
                    
                </div>
            </div>
            <div className='textura2'>
                <Image src={Textura2} fill alt='Textura 2 cover' />
            </div>
            <div className={`cover ${inView ? "view" : ""}`}>
                <Parallax speed={-5}>
                    <Image src={ImagenCover} fill alt='Imagen cover' priority />
                </Parallax>
            </div>
        </section>
    )
}
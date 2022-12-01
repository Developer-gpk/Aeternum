import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Textura1, Textura2, ImagenCover } from 'ui'
import { Parallax  } from 'react-scroll-parallax'
import { useInView } from "react-hook-inview"

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
                        {inView ? (
                            <>
                                <p className={`${inView ? "isActive" : ""}`}>Comienza&nbsp;</p>
                                <p className={`${inView ? "isActive" : ""}`}>tu&nbsp;</p>
                                <p className={`${inView ? "isActive" : ""}`}>experiencia&nbsp;</p>
                                <p className={`${inView ? "isActive" : ""}`}>en&nbsp;</p>
                                <p className={`${inView ? "isActive" : ""}`}>el&nbsp;</p>
                                <p className={`${inView ? "isActive" : ""}`}>mundo&nbsp;</p>
                                <p className={`${inView ? "isActive" : ""}`}>de&nbsp;</p>
                                <p className={`${inView ? "isActive" : ""}`}>las&nbsp;</p>
                            </>
                        ) : ("")}
                    </div>
                    <div className='texto-2'>
                        {inView ? (
                            <>
                                <p className={`${inView ? "isActive" : ""}`}>Criptomonedas&nbsp;</p>
                                <p className={`${inView ? "isActive" : ""}`}>y&nbsp;</p>
                                <p className={`${inView ? "isActive" : ""}`}>Blockchain&nbsp;</p>
                                <p className={`${inView ? "isActive" : ""}`}>con&nbsp;</p>
                                <p className={`${inView ? "isActive" : ""}`}>nuestro&nbsp;</p>
                                <p className={`${inView ? "isActive" : ""}`}>Crash&nbsp;</p>
                                <p className={`${inView ? "isActive" : ""}`}>Course.&nbsp;</p>
                            </>
                        ) : ""}
                    </div>
                    <div className='text-3'>
                        {inView ? (
                            <>
                                <p className={`${inView ? "isActive" : ""}`}>Tu&nbsp;</p>
                                <p className={`${inView ? "isActive" : ""}`}>llave&nbsp;</p>
                                <p className={`${inView ? "isActive" : ""}`}>al&nbsp;</p>
                                <p className={`${inView ? "isActive" : ""}`}>mundo&nbsp;</p>
                                <p className={`${inView ? "isActive" : ""}`}>crypto.&nbsp;</p>
                            </>
                        ) : ""}
                    </div>
                    <Link href="/#contacto" legacyBehavior>
                        <a>Inscríbete al Crash Course</a>
                    </Link>
                </div>
            </div>
            <div className='textura2'>
                <Image src={Textura2} fill alt='Textura 2 cover' />
            </div>
            <div className='cover'>
                <Parallax speed={-5}>
                        <Image src={ImagenCover} fill alt='Imagen cover' priority />
                </Parallax>
            </div>
        </section>
    )
}
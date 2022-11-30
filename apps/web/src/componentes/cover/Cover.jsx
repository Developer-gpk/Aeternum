import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Textura1, Textura2, ImagenCover } from 'ui'
import { Parallax  } from 'react-scroll-parallax'
import { MovingComponent } from 'react-moving-text'
import { useInView } from "react-hook-inview"

export default function Cover({ title1, title2, title3}){
    const [ref, inView] = useInView({ threshold: 0 });
    const Letters1 = ["Comienza", "tu", "experiencia", "en", "el", "mundo", "de las"]
    const Letters2 = ["Criptomonedas", "y", "Blockchain", "con", "nuestro", "Crash", "Course."]
    const Letters3 = ["Tu llave", "al mundo", "crypto."]
    return(
        <section className='block cover' id='cover'>
            <div className='textura1'>
                <Image src={Textura1} fill alt='Textura 1 cover' />
            </div>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className={`texto-1 `} ref={ref}>
                        {Letters1.map((letter, index) =>(
                            <MovingComponent
                                type={inView ? "slideInFromTop" : ""}
                                duration="1000ms"
                                delay={`${index * 90+"ms"}`}
                                direction="normal"
                                timing="ease-in-out"
                                iteration="1"
                                fillMode="none"
                            >
                                {letter}&nbsp;
                            </MovingComponent>
                        ))}
                    </div>
                    <div className='texto-2'>
                        {Letters2.map((letter, index) =>(
                            <MovingComponent
                                type={inView ? "slideInFromTop" : ""}
                                duration="1000ms"
                                delay={`${index * 90+"ms"}`}
                                direction="normal"
                                timing="ease-in-out"
                                iteration="1"
                                fillMode="none"
                            >
                                {letter}&nbsp;
                            </MovingComponent>
                        ))}
                    </div>
                    <div className='text-3'>
                        {Letters3.map((letter, index) =>(
                            <MovingComponent
                                type={inView ? "slideInFromTop" : ""}
                                duration="1000ms"
                                delay={`${index * 90+"ms"}`}
                                direction="normal"
                                timing="ease-in-out"
                                iteration="1"
                                fillMode="none"
                            >
                                {letter}&nbsp;
                            </MovingComponent>
                        ))}
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
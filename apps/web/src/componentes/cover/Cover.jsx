import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Textura1, Textura2, ImagenCover } from 'ui'
import { Parallax  } from 'react-scroll-parallax'
import { MovingComponent } from 'react-moving-text'
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
                    <div className={`texto-1`} ref={ref}>
                        <span>Comienza tu </span>
                        <span>experiencia en el </span>
                        <span>mundo de las</span>
                    </div>
                    <div className='texto-2'>
                        <span>Criptomonedas </span>
                        <span>y Blockchain </span>
                        <span>con nuestro </span>
                        <span>Crash Course.</span>
                    </div>
                    <div className='text-3'>
                        <span>Tu llave </span>
                        <span>al mundo </span>
                        <span>crypto. </span>
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
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Textura1, Textura2, ImagenCover } from 'ui'
import { Parallax  } from 'react-scroll-parallax'
import TextFade from '../textFade/TextFade'

export default function Cover({ title1, title2, title3}){
    return(
        <section className='block cover' id='cover'>
            <div className='textura1'>
                <Image src={Textura1} fill alt='Textura 1 cover' />
            </div>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className='texto-1'>
                        <TextFade>
                            Comienza tu experiencia en el mundo de las
                        </TextFade>
                    </div>
                    <div className='texto-2'>
                        <TextFade>
                            Criptomonedas y Blockchain con nuestro Crash Course.
                        </TextFade>
                    </div>
                    <div className='text-3'>
                        <TextFade>
                            Tu llave al mundo crypto.
                        </TextFade>
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
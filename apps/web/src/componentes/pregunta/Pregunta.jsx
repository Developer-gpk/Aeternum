import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Crypto1, Crypto2, Crypto3 } from 'ui'
import { Parallax  } from 'react-scroll-parallax'

export default function Pregunta(){
    return(
        <section className="block pregunta" id="pregunta">
            <Parallax speed={-10}>
                <div className='cripto1'>
                    <Image src={Crypto1} fill alt='Moneda cripto' />
                </div>
            </Parallax>
            <Parallax speed={-10}>
                <div className='cripto2'>
                    <Image src={Crypto2} fill alt='Moneda cripto' />
                </div>
            </Parallax>
            <div className='cripto3'>
                <Parallax speed={-2}>
                    <Image src={Crypto3} fill alt='Moneda cripto' />
                </Parallax>
            </div>
            <div className="holder">
                <div className="container-fluid">
                    <div className="title">
                        <span>¿Ya te convenciste?</span><br />
                        Recuerda que el tiempo es dinero
                    </div>
                    <div className='button'>
                        <Link href="/#contacto" legacyBehavior>
                            <a>Inscríbete al Crash Course</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
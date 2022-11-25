import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Textura1, Textura2, ImagenCover } from 'ui'
import { buildImages } from '../../../libs/complementos'

export default function Curso({ ventajas }){
    return(
        <section className="block curso" id="curso">
            <div className='textura1'>
                <Image src={Textura1} fill alt="Textura" />
            </div>
            <div className='textura2'>
                <Image src={Textura2} fill alt="Textura" />
            </div>
            <div className="holder">
                <div className="container-fluid">
                    <div className='title'>
                        Este Curso de Criptomonedas y Blockchain es para ti si:
                    </div>
                    <div className="flex-row">
                        {ventajas.map((ventaja, index) =>(
                            <div className='ventaja' key={index}>
                                <div className='icon'>
                                    <Image src={buildImages(ventaja.imagen.asset).url()} fill alt={`icono-${index+1}`} />
                                </div>
                                <div className='content'>
                                    {ventaja.title}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='complemento'>
                        Nuestro Crash Course te brindará los conocimientos, estrategias y la asesoría que requieres para iniciar tu experiencia dentro del mundo crypto.
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
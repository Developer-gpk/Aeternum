import React from 'react'
import Image from 'next/image'
import { Textura3 } from 'ui'
import { buildImages } from '../../../libs/complementos'

export default function Temario({ dias }){
    return(
        <section className='block temario' id='temario'>
            <div className='textura'>
                <Image src={Textura3} fill alt="textura" />
            </div>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className='subtitle'>TEMARIO Y COSTOS</div>
                    <div className='title'>¿Qué aprenderás en nuestro curso de Crypto y Blockchain?</div>
                    <div className='flex-row'>
                        {dias?.map((dia, index) =>(
                            <div className='tarjeta' key={index}>
                                <div className='imagen'>
                                    <Image src={buildImages(dia?.imagen?.asset).url()} fill alt={`Dia ${index+1}`} />
                                </div>
                                <div className='dia'>Día {index+1}</div>
                                <div className='title'>{dia?.title}</div>
                                <div className="subtitle">{dia?.subtitle}</div>
                                <ul>
                                    {dia?.temario?.map((tema, index) =>(
                                        <li key={index}>{tema}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
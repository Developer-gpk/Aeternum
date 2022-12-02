import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { Textura3 } from 'ui'
import { buildImages } from '../../../libs/complementos'
import { useInView } from "react-hook-inview"

export default function Temario({ dias }){
    const [ref, inView] = useInView({ threshold: 0 });
    const [ref2, inView2] = useInView({ threshold: 0 });
    return(
        <section className='block temario' id='temario'>
            <div className='textura'>
                <Image src={Textura3} fill alt="textura" />
            </div>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className='subtitle' ref={ref2}>
                        <p className={inView2 ? "isActive" : ""}>TEMARIO&nbsp;</p>
                        <p className={inView2 ? "isActive" : ""}>Y&nbsp;</p>
                        <p className={inView2 ? "isActive" : ""}>COSTOS&nbsp;</p>
                    </div>
                    <div className='title'>
                        <p className={inView2 ? "isActive" : ""}>¿Qué&nbsp;</p>
                        <p className={inView2 ? "isActive" : ""}>aprenderás&nbsp;</p>
                        <p className={inView2 ? "isActive" : ""}>en&nbsp;</p>
                        <p className={inView2 ? "isActive" : ""}>nuestro&nbsp;</p>
                        <p className={inView2 ? "isActive" : ""}>curso&nbsp;</p>
                        <p className={inView2 ? "isActive" : ""}>de&nbsp;</p>
                        <p className={inView2 ? "isActive" : ""}>Crypto&nbsp;</p>
                        <p className={inView2 ? "isActive" : ""}>y&nbsp;</p>
                        <p className={inView2 ? "isActive" : ""}>Blockchain?</p>
                    </div>
                    <div className='flex-row'>
                        {dias?.map((dia, index) =>(
                            <div className='tarjeta' key={index}>
                                <div className='imagen' ref={ref}>
                                    <Image src={buildImages(dia?.imagen?.asset).url()} fill alt={`Dia ${index+1}`} className={`${inView ? "prueba" : ""}`} data-delay={`${index * 1}`}  />
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
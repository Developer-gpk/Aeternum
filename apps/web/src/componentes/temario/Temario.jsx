import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { Textura3 } from 'ui'
import { buildImages } from '../../../libs/complementos'
import { useInView } from "react-hook-inview"
import { MovingComponent } from 'react-moving-text'

export default function Temario({ dias }){
    const [ref, inView] = useInView({ threshold: 0, unobserveOnEnter: true });
    const [title, inViewTitle] = useInView({ threshold: 0, unobserveOnEnter: true });
    return(
        <section className='block temario' id='temario'>
            <div className='textura'>
                <Image src={Textura3} fill alt="textura" />
            </div>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className='subtitle' ref={title}>
                        <p className={inViewTitle ? "isActive" : ""}>TEMARIO&nbsp;</p>
                        <p className={inViewTitle ? "isActive" : ""}>Y&nbsp;</p>
                        <p className={inViewTitle ? "isActive" : ""}>COSTOS&nbsp;</p>
                    </div>
                    <div className='title'>
                        <p className={inViewTitle ? "isActive" : ""}>¿Qué&nbsp;</p>
                        <p className={inViewTitle ? "isActive" : ""}>aprenderás&nbsp;</p>
                        <p className={inViewTitle ? "isActive" : ""}>en&nbsp;</p>
                        <p className={inViewTitle ? "isActive" : ""}>nuestro&nbsp;</p>
                        <p className={inViewTitle ? "isActive" : ""}>curso&nbsp;</p>
                        <p className={inViewTitle ? "isActive" : ""}>de&nbsp;</p>
                        <p className={inViewTitle ? "isActive" : ""}>Crypto&nbsp;</p>
                        <p className={inViewTitle ? "isActive" : ""}>y&nbsp;</p>
                        <p className={inViewTitle ? "isActive" : ""}>Blockchain?</p>
                    </div>
                    <div className='flex-row'>
                        {dias?.map((dia, index) =>(
                            <div className='tarjeta' key={index}>
                                <div className='imagen' ref={ref}>
                                    <Image src={buildImages(dia?.imagen?.asset).url()} fill alt={`Dia ${index+1}`} className={`${inView ? "prueba" : ""}`} data-delay={`${index * 1}`}  />
                                </div>
                                <div className='dia'>
                                    {inView ?
                                        <MovingComponent
                                            type="slideInFromTop"
                                            duration="1000ms"
                                            delay={`${index * 0.5+"s"}`}
                                            direction="alternate"
                                            timing="ease-in-out"
                                            iteration="1"
                                            fillMode="forwards"
                                        >
                                            Día {index+1}
                                        </MovingComponent>
                                    : <></>}
                                </div>
                                <div className='title'>
                                    {inView ?
                                        <MovingComponent
                                            type="slideInFromTop"
                                            duration="1000ms"
                                            delay={`${index * 0.5+"s"}`}
                                            direction="alternate"
                                            timing="ease-in-out"
                                            iteration="1"
                                            fillMode="forwards"
                                        >
                                            {dia?.title}
                                        </MovingComponent>
                                    : <></>}
                                </div>
                                <div className="subtitle">
                                    {inView ?
                                        <MovingComponent
                                            type="slideInFromTop"
                                            duration="1000ms"
                                            delay={`${index * 0.5+"s"}`}
                                            direction="alternate"
                                            timing="ease-in-out"
                                            iteration="1"
                                            fillMode="forwards"
                                        >
                                            {dia?.subtitle}
                                        </MovingComponent>
                                    : <></>}
                                </div>
                                <ul>
                                    {dia?.temario?.map((tema, index) =>(
                                        <>
                                            {inView ?
                                                <MovingComponent
                                                    type="slideInFromTop"
                                                    duration="1000ms"
                                                    delay={`${index * 0.5+"s"}`}
                                                    direction="alternate"
                                                    timing="ease-in-out"
                                                    iteration="1"
                                                    fillMode="forwards"
                                                >
                                                    <li key={index}>{tema}</li>
                                                </MovingComponent>
                                            : ""}
                                        </>
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
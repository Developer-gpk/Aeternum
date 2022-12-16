import React from 'react'
import Image from 'next/image'
import { Textura4 } from 'ui'
import { buildImages } from '../../../libs/complementos'
import AnimatedText from "react-animated-text-content"
import { useInView } from "react-hook-inview"

export default function Instructor({ instructor }){
    const [ref, inView] = useInView({ threshold: 0, unobserveOnEnter: true });
    return(
        <section className="block instructor" id="instructor">
            <div className="textura">
                <Image src={Textura4} fill alt='Textura' />
            </div>
            <div className="holder">
                <div className="container-fluid">
                    <div className='title' ref={ref}>
                        <AnimatedText
                            animation={{
                                y: "30px",
                                ease: "ease",
                            }}
                            duration={inView ? 0.8 : 0}
                            interval={0.06}
                            type="words"
                        >
                            Tu instructor
                        </AnimatedText>
                    </div>
                    <div className="flex-row">
                        <div className='imagen' ref={ref}>
                            <Image src={buildImages(instructor?.imagen?.asset).url()} fill alt={instructor.nombre} className={inView ? "view" : ""} />
                        </div>
                        <div className='content'>
                            <div className='name' ref={ref}>
                                <AnimatedText
                                    animation={{
                                        y: "30px",
                                        ease: "ease",
                                    }}
                                    duration={inView ? 0.8 : 0}
                                    interval={0.06}
                                    type="words"
                                >
                                    {instructor.nombre}
                                </AnimatedText>
                            </div>
                            <div className={`especializado ${inView ? "isActive" : ""}`}>
                                {instructor.content?.map((estudio, index) =>(
                                    <div key={index} >{estudio}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
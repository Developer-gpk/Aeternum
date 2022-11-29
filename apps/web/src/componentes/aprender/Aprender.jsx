import React from 'react'
import Image from 'next/image'
import Title from "react-vanilla-tilt"
import { Logo } from 'ui'
import { buildImages } from '../../../libs/complementos'
import { Parallax  } from 'react-scroll-parallax'

export default function Aprender({ aprende }){
    const options = {
        max: 30,
        scale: 1.0,
        speed: 1000
    };
    return(
        <section className="block aprender" id="aprender">
            <Parallax speed={40}>
                <div className="circulo"></div>
            </Parallax>
            <div className="holder">
                <div className="container-fluid">
                    <div className="title">
                        ¿De quién vas a aprender?
                    </div>
                    <div className='logo'>
                        <Image src={Logo} fill alt='Logo Aeternum' />
                    </div>
                    <div className='text'>
                        Somos una empresa con <span>más de 10 años de experiencia</span> en la industria Blockchain, misma que nos ha permitido desarrollar <span>nuestra propia metodología: Learn, Earn & Protect</span>
                    </div>
                    <div className='flex-row'>
                        {aprende.map((apre, index) =>(
                            <Title className="tilt" options={options}>
                                <div className="tarjeta" key={index}>
                                    <div className='icono'>
                                        <Image src={buildImages(apre?.imagen?.asset).url()} fill alt={`Icono-${index+1}`} />
                                    </div>
                                    <div className="content-title">
                                        {apre.title}
                                    </div>
                                    <div className="content">
                                        {apre.content}
                                    </div>
                                </div>
                            </Title>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
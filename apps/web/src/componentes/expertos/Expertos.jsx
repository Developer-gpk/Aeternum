import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SmartPhone, Coin1, Coin2, Coin3, Coin4, Coin5, Coin6, AeternumIcon } from 'ui'
import { Parallax  } from 'react-scroll-parallax'
import BlockContent from "@sanity/block-content-to-react"

export default function Expertos({ title1, title2, title3 }){
    return(
        <section className='block expertos' id='expertos'>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className='flex-row'>
                        <div className='texto'>
                            <div className='texto1'>
                                <BlockContent blocks={title1} />
                            </div>
                            <div className='texto2'>
                                <BlockContent blocks={title2} />
                            </div>
                            <div className='texto1 espacio'>
                                <BlockContent blocks={title3} />
                            </div>
                            <Link href="/#contacto" legacyBehavior>
                                <a>Has llegado con los expertos.</a>
                            </Link>
                        </div>
                        <div className='imagenes'>
                            <div className='background'>
                                <Parallax speed={-3}>
                                    <div className='coin1'>
                                        <Image src={Coin1} fill quality={100}/>
                                    </div>
                                </Parallax>
                                <Parallax speed={-2}>
                                    <div className='coin2'>
                                        <Image src={Coin2} fill quality={100}/>
                                    </div>
                                </Parallax>
                                <Parallax speed={-4}>
                                    <div className='coin3'>
                                        <Image src={Coin3} fill quality={100}/>
                                    </div>
                                </Parallax>
                                <Parallax speed={-5}>
                                    <div className='coin4'>
                                        <Image src={Coin4} fill quality={100}/>
                                    </div>
                                </Parallax>
                                <Parallax speed={-5}>
                                    <div className='coin5'>
                                        <Image src={Coin5} fill quality={100}/>
                                    </div>
                                </Parallax>
                                <Parallax speed={-3}>
                                    <div className='coin6'>
                                        <Image src={Coin6} fill quality={100}/>
                                    </div>
                                </Parallax>
                                <div className='icono'>
                                    <Parallax speed={-3}>
                                            <Image src={AeternumIcon} fill quality={100}/>
                                    </Parallax>
                                </div>
                            </div>
                            <div className='imagen'>
                                <Image src={SmartPhone} fill quality={100}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
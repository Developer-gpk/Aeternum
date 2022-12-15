import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import { Link, animateScroll as scroll } from 'react-scroll'
import { useRouter } from 'next/router'
import { AeternumAcedemyLogo } from 'ui'

export default function Navbar(){
    const [isActive, setIsActive] = useState(false)
    const router = useRouter()
    const onClickDown = () =>{
        scroll.scrollTo('contacto', scrollType)
    }
    const scrollType = {
        duration: 500,
        delay: 50,
        smooth: true, // linear "easeInQuint" "easeOutCubic" https://easings.net/es
        offset: -10,
    };
    const chageBackground = () =>{
        if(window.scrollY >= 80){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    useEffect(() => {
        chageBackground()
        window.addEventListener('scroll', chageBackground)
    })
    return(
        <header className={`block header ${isActive ? 'isScroll' : ''} ${router.pathname.slice(1)+"-nav"}`} id='header'>
            <div className="holder">
                <div className="container-fluid">
                    <div className="logo">
                        <Link href="/" >
                            <Image src={AeternumAcedemyLogo} fill alt='Logo Aeternum' quality={100} />
                        </Link>
                    </div>
                    <div className='button-navbar'>
                        <Link to="contact" >
                            Inscríbete al Crash Course
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
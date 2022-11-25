import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AeternumAcedemyLogo } from 'ui'

export default function Navbar(){
    const [isActive, setIsActive] = useState(false)
    const router = useRouter()
    const toTop = () => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
    }
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
                            <Image src={AeternumAcedemyLogo} fill alt='Logo Aeternum' />
                        </Link>
                    </div>
                    <div className='button-navbar'>
                        <Link href="/#contacto" legacyBehavior onClick={toTop}>
                            <a>Inscríbete al Crash Course</a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
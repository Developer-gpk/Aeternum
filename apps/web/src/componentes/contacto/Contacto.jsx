import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, BlockChain, Textura3, IconoC, IconoA } from 'ui'
import { Parallax  } from 'react-scroll-parallax'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

export default function Contacto(){
    const [ open, setOpen ] = useState(false);
    const validation = Yup.object().shape({
        nombre: Yup.string().required(),
        email: Yup.string().email().required(),
        phone: Yup.string().required(),
        horario: Yup.string().required(),
        aviso: Yup.boolean().oneOf([true])
    })
    const handleOpen = () => {
        setOpen(!open);
    };
    function prueba(values){
        console.log(values)
        return(
            <h1>Hola</h1>
        )
    }
    return(
        <section className="block contacto" id="contacto">
            <div className='textura'>
                <Image src={Textura3} fill alt='textura' />
            </div>
            <div className='c'>
                <Parallax speed={-5}>
                    <Image src={IconoC} fill alt='Icono C' />
                </Parallax>
            </div>
            <div className="holder">
                <div className="container-fluid">
                    <div className='subtitle'>
                        ÚNETE AHORA
                    </div>
                    <div className='title'>
                        Contamos con disponibilidad de horarios
                    </div>
                    <div className="flex-row">
                        <div className="horarios-imagen">
                            <div className='horarios'>
                                <div className='horario'>
                                    <div className='dias'>
                                        Lunes / Martes / Miércoles
                                    </div>
                                    <div className='content'>
                                        <div className='horas'>
                                            <div className='icono'>
                                                <Image src={Clock} fill alt='reloj' />
                                            </div>
                                            <div className="hora">
                                                8:00 am a 9:30 am <br />
                                                <span>HORA CDMX</span>
                                            </div>
                                        </div>
                                        <div className='horas'>
                                            <div className='icono'>
                                                <Image src={Clock} fill alt='reloj' />
                                            </div>
                                            <div className="hora">
                                                11:30 am a 13:00 pm <br />
                                                <span>HORA CDMX</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='horario'>
                                    <div className='dias'>
                                        Sábado y Domingo
                                    </div>
                                    <div className="content">
                                        <div className='horas'>
                                            <div className='icono'>
                                                <Image src={Clock} fill alt='reloj' />
                                            </div>
                                            <div className="hora">
                                                8:00 am a 9:30 am <br />
                                                <span>HORA CDMX</span>
                                            </div>
                                        </div>
                                        <div className='horas'>
                                            <div className='icono'>
                                                <Image src={Clock} fill alt='reloj' />
                                            </div>
                                            <div className="hora">
                                                11:30 am a 13:00 pm <br />
                                                <span>HORA CDMX</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='imagen'>
                                <Image src={BlockChain} fill alt='BlockChain' />
                                <Parallax speed={-5}>
                                    <div className='a'>
                                        <Image src={IconoA} fill alt='Icono A' />
                                    </div>
                                </Parallax>
                            </div>
                        </div>
                        <div className='formulario'>
                            <Formik 
                                initialValues={{
                                    nombre: "",
                                    email: "",
                                    phone: "",
                                    horario: "",
                                    aviso: false
                                }}
                                validationSchema={validation}
                                onSubmit={ async (values) =>{
                                    return prueba(values)
                                }}
                            >
                                {({isSubmitting, errors, touched, values}) =>(
                                    <Form>
                                        <div className='form'>
                                            <div className="form-control">
                                                <label htmlFor="nombre" className={`${errors.nombre && touched.nombre ? ("isError") : null}`}>Nombre*</label>
                                                <Field type="text" name='nombre' className={`${errors.nombre && touched.nombre ? ("isError") : null}`} />
                                            </div>
                                            <div className="form-control">
                                                <label htmlFor="email" className={`${errors.email && touched.email ? ("isError") : null}`}>Correo Electrónico*</label>
                                                <Field type="text" name='email' className={`${errors.email && touched.email ? ("isError") : null}`} />
                                            </div>
                                            <div className="form-control">
                                                <label htmlFor="phone" className={`${errors.phone && touched.phone ? ("isError") : null}`}>Teléfono (10 dígitos)*</label>
                                                <Field type="text" name='phone' className={`${errors.phone && touched.phone ? ("isError") : null}`} />
                                            </div>
                                            <div className="form-control">
                                                <label htmlFor="horario" className={`${errors.horario && touched.horario ? ("isError") : null}`}>Horario deseado*</label><br />
                                                <button type='button' className={`horario-button ${open ? "horario-button-active" : ""} `} onClick={handleOpen}>{values.horario} <i className='arrow'></i></button>
                                                <div className={`horarios-button ${open ? "isOpen" : ""}`}>
                                                    <div className='horario1'>
                                                        <div className='titulo'>Lunes / Martes / Miércoles</div>
                                                        <div className='horas'>
                                                            <div className='hora1'>
                                                                <Field type="radio" name="horario" value="Lunes / Martes / Miércoles 8:00 am a 9:30 am HORA CDMX"/>
                                                                <div className='label' >8:00 am a 9:30 am <span>HORA CDMX</span></div>
                                                            </div>
                                                            <div className='hora2'>
                                                                <Field type="radio" name="horario" value="Lunes / Martes / Miércoles 11:30 am a 13:00 pm HORA CDMX"/>
                                                                <div className='label'>11:30 am a 13:00 pm <span>HORA CDMX</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='horario2'>
                                                        <div className='titulo'>Sábado y Domingo</div>
                                                        <div className='horas'>
                                                            <div className='hora1'>
                                                                <Field type="radio" name="horario" value="Sábado y Domingo 8:00 am a 9:30 am HORA CDMX"/>
                                                                <div className='label'>8:00 am a 9:30 am <span>HORA CDMX</span></div>
                                                            </div>
                                                            <div className='hora2'>
                                                                <Field type="radio" name="horario" value="Sábado y Domingo 11:30 am a 13:00 pm HORA CDMX" />
                                                                <div className='label'>11:30 am a 13:00 pm <span>HORA CDMX</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div className="complementos">
                                                <div className='check'>
                                                    <div>
                                                        <Field type="checkbox" name="aviso" className={`${errors.aviso && touched.aviso ? ("isError") : null}`} />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="aviso">*He leido y acepto el <Link href="/aviso" legacyBehavior><a>aviso de privacidad</a></Link></label>
                                                    </div>
                                                </div>
                                                <div className='button'>
                                                    <button type='submit'>
                                                        Inscribirme al Crash Course
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
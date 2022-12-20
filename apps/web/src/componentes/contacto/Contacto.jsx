import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, BlockChain, Textura3, IconoC, IconoA, Cripto } from 'ui'
import { Parallax  } from 'react-scroll-parallax'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { PayPalButtons } from '@paypal/react-paypal-js'
import Axios from 'axios'
import AnimatedText from "react-animated-text-content"
import { useInView } from "react-hook-inview"

const steps = ["Formulario", "Fromas de pago"]


export default function Contacto({ months }){
    const [ activeStep, setActiveStep ] = useState(0)
    const isLastStep = activeStep === steps.length - 1
    const [ open, setOpen ] = useState(false);
    const [ isHidden, setIsHidden ] = useState(true)
    const [ref, inView] = useInView({ threshold: 0, unobserveOnEnter: true });
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
    function _renderStepContent(step, errors, touched, months, values){
        switch (step) {
            case 0:
                return(
                    <>
                        <div className='inputs'>
                            <div className='form-control'>
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
                        </div>
                        <div className='radios'>
                            <div className='radio-title'>
                                Selecciona la fecha deseada:*
                            </div>
                            <div className='radio-content'>
                                {months.map((month, index) =>(
                                    <div className='radio-control' key={index}>
                                        <div className='radio-title-inputs'>{month.month}</div>
                                        <div className='radio-input'>
                                            {month.days.map((day, index) =>(
                                                <div className='input' key={index}>
                                                    <Field type="radio" name="horario" value={`${month.month} ${day}`} />
                                                    <label htmlFor="">{day}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )
            case 1:
                return(
                    <>
                        <div className='pagos'>
                            <div className='pagos-subtitle'>
                                ¡Bienvenido, “{values.nombre}”!
                            </div>
                            <div className='pagos-title'>
                                Selecciona tu método de pago:
                            </div>
                            <div className='pagos-metodos'>
                                <div className='paypal'>
                                    <PayPalButtons  createOrder={async () =>{
                                        try {
                                            const res = await Axios({
                                                url: "/api/payments",
                                                method: "POST",
                                                headers:{
                                                    "Content-Type": "application/json"
                                                }
                                            })
                                            return res.data.id
                                        } catch (error) {
                                            console.log(error)
                                        }
                                    }}
                                    onCancel={data =>{
                                        console.log("compra cancelada")
                                        setIsHidden(true)
                                    }}
                                    onApprove={(data, actions) =>{
                                        console.log(data)
                                        setIsHidden(false)
                                        actions.order.capture()
                                    }}
                                    style={{ layout: "horizontal", color: 'gold'}} />
                                </div>
                                <a href={`https://wa.me/525629776426?text=Hola,%20me%20llamo:%20${values.nombre}%0AQuiero%20unirme%20al%20curso.%0AMi%20correo%20es:%20${values.email}%0AMi%20numero%20de%20contacto%20es:${values.phone}%0AEl%20horario%20que%20quiero%20es:${values.horario}%0AY%20quiero%20pagarlo%20con%20criptomonedas`}>
                                    <Image src={Cripto} fill alt='boton criptomonedas' />
                                </a>
                            </div>
                        </div>
                    </>
                )
            default:
                break;
        }
    }
    function _handleBack() {
        setActiveStep(activeStep - 1);
    }
    function _handleSubmit(values, actions){
        if(isLastStep){
            _submitForm(values, actions)
        } else {
            setActiveStep(activeStep + 1)
            actions.setTouched({});
            actions.setSubmitting(false);
        }
    }
    async function _submitForm(values, actions) {
        try {
            const endpoint = `https://www.goplek.com/mailer/send-mail-v1.php`;
            const res = await fetch(endpoint, {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: `data=${JSON.stringify({
                host: "aeternumcrypto.com",
                data: values,
              })}`,
            });
            const data = await res.text();
            console.log(data)
          } catch (error) {
            console.log(error)
          }
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
                        <AnimatedText
                            animation={{
                                y: "30px",
                                ease: "ease",
                            }}
                            duration={inView ? 0.8 : 0}
                            interval={0.06}
                            type="words"
                        >
                            ÚNETE AHORA
                        </AnimatedText>
                    </div>
                    <div className='title'>
                        <AnimatedText
                            animation={{
                                y: "30px",
                                ease: "ease",
                            }}
                            duration={inView ? 0.8 : 0}
                            interval={0.06}
                            type="words"
                        >
                            Contamos con fechas disponibles
                        </AnimatedText>
                    </div>
                    <div className='text-schedule'>
                        <div className='icon-schedule'>
                            <Image src={Clock} fill alt='reloj' />
                        </div>
                        Sábados y domingos de 9:30 a 11:30 am &nbsp;<span>HORA CDMX</span>
                    </div>
                    <div className='form-contact'>
                        <Formik
                            initialValues={{
                                nombre: "",
                                email: "",
                                phone: "",
                                horario: "",
                                aviso: false
                            }}
                            validationSchema={validation}
                            onSubmit={_handleSubmit}
                        >
                            {({isSubmitting, errors, touched, values, isValid }) =>(
                                <Form>
                                    {_renderStepContent(activeStep, errors, touched, months, values)}
                                    <div className='buttons'>
                                            <div className='button'>
                                        {activeStep !== 0 && (
                                                <button onClick={_handleBack} >
                                                    Atras
                                                </button>
                                        )}
                                            </div>
                                        <div className='button'>
                                            {isLastStep ? (
                                                <>
                                                    <button type='submit' disabled={isHidden}>
                                                        {isLastStep ? "Inscribirme al Crash Course" : "Siguiente"}
                                                    </button>
                                                    <div className='check'>
                                                        <div>
                                                            <Field type="checkbox" name="aviso" className={`${errors.aviso && touched.aviso ? ("isError") : null}`} />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="aviso">*He leido y acepto el <Link href="/aviso" legacyBehavior><a>aviso de privacidad</a></Link></label>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <button type='submit'>
                                                        {isLastStep ? "Inscribirme al Crash Course" : "Siguiente"}
                                                    </button>
                                                    <div className='check'>
                                                        <div>
                                                            <Field type="checkbox" name="aviso" className={`${errors.aviso && touched.aviso ? ("isError") : null}`} />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="aviso">*He leido y acepto el <Link href="/aviso" legacyBehavior><a>aviso de privacidad</a></Link></label>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className='imagen'>
                        <div className='blockchain'>
                            <Image src={BlockChain} fill alt='BlockChain' />
                        </div>
                        <div className='iconA'>
                            <Image src={IconoA} fill alt='BlockChain' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
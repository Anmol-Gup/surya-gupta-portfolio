import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TEInput, TERipple, TETextarea } from "tw-elements-react";
import { IoIosSend } from "react-icons/io";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { FormEvent } from 'react';

const Contact: React.FC = () => {

    const formRef = useRef<HTMLFormElement | null>(null)

    const sendEmail= (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formRef.current) {
            emailjs
                .sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID, formRef.current, {
                    publicKey: import.meta.env.VITE_PUBLIC_KEY,
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        alert('Email sent succesfully!')
                    },
                    (error: any) => {
                        console.log('FAILED...', error.text);
                        alert('Some error occured!')
                    },
                );
                formRef.current?.reset()
        }

    };

    return (<div id='contact' data-aos="fade-up" className="contact md:container m-auto py-4 px-6 md:px-6 lg:px-24">
        <h2 className='text-center text-3xl lg:text-4xl text-orange font-medium mb-2 md:mb-8'>Contact Me</h2>
        <div className="address_contact py-6 flex md:flex-row flex-col-reverse gap-10 md:gap-6">
            <div className="text-white flex flex-col gap-6 basis-1/2 items-center md:items-start">
                <div className="address flex gap-3 items-center">
                    <FaMapLocationDot className="text-orange lg:text-4xl text-3xl" />
                    <p className="text-lg">Prayagraj, Uttar Pradesh, India</p>
                </div>
                <div className="email flex gap-3 items-center">
                    <MdEmail className="text-orange lg:text-4xl text-3xl" />
                    <p className="text-lg">prakashsurya1204@gmail.com</p>
                </div>
            </div>
            <div className="contact-form text-lg basis-1/2 px-3">
                <form ref={formRef} onSubmit={sendEmail}>
                    <TEInput
                        type="text"
                        label="Name"
                        className="mb-6 text-white"
                        name='name'
                    ></TEInput>
                    <TEInput
                        type="email"
                        label="Email address"
                        className="mb-6"
                        name='email'
                    ></TEInput>
                    <div className="relative mb-6">
                        <TETextarea
                            id="exampleFormControlTextarea13"
                            label="Message"
                            rows={3}
                            name="message"
                            className="text-white"
                        />
                    </div>
                    <TERipple rippleColor="light" className="w-full flex justify-center">
                        <button
                            type="submit"
                            className="text-white flex items-center gap-1 text-lg rounded-full px-3 py-2 transition-all ease bg-orange font-medium uppercase leading-normal text-white hover:cursor-pointer"
                        >
                            Send
                            <IoIosSend className="text-white font-medium text-2xl" />
                        </button>
                    </TERipple>
                </form>
            </div>
        </div>
    </div>)
}
export default Contact
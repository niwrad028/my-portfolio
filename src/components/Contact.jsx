import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const contact_info = [
    { logo: "mail", text: "niwrad028.dp@gmail.com" },
    { logo: "logo-whatsapp", text: "+63 947-747-3412" },
    {
      logo: "location",
      text: "B5 L9 Eksclusivo Subd. Brgy Quilib, Rosario, Batangas",
    },
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ap7cpjo', 'template_uevt30b', form.current, {
        publicKey: '-oceXjhy8swfZYPe_',
      })
      .then(
        () => {
          toast.success('Email message was sent!', { duration: 3000 });
          setName("")
          setEmail("")
          setMessage("")

        },
        (error) => {
          toast.error('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contact" className="py-10 px-3 text-white flex min-h-screen justify-center items-center">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          <span className="text-gray-600">Contact</span> <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">Get in touch with me</p>
        <div
          className="mt-5 flex md:flex-row flex-col
         gap-6 max-w-6xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form ref={form} onSubmit={sendEmail} className="flex flex-col flex-1 gap-5" autoComplete="off">
            <input type="text" placeholder="Your Name" name="user_name" autoComplete='false' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="Email" placeholder="Your Email Address" name="user_email" autoComplete='false' value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea placeholder="Your Message" rows={7} name="message" autoComplete='false' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button className="btn-primary w-fit" type="submit" value="Send">Send Message</button>
          </form>
          <div className="flex flex-col md:gap-8 gap-1 pb-3 basis-1/2 justify-start ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-nowrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

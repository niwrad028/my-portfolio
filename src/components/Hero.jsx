import React from "react";
import hero from "../assets/images/mypic.jpg";
import { useTypewriter, Cursor } from 'react-simple-typewriter';


const Hero = () => {
  const [text] = useTypewriter({
    words: ['My Name is Darwin', `I'm a Frontend Developer`, `and a Backend Developer`],
    loop: 0
  })
  const social_media = [
    {
      icon: "logo-instagram",
      link: "https://www.instagram.com/niwrad028"
    },
    {
      icon: "logo-facebook",
      link: "https://www.facebook.com/dm.prejula"
    },
    {
      icon: "logo-linkedin",
      link: "https://www.linkedin.com/in/darwin-prejula-5521b0305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&fbclid=IwZXh0bgNhZW0CMTAAAR0UMclFtFWCz0iwzvZXe7E5aKt4z1UUGUfNtdVHVbwAM9qS3l3Mp0pEZus_aem_Abh3tJSVI7pibWy9NFU81xh9iq7I_6FtYZXJeAdVasqM0kvJ4Mt643d6a-htWYU6SYvjqc51eUFZufFtPtbXH-IY"
    },
    {
      icon: "logo-github",
      link: "https://github.com/niwrad028"
    }
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-8 md:flex-row flex-col items-center justify-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-8/12 object-cover my-4" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center px-6">
          <h1 className="md:text-4xl text-xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            <span className="text-[#111827] md:mt-2">{text} </span>
            <Cursor />
          </h1>
          <p className="md:text-lg text-md md:leading-8 md:mt-2 leading-4 font-normal text-gray-600">
            Passionate about coding and mastering web development to create impactful online experiences that drive positive change
          </p>
          <a href='#contact'><button className="btn-primary mt-4 md:mt-6">Contact Me</button></a>
          <div className="md:mt-8 mt-4 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((social, i) => (
              <div
                key={i}
                className="text-gray-600 hover:text-[#0891b2] cursor-pointer "
              >
                <a
                  href={social.link}
                  target="blank"
                ><ion-icon name={social.icon}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
};

export default Hero;

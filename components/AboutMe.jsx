import React from 'react';
import Image from 'next/image';
import ProfilePic from '../public/img/profilepic-medium.jpg';
import Heading from './Heading';
function AboutMe() {
  return (
    <div className="flex flex-col gap-10 items-center md:flex-row">
      <>
        <Image src={ProfilePic} alt="profile pic" layout="fill" priority="true" className="w-1/2 h-auto rounded-md 2xl:w-1/5" sizes="100vw" width="404" height="500" />
      </>
      <div className="flex flex-col justify-center items-start gap-5">
        <Heading>About Me</Heading>
        <p className="text-zinc-800 text-left tracking-widest  break-words leading-loose">
          I am web developer based in Edmonton, Alberta, Canada. I am passionate about creating beautiful, functional, and accessible web applications that deliver an exceptional user experience.
        </p>
        <p className="text-zinc-800 text-left tracking-widest  break-words leading-loose">
          In my free time, I enjoy staying up to date with the latest technologies, as well as indulging in my love of media, whether it&apos;s through watching the latest movies and TV shows,
          listening to music, or playing video games.
        </p>
        <a
          className="text-lg text-center border-solid border-zinc-800 border-[3px] px-5 py-3 rounded-sm hover:scale-110 hover:transition-all hover:ease-in-out"
          href="resources/Trevin Shu - Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Download/View My Resume
        </a>
      </div>
    </div>
  );
}

export default AboutMe;

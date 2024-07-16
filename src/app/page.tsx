'use client'
import anime from "animejs";
import { useEffect } from "react";
import img from './bg.jpg'
import Image from "next/image";
export default function Home() {
  // Used to 
  const headline = 'EMITR'.split('').map((l, i) => <span key={i} className="inline-block hover:opacity-100 hover:duration-100 duration-1000 opacity-70">{l}</span>)

  useEffect(() => {
    const tl = anime.timeline({
      easing: "easeOutExpo",
    });

    tl.add({
      targets: "main section h1 ",
      opacity: [0, 1],
      duration: 1500
    });
    tl.add({
      targets: "main a",
      opacity: [0, 1],
      duration: 1500
    });
    tl.add({
      targets: "main img",
      filter: ['blur(10px) brightness(0)', 'blur(0px) brightness(0.7)'],
      duration: 3000
    });
  });

  return (
    <main className="h-[calc(100dvh)] relative bg-black">
      <Image
        src={img}
        className="absolute w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <section className="text-center text-white">
          <h1 className="text-4xl font-thin tracking-[0.2em] cursor-default opacity-0">{headline}</h1>
        </section>
      </div>
      <div className="absolute left-0 right-0 bottom-2 text-center ">
        <p className="text-xs tracking-widest">
          <a href="mailto:e@emitrmusic.com" className="text-white text-opacity-80 hover:text-opacity-100">e@emitrmusic.com</a>
        </p>
      </div>
    </main>
  );
}

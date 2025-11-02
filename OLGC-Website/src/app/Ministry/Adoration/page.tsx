'use client';
import Image from "next/image";
import dynamic from 'next/dynamic';
const HeroCarousel = dynamic(() => import('@/components/HeroCarousel'), { ssr: false });



export default function Home() {
  return (
    <div>


    {/* Now we do some real work here, watch out here pookie bear */}
    <main className="relative h-[70svh] w-full drop-shadow-xl/45">
      {/* Background image */}
      <Image
        src="/Ministry/adoration_bannerxx.png"
        alt="Hero background"
        fill
        className="object-cover"
        priority
        sizes="70vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered content */}
      <div className="absolute inset-0 z-10 grid place-items-center px-4">
        <div className="flex flex-col items-center gap-6">
          <h1
            className="
              font-anton uppercase leading-none tracking-widest! 
              text-center
              text-amber-300
              text-3xl
              md:!text-8xl
              drop-shadow
            "
          >
            adoration 
          </h1>
        </div>
      </div>
    </main>


    {/* Start of the contents inside the OLGCYA Adoration */}
    <div className="md:pr-20 md:pl-20 pr-5 pl-5">
      <div className="mt-16 mb-16 px-6 md:!px-10 text-lg leading-7">
        
      </div>
    </div>


    </div>
  );
}

'use client';
import Image from "next/image";
import dynamic from 'next/dynamic';
const HeroCarousel = dynamic(() => import('@/components/HeroCarousel'), { ssr: false });



export default function Home() {
  return (
    <div>
    <main className="relative h-[60svh] w-full drop-shadow-xl/45">
      {/* Background image */}
      <Image
        src="/Ministry/HeaderImage.png"
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
              font-anton uppercase leading-none tracking-widest 
              text-center
              text-amber-300
              text-3xl
              md:!text-8xl
              drop-shadow
            "
          >
            MINISTRIES 
          </h1>
        </div>
      </div>







    </main>

    {/* Ministry Grid - Banner style with background images */}
    <div className="md:pr-20 md:pl-20 pr-5 pl-5">

      <div className="grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 gap-6 mt-16 mb-16 px-6 md:!px-10">
        
        {/* Adoration Ministry */}
        <a href="/Ministry/Adoration">

          <div 
            className="
            relative h-48 md:h-56 lg:h-64 
            bg-[url('/Ministry/adoration_bannerxx.png')] bg-cover bg-center bg-no-repeat 
            rounded-lg overflow-hidden 
              shadow-lg hover:shadow-xl 
              transition-shadow duration-300 
              cursor-pointer
              group
              "
              >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-xl md:!text-4xl font-anton tracking-widest text-center px-4 drop-shadow-lg">

                ADORATION
              </h3>
            </div>
          </div>
        </a>

        {/* Bible Study Ministry */}
        <a href="Ministry/Bible-Study">

          <div 
            className="
            relative h-48 md:h-56 lg:h-64 
            bg-[url('/Ministry/bible_study_banner.png')] bg-cover bg-center bg-no-repeat 
            rounded-lg overflow-hidden 
            shadow-lg hover:shadow-xl 
            transition-shadow duration-300 
            cursor-pointer
            group
            "
            >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-xl md:!text-4xl font-anton tracking-widest text-center px-4 drop-shadow-lg">

                BIBLE STUDY
              </h3>
            </div>
          </div>
        </a>

        {/* Coffee With God Ministry */}
        <div 
          className="
          relative h-48 md:h-56 lg:h-64 
          bg-[url('/Ministry/coffee_with_God_wallpaper.png')] bg-cover bg-center bg-no-repeat 
          rounded-lg overflow-hidden 
          shadow-lg hover:shadow-xl 
          transition-shadow duration-300 
          cursor-pointer
          group
          "
          >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-xl md:!text-4xl font-anton tracking-widest text-center px-4 drop-shadow-lg">

              COFFEE WITH GOD
            </h3>
          </div>
        </div>

        {/* Hiking Ministry */}

        <a href="Ministry/Hike-With-Faith">

          <div 
            className="
            relative h-48 md:h-56 lg:h-64 
            bg-[url('/Ministry/Hiking.png')] bg-cover bg-center bg-no-repeat 
            rounded-lg overflow-hidden 
            shadow-lg hover:shadow-xl 
            transition-shadow duration-300 
            cursor-pointer
            group
            "
            >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-xl md:!text-4xl font-anton tracking-widest text-center px-4 drop-shadow-lg">

                HIKE WITH FAITH
              </h3>
            </div>
          </div>
        </a>

        {/* Sports Night Ministry */} 
        <a href="Ministry/Sports-Night">

          <div 
            className="
            relative h-48 md:h-56 lg:h-64 
            bg-[url('/Ministry/SportsNight.png')] bg-cover bg-center bg-no-repeat 
            rounded-lg overflow-hidden 
            shadow-lg hover:shadow-xl 
            transition-shadow duration-300 
            cursor-pointer
            group
            "
            >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-xl md:!text-4xl font-anton tracking-widest text-center px-4 drop-shadow-lg">
                SPORTS NIGHT
              </h3>
            </div>
          </div>
        </a>

      </div>
    </div>


    </div>
  );
}

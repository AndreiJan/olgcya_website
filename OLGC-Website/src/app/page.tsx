  'use client';
  import Image from "next/image";
  import dynamic from 'next/dynamic';
  const HeroCarousel = dynamic(() => import('@/components/HeroCarousel'), { ssr: false });



  export default function Home() {
    return (
      <div>
      <main className="relative h-[100svh] w-full drop-shadow-xl/45">
        {/* Background image */}
        <Image
          src="/Home/NewWallpaper.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Centered content */}
        <div className="absolute inset-0 z-10 grid place-items-center px-4">
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/Home/OLGC YA (3).png"
              alt="OLGC YA logo"
              width={1000}
              height={1000}
              className="w-[min(40vw,370px)] h-auto"
            />
            <h1
              className="
                font-anton uppercase leading-none tracking-tight 
                text-center
                text-amber-300
                text-3xl
                md:!text-6xl
                drop-shadow
              "
            >
              Our Lady of Good Counsel
            </h1>

            <h1 className="font-anton uppercase leading-non tracking-tight text-amber-300  text-center text-2xl md:!text-4xl ">Youth and young adult ministry</h1>
            <h1 className="font-anton uppercase leading-non !tracking-wide md:tracking-normal text-white  text-center text-1xl md:!text-2xl">“Therefore welcome one another as Chris has welcomed you, for the glory of God”</h1>
            <h1 className="font-anton uppercase leading-non tracking-wide md:tracking-normal text-white text-1xl md:!text-2xl text-amber-300">Romans  15:7</h1>
          </div>
        </div>







      </main>

      {/* ABOUT US - a slight introduction */}
      <div className="flex flex-col md:flex-row items-center justify-around gap-8 z-10 py-12 pr-8">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/Home/MinistryCoffeeandGod.png"
            alt="OLGC YA logo"
            width={470}
            height={470}
            className="!shadow-xl/30 w-[min(60vw,570px)] h-auto rotate-3 rounded-md"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left px-4">
          <h1 className="font-anton uppercase text-3xl mb-4 ">About Us</h1>
          <p className="text-lg leading-relaxed">
            We are a community of young adults united by faith, fellowship, and service. 
            Our mission is to create a welcoming space where we can grow together in Christ 
            and build lasting friendships. Through prayer, study, and action, we seek to 
            deepen our relationship with God and live out His call in our daily lives.
          </p>
        </div>
      </div>
  {/*END OF ABOUT US SECTION - 
  - Future plans:
    - Probably fix the layout of this. 
    - More context and probably a better look on the images 
    - Text change? Most definitely 
    - Color change and update on the texts. Probably a more friendly text and layout on it. 
  */}





  {/* Carousel that contains information and shit like that */}





    <HeroCarousel />
  <div className=" relative h-[100svh] w-full box-shadow !shadow-inner">
    <Image
      src="/Home/Events-SeeMore.png"
      alt="Hero background"
      fill

      className="object-cover drop-shadow-xl/50"
      priority
      sizes="100vw"
    />

    <div className="absolute inset-0 bg-black/50" />

    <div className="absolute inset-0 z-10 flex flex-col justify-center items-start gap-3 pl-10 md:pl-36 md:pl-12 not-prose">
      <h1 className="font-anton uppercase tracking-wide text-5xl sm:!text-5xl md:!text-8xl text-amber-300 leading-none">
        Upcoming events
      </h1>
      <a
        href="#"
        className="group w-full inline-block font-anton uppercase text-xl md:text-2xl text-white transition duration-300">
        Click here to see!
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
      </a>
    </div>
  </div>

















  {/* end of carousel */}
  <div className="flex flex-col justify-center items-center py-12">
    <div
      className="relative w-[90%] max-w-3xl h-[400px] rounded-2xl 
                overflow-hidden bg-neutral-900
                shadow-[inset_0_10px_25px_rgba(0,0,0,0.7),inset_0_-10px_25px_rgba(0,0,0,0.7)]"
    >
      {/* Map inside recessed container */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5961.4871004511515!2d-122.83584143947762!3d49.1928568201496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d7789fd96335%3A0xb8d9ed6fbacda791!2sOur%20Lady%20of%20Good%20Counsel!5e1!3m2!1sen!2sca!4v1756526877145!5m2!1sen!2sca"
        className="absolute inset-0 w-full h-full border-0 rounded-2xl"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

    <div className="mt-4 text-center">
      <h1 className="font-anton text-2xl"> Come and Visit us!</h1>
    </div>
  </div>
    <iframe src="https://calendar.google.com/calendar/embed?src=ajhmendoza30%40gmail.com&ctz=America%2FVancouver"  width="800" height="600"  scrolling="no"></iframe>


      </div>
    );
  }

'use client';

import dynamic from 'next/dynamic';
  
// Import subcomponents client-only
const TECarousel = dynamic(
  () => import('tw-elements-react').then(m => m.TECarousel),
  { ssr: false }
);
const TECarouselItem = dynamic(
  () => import('tw-elements-react').then(m => m.TECarouselItem),
  { ssr: false }
);

function ButtonDefault({
  children,
  href = '#',
  className = '',
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-block text-sky-600 transition duration-300 pt-4 pb-4 pr-11 ${className}`}
    >
      {children}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
    </a>
  );
}
export default function HeroCarousel() {
  return (
  
    <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-[90vh]">
      {/*  
        Make it seem better and more fixed. 
        MIBOMBOCLAT BOMBOSCRALAT find more shit examples that have carousels on them and see how they are laid out. 
        Make it make a little more sense on the figma, maybe have that shit set out ya feel. 
      */}
      <TECarousel
        showControls
        showIndicators
        ride="carousel"
        crossfade
        active="true"
        interval={false}
        className="h-full w-full"
      >
        <div className="relative h-full w-full overflow-hidden after:clear-both after:block after:content-['']">
          {/* Slide 1 */}
          <TECarouselItem
            itemID={1}
            active
            className="relative float-left -mr-[100%] hidden h-full w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/home/1.png"
              alt="First slide"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute top-1/2 -translate-y-1/2 text-left text-white mt-20 pl-15 pr-15  md:right-40 md:text-left md:w-150">
              <h1 className="font-anton !tracking-wider text-3xl md:!text-7xl uppercase text-yellow-400">Coffee with God</h1>
              <p className="mt-4 md:!text-lg line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo sapien non sodales dignissim. Mauris vitae turpis ante. Mauris id sollicitudin ligula.</p>
              <ButtonDefault href="/Ministry/Coffee-With-God">See More!</ButtonDefault>
            </div>

          
          </TECarouselItem>

          {/* Slide 2 */}
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden h-full w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/home/2.png"
              alt="First slide"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute top-1/2 -translate-y-1/2 text-left text-white mt-20 pl-15 pr-15 md:right-40 md:text-left md:w-150">
              <h1 className="font-anton !tracking-wider text-3xl md:!text-7xl uppercase text-yellow-400">Bible Study</h1>
              <p className="mt-4 md:!text-lg line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo sapien non sodales dignissim. Mauris vitae turpis ante. Mauris id sollicitudin ligula.</p>
              <ButtonDefault href="/Ministry/Bible-Study">See More!</ButtonDefault>
            </div>

          </TECarouselItem>

          {/* Slide 3 */}
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden h-full w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/home/3.png"
              alt="First slide"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute top-1/2 -translate-y-1/2 text-left text-white mt-20 pl-10 pr-10 md:right-40 md:text-left md:w-150">
              <h1 className="font-anton !tracking-wider text-3xl md:!text-7xl uppercase text-yellow-400">Hiking with Faith</h1>
              <p className="mt-4 md:!text-lg line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo sapien non sodales dignissim. Mauris vitae turpis ante. Mauris id sollicitudin ligula.</p>
              <ButtonDefault href="/Ministry/Hike-With-Faith">See More!</ButtonDefault>
            </div>

          </TECarouselItem>

          <TECarouselItem
            itemID={4}
            className="relative float-left -mr-[100%] hidden h-full w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/home/4.png"
              alt="First slide"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute top-1/2 -translate-y-1/2 text-left text-white mt-20 pl-10 pr-10 md:right-40 md:text-left md:w-150">
              <h1 className="font-anton !tracking-wide text-3xl md:!text-7xl uppercase text-yellow-400">Adoration</h1>
              <p className="mt-4 md:!text-lg line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo sapien non sodales dignissim. Mauris vitae turpis ante. Mauris id sollicitudin ligula.</p>
              <ButtonDefault href="/Ministry/Adoration">See More!</ButtonDefault>
            </div>

          </TECarouselItem>
          <TECarouselItem
            itemID={5}
            className="relative float-left -mr-[100%] hidden h-full w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/home/5.png"
              alt="First slide"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute top-1/2 -translate-y-1/2 text-left text-white mt-20 pl-10 pr-10 md:right-40 md:text-left md:w-150">
              <h1 className="font-anton !tacking-wide text-3xl md:!text-7xl uppercase text-yellow-400">Sports Night</h1>
              <p className="mt-4 md:!text-lg line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo sapien non sodales dignissim. Mauris vitae turpis ante. Mauris id sollicitudin ligula.</p>
              <ButtonDefault href="/Ministry/Sports-Night">See More!</ButtonDefault>
            </div>

          </TECarouselItem>


            </div>










          </TECarousel>

        


    </div>
  );
}
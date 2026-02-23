import Image from "next/image";

export default function Hero() {
  return (
    <section className="mt-6">
      {/* TITLE */}

      <h1 className="font-bold uppercase leading-none text-6xl lg:text-[223.5px]">
        DO IT <span className="text-primary">RIGHT</span>
      </h1>

      {/* HERO CARD */}
      <div className="relative overflow-hidden h-95.5 lg:h-187.5 w-88.5 lg:w-full rounded-[24px] md:rounded-hero mt-6">
        {/* Background Image */}
        <Image
          src="/hero.png"
          alt="Nike Air Max"
          fill
          className="object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/50" />
        {/* TOP LEFT BADGE */}
        <div
          className="
    absolute z-10
    left-0 top-48 lg:top-80
    
    origin-top-left -rotate-90
    
    bg-dark text-[#E7E7E3]
    
    px-2 py-2
    lg:px-6 lg:py-6
    
    rounded-b-lg lg:rounded-b-3xl
    
    flex items-start gap-2
  "
        >
          <p className="text-[12px] lg:text-[16px] font-semibold whitespace-nowrap">
            Nike product of the year
          </p>
        </div>
        {/* Content */}
        <div className="relative z-10 flex h-95.5 lg:h-full items-end justify-between">
          {/* LEFT TEXT */}
          <div className="pl-4 lg:pl-12 pb-4 lg:pb-12 text-white ">
            <h2 className="font-rubik font-semibold text-[24px] lg:text-[74px]">
              NIKE AIR MAX
            </h2>
            <p className="max-w-122.5 font-open-sans font-semibold text-[#E7E7E3] text-[14px] lg:text-[24px]">
              Nike introducing the new air max for everyone’s comfort
            </p>
            <button className="mt-2 lg:mt-6 rounded-lg bg-primary px-4 lg:px-8 py-2 text-sm font-semibold">
              SHOP NOW
            </button>
          </div>

          {/* RIGHT THUMBNAILS */}
          <div className="flex flex-col pr-4 lg:pr-8 pb-4 lg:pb-8 gap-2 lg:gap-4">
            <div
              className="relative
                  w-16 h-16 
                  lg:w-40 lg:h-40 
                  overflow-hidden 
                  rounded-lg lg:rounded-[32px]"
            >
              <Image
                src="/hero-sub1.png"
                alt="Thumbnail 1"
                fill
                className="object-cover"
              />
            </div>

            <div
              className="relative 
                  w-16 h-16 
                  lg:w-40 lg:h-40 
                  overflow-hidden 
                  rounded-lg lg:rounded-[32px]"
            >
              <Image
                src="/hero-sub2.png"
                alt="Thumbnail 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import imgService from "@/public/images/imgService.png";
import macBook from "@/public/images/Group 3.png";
import airPode from "@/public/images/Group 4.png";
import ServiceHeading from "./ServiceHeading";

const Services = () => {
  return (
    <section className="mt-20 pb-10 flex flex-col justify-center items-center gap-12">
      <div className="relative h-[370px] w-[255px] md:h-[400px] md:w-[300px]">
        <Image
          alt="services"
          src={imgService}
          fill
          className="object-cover"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
        <p className="uppercase text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black absolute top-36 -left-10 md:-left-40">
          our
        </p>
        <p className="absolute left-32 md:left-40 top-60 text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-marketing-orange-200 font-black mb-4">
          services
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* 1st service */}
        <div className="flex flex-col gap-7 items-center">
          {/* service 1 */}
          <div className="flex flex-col gap-3">
            <ServiceHeading count="01" title="social media strategy" />
            <p className="text-white text-center md:text-left text-sm md:text-base px-14 md:px-14">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              pariatur maxime officiis animi, quia corporis ipsam harum esse
              impedit. Facere! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sint quae, exercitationem facilis ab quod
              temporibus ex laborum ducimus placeat ea.
            </p>

            <div className="flex justify-end px-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8 text-marketing-orange-200"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>
          </div>

          {/* service 2 */}
          <div className="flex flex-col gap-3">
            <ServiceHeading count="02" title="Online Reputation Management" />
            <p className="text-white text-center md:text-left text-sm md:text-base px-10 md:px-14">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              pariatur maxime officiis animi, quia corporis ipsam harum esse
              impedit. Facere! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sint quae, exercitationem facilis ab quod
              temporibus ex laborum ducimus placeat ea.
            </p>

            <div className="flex justify-end px-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="w-full flex items-center justify-center">
          <div className="relative h-[370px] w-[255px] md:h-[400px] md:w-[300px]">
            <Image
              alt="services"
              src={macBook}
              fill
              className="object-cover"
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* 2nd service */}

        {/* image */}
        <div className="w-full flex items-center justify-center order-2 md:order-1">
          <div className="relative h-[370px] w-[255px] md:h-[400px] md:w-[300px]">
            <Image
              alt="services"
              src={airPode}
              fill
              className="object-cover"
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="flex flex-col gap-7 items-center order-1 md:order-2">
          {/* service 1 */}
          <div className="flex flex-col gap-3">
            <ServiceHeading count="03" title="ui/ux design" />
            <p className="text-white text-center md:text-left text-sm md:text-base px-10 md:px-14">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              pariatur maxime officiis animi, quia corporis ipsam harum esse
              impedit. Facere! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sint quae, exercitationem facilis ab quod
              temporibus ex laborum ducimus placeat ea.
            </p>

            <div className="flex justify-end px-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8 text-marketing-orange-200"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>
          </div>
          {/* service 2 */}
          <div className="flex flex-col gap-3">
            <ServiceHeading count="04" title="web design" />
            <p className="text-white text-center md:text-left text-sm md:text-base px-10 md:px-14">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              pariatur maxime officiis animi, quia corporis ipsam harum esse
              impedit. Facere! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sint quae, exercitationem facilis ab quod
              temporibus ex laborum ducimus placeat ea.
            </p>

            <div className="flex justify-end px-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8 text-marketing-orange-200"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>
          </div>
          {/* service 3 */}
          <div className="flex flex-col gap-3">
            <ServiceHeading count="05" title="mobile apps development" />
            <p className="text-white text-center md:text-left text-sm md:text-base px-10 md:px-14">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              pariatur maxime officiis animi, quia corporis ipsam harum esse
              impedit. Facere! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sint quae, exercitationem facilis ab quod
              temporibus ex laborum ducimus placeat ea.
            </p>

            <div className="flex justify-end px-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8 text-marketing-orange-200"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Services;

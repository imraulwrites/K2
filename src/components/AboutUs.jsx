import FunFactCard from './FunFactCard';

export default function AboutUs() {
  return (
    <section className="mt-32">
      <div className="container">
        <div className="md:ml-[15%] lg:ml-[25%] pr-5">
          <p className="text-3xl font-semibold">
            Our digital strategies and design expertise focus on promoting social economy
            businesses, cutting-edge brands, and eco-friendly products to motivate consumers to make
            informed decisions towards sustainable products and services
          </p>
        </div>
        <div className="mt-12 pr-5 md:ml-[25%] lg:ml-[55%]">
          <p className="text-xl/9 text-[#0F0F0F]  pr-5">
            Whether it's crafting a visually stunning brand identity, designing immersive digital
            experiences, or developing strategic marketing campaigns, we approach each project with
            meticulous attention to detail and an unwavering dedication to quality.
          </p>
          <button className="flex items-center justify-center gap-2 mt-8 text-lg text-[#0F0F0F] font-semibold border-b-[1px] border-[#0F0F0F]">
            More About Us{' '}
            <span className="underlin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center lg:justify-start 2xl:justify-center items-center gap-10 py-10 lg:py-20 xl:py-32">
          <FunFactCard years={17} symbol="+" text="Years of agency experience" />
          <FunFactCard
            years={220}
            symbol="+"
            text="Successfully projects done
"
          />
          <FunFactCard years={46} symbol="+" text="World-wide team members" />

          <FunFactCard years={98} symbol="%" text="Clients satisfied & retention" />
        </div>
      </div>
    </section>
  );
}

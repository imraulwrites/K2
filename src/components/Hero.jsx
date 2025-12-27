import Avatar1 from '../assets/avatar-1.webp';
import Avatar2 from '../assets/avatar-2.webp';
import AvatarAdd from '../assets/avatar-add.png';
import HeroVideo from '../assets/heroVideo.mp4';
export default function Hero() {
  return (
    <section className="mt-28">
      <div className="container">
        <div className="relative flex-col">
          {/* hero texts */}
          <div className="lg:max-w-[70%] font-bold text-6xl lg:text-8xl tracking-tighter">
            <h1 className="">Crafting your fantasies with a twist of</h1>

            <h1 className="flex items-center md:justify-center  gap-4 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="110"
                height="110"
                viewBox="0 0 110 110"
                fill="none"
                className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 absolute md:relative hidden md:block"
              >
                <path
                  d="M60.5 0H49.5L53.0145 50.2065L19.9982 12.22L12.22 19.9982L50.2065 53.0145L1.44248e-06 49.5L0 60.5L50.2065 56.9856L12.22 90.0018L19.9982 97.78L53.0145 59.7935L49.5 110H60.5L56.9855 59.7935L90.0018 97.78L97.78 90.0018L59.7935 56.9855L110 60.5V49.5L59.7936 53.0145L97.78 19.9982L90.0018 12.22L56.9855 50.2065L60.5 0Z"
                  fill="currentColor"
                ></path>
              </svg>
              creativity
            </h1>
          </div>
          {/* Hero Info section */}
          <div className="mt-8 lg:pl-14 xl:pl-0 lg:absolute right-0 bottom-0 lg:max-w-[40%]">
            <p className="text-xl font-normal border-b-2 pb-8">
              As long as your dreams revolve around something like being the proud owner spectacular
              website.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-6">
              <div className="flex">
                <img className="z-20" src={AvatarAdd} alt="avatar" />
                <img className="-mx-2 z-10" src={Avatar1} alt="avatar2" />
                <img className="z-0" src={Avatar2} alt="avatar1" />
              </div>
              <div className="flex flex-col items-center justify-center md:items-start">
                <h3 className="font-bold text-xl">
                  <span className="relative bottom-0.5 ">2</span>k
                  <span className="relative bottom-0.5 right-0.5">+</span> Clients
                </h3>
                <p className="text-lg">Award winning agency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* video playback */}
      <div className='mt-32'>
        <video src={HeroVideo} height={screen} controls></video>
      </div>
    </section>
  );
}

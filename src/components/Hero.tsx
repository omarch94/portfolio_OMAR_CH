import Button from "./Button";

interface Props {
  scrollToAbout: () => void;
}

const Hero = ({ scrollToAbout = () => {} }: Props) => {
  return (
    <section className="bg-white dark:bg-neutral-900 py-20 lg:py-20">
      <div className="relative grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="lg:col-span-7">
        
          <h1 className="lg:max-w-2xl mb-4 text-4xl font-normal tracking-normal md:text-5xl xl:text-6xl">
            I am Omar Cherti a Full Stack Web developer From Morocco!
          </h1>
          <div className="lg:hidden">
            <div className="relative mb-8">
              <img src="/images/omarcherti.png" alt="hero" className="transition-all duration-700 opacity-0 animating-image mx-auto border-transparent rounded-3xl w-auto h-auto" />
              <div className="bg-neutral-950 absolute inset-0 transition-all duration-700 animating-bg w-auto h-auto border-transparent rounded-3xl" />
            </div>
          </div>
          <p className="lg:max-w-2xl mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl ">
            A skilled full-stack web developer from Morocco, adept at crafting dynamic and engaging web applications. My expertise spans both front-end and back-end technologies, enabling me to build comprehensive solutions from concept to deployment.
          </p>
        </div>
        <div className="lg:order-first lg:mt-0 lg:col-span-5 hidden lg:block relative flex justify-center">
          <img src="/images/omarcherti.png" alt="hero" className="transition-all duration-700 opacity-0 animating-image mx-5 border-transparent rounded-3xl w-auto h-auto" />
          <div className="bg-neutral-950 absolute inset-0 right-16 transition-all duration-700 animating-bg w-auto h-auto border-transparent rounded-3xl" />
        </div>
        <Button runFunc={scrollToAbout} classNames="lg:absolute w-24 h-24" />
      </div>
    </section>
  );
};

export default Hero;

import { forwardRef } from "react";

const About = (props: any, ref: any) => {
  return (
    <section className="bg-white dark:bg-neutral-900 py-20 lg:py-32" ref={ref}>
      <div className="relative grid auto-cols-fr gap-10 max-w-screen-xl px-4 mx-auto lg:grid-cols-12">
        <div className="mx-auto place-self-center lg:col-span-12">
          <h2 className="lg:max-w-2xl mb-4 text-3xl font-normal tracking-normal md:text-4xl xl:text-5xl text-center">
            About me
          </h2>
          <p className="lg:max-w-2xl mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl">
            My career path took an unexpected turn from finance management
            control to the dynamic realm of web development. Driven by a passion
            for technology and a desire to create meaningful digital
            experiences, I embraced the challenge of mastering a new set of
            skills.
          </p>

          <p className="lg:max-w-2xl font-normal leading-relaxed text-gray-500 text-xl">
            Greetings! I'm Omar Cherti, hailing from the vibrant and culturally
            rich land of Morocco. My journey is a testament to my transition
            from a finance background to a full stack web developer with a
            passion for creating digital wonders.{" "}
          </p>
        </div>
        {/* <div className="relative lg:block hidden lg:mt-0 lg:col-span-6 max-w-sm justify-self-end self-end mr-6">
          <img
            src="/images/omarcherti.png"
            alt="aboout-1"
            className="transition-all duration-700 opacity-0 animating-image"
          />
          <div className="bg-neutral-950 absolute inset-0 transition-all duration-700 animating-bg w-full" />
        </div> */}

        {/* <img
          className="z-10 absolute left-2/3 top-1/2 md:block hidden -translate-x-1/2 lg:-translate-y-1/2 w-52 dark:invert"
          src="/images/about-circular.svg"
          alt="animated svg"
        /> */}
      </div>
    </section>
  );
};

export default forwardRef(About);

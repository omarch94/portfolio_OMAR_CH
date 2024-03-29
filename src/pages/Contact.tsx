import { useState,useRef } from 'react'
import AnimatedLink from '../components/AnimatedLink'
import ArrowTopRight from '../components/ArrowTopRight'
import socialLinks from '../../socialLinks.json'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form:any = useRef();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  

  const submitForm = (e: any) => {
    e.preventDefault();

     emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_USER_ID)
      .then((result) => {
          console.log(result.text);  
          alert('ok') ;
           setName('');
            setEmail('');
           setMessage('');

      // Reload the page if needed
      window.location.reload();     
      }, (error) => {
          console.log(error.text);
      });

  }

  return (
    <div className="flex flex-col">
      <section className="bg-white dark:bg-neutral-900 py-20 lg:py-32">
        <div className="relative grid auto-cols-fr gap-10 max-w-screen-xl px-4 mx-auto lg:grid-cols-12">
          <div className="place-self-start lg:col-span-6">
            <h1 className="mb-4 text-4xl font-medium tracking-normal md:text-5xl">
              Get in touch
            </h1>
            <p className="mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl my-5">
            Whether you have an exciting project in mind, need assistance with web development, or just want to connect with a fellow enthusiast, I'm eager to hear from you. Let's discuss your ideas, explore potential collaborations, or simply engage in a conversation about the ever-evolving world of web development. Feel free to reach out using the form below, and let's embark on a journey of innovation and creativity together.            </p>
            <div className="grid auto-cols-fr max-w-scree-xl sm:grid-cols-2 grid-cols-1 gap-10">
              {
                socialLinks.map((link) => <AnimatedLink key={link.link} title={link.title} link={link.link} isExternal={true} />)
              }
            </div>
          </div>
          <div className="lg:col-span-6">
            <form  ref={form} onSubmit={submitForm}>
              <div className="w-full mb-10">
                <input
                  type="text"
                  className="
                    py-3
                    focus:outline-none
                    w-full
                    border-b
                    text-xl
                    focus:border-neutral-950
                    dark:focus:border-white
                    bg-transparent
                    dark:text-white
                  "
                  placeholder="Full name"
                  required
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full mb-10">
                <input
                  type="email"
                  className="
                    py-3
                    focus:outline-none
                    w-full
                    border-b
                    text-xl
                    focus:border-neutral-950
                    dark:focus:border-white
                    bg-transparent
                    dark:text-white
                  "
                  placeholder="Email address"
                  required
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full mb-10">
                <textarea
                  cols={30}
                  rows={4}
                  className="
                    py-3
                    focus:outline-none
                    w-full
                    border-b
                    text-xl
                    focus:border-neutral-950
                    dark:focus:border-white
                    bg-transparent
                    dark:text-white
                  "
                  placeholder="Tell me about the project"
                  required
                  value={message}
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                className="
                  font-semibold
                  md:text-2xl
                  text-xl
                  inline-flex
                  items-center
                  gap-2
                  group
                  dark:text-white
                "
              >
                Submit message
                <ArrowTopRight
                  classNames="
                    w-7
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-all
                    duration-200
                    dark:fill-gray-300
                  "
                />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
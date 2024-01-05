import { useNavigate } from "react-router-dom"
import Button from "./Button"

const PreFooter = () => {
  const navigateTo = useNavigate()
  const goToContact = () => {
    navigateTo('/contact')
  }
  return (
    <section className="bg-white dark:bg-neutral-900 py-20 lg:py-32">
      <div className="relative grid auto-cols-fr gap-10 max-w-screen-xl px-4 mx-auto lg:grid-cols-12">
        <div className="place-self-start lg:col-span-7">
          <h2 className="mb-4 text-3xl font-normal tracking-normal xl:text-5xl md:text-4xl">
            Interested in working together?
          </h2>
          <p className="mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl">
          Are you looking for a dedicated and passionate collaborator to bring your projects to life? I'm excited to explore new opportunities and partnerships that align with my skills and expertise. Whether you have a creative project, a business venture, or a unique challenge that needs a fresh perspective, I'm here to help.          </p>
        </div>
        <Button runFunc={goToContact} classNames="-rotate-90 lg:col-span-5 lg:w-28 lg:h-28 w-24 h-24 lg:place-self-center"  />
      </div>
    </section>
  )
}

export default PreFooter
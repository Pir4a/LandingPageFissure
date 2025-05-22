import AppScreans from './AppScreans'
import FuzzyText from './TextAnimations/FuzzyText/FuzzyText'
function Hero() {
  return (
    <section className="w-full pt-30 py-12 md:py-24 lg:pt-32 xl:pt-48 bg-gradient-to-b from-background to-muted  text-white">
          <div className=" xl:w-3/4 xl:mx-auto flex items-center justify-center x-4 md:px-6">
            <div className="flex xl:flex-row flex-col gap-8">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2 xl:w-5/6 ">
                  <h1 className="text-3xl px-12 xl:px-0 font-bold tracking-tighter text-center xl:text-left sm:text-5xl xl:text-6xl/none">
                    Your Complete Fitness Journey in One App
                  </h1>
                  <p className="max-w-[600px] text-center xl:text-left text-muted-foreground md:text-3xl pt-12 tracking-widest">
                    Follow your <span className=" text-[#818CF8] font-bold ">System.</span><br/>
Achieve your <span className=" text-[#818CF8] font-bold ">Goals</span><br/>
Keep your <span className="text-[#818CF8] font-bold">Identity.</span><br/>
<div className='py-3 text-center xl:text-left pb-2 ml-22 xl:-ml-10'><FuzzyText enableHover={true}>Fissure.</FuzzyText></div>
                  </p>
                </div>
                <div className="flex flex-col gap-2 mx-auto xl:mx-0 min-[400px]:flex-row">
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#6366F1] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#818CF8]"
                  >
                    Get Started Free
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Learn More
                  </a>
                </div>
                <div className="flex items-center mx-auto xl:mx-0 gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span>Generous Free Tier </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
            <AppScreans/>
            </div>
          </div>
        </section>
  )
}

export default Hero
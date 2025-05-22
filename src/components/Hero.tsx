import React from 'react'
import AppScreans from './AppScreans'
import FuzzyText from './TextAnimations/FuzzyText/FuzzyText'
function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:pt-32 xl:pt-48 bg-gradient-to-b from-background to-muted  text-white">
          <div className=" w-3/4 mx-auto flex items-center justify-center x-4 md:px-6">
            <div className="flex xl:flex-row flex-col gap-8">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2 w-5/6 ">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Complete Fitness Journey in One App
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-3xl pt-12 tracking-widest">
                    Follow your <span className=" text-[#818CF8] font-bold ">System.</span><br/>
Achieve your <span className=" text-[#818CF8] font-bold ">Goals</span><br/>
Keep your <span className="text-[#818CF8] font-bold">Identity.</span><br/>
<div className='py-3 pb-2 -ml-10'><FuzzyText enableHover={true}>Fissure.</FuzzyText></div>
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
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
                <div className="flex items-center gap-4 text-sm">
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
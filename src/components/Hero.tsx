import React from 'react'
import qrcode from '../assets/qrcode.png'
function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted  text-white">
          <div className=" w-3/4 mx-auto flex items-center justify-center x-4 md:px-6">
            <div className="flex xl:flex-row flex-col gap-8">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2 w-5/6 ">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Complete Fitness Journey in One App
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Track your diet, monitor your workouts, and achieve your fitness goals with Fissure.
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
                    <span>Free 14-day trial</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
                <div className="relative flex justfiy-center items-center h-[450px] w-[300px]  rounded-xl shadow-2xl sm:w-[350px] md:h-[600px] md:w-[380px]">
                  <img
                    alt="App screenshot"
                    src={qrcode} 
                    className="object-cover"
                  />
                  <div className="absolute z-40 top-30 -left-8 w-16 h-16">
                    <div className="relative w-full h-full rotate-[-30deg]">
                      <h2 className=' absolute -top-5 left-25 w-[150px] rotate-20'>Scan to get APK !</h2>
                          <div className="absolute w-8 h-8 border-t-4 border-r-4 border-white rounded transform rotate-[130deg] translate-x-1 -translate-y-1"></div>
                           <div className="absolute w-16 h-16 border-t-4 top-11 rounded-tl-full left-24 rotate-[85deg] -scale-y-100 rounded border-white -translate-20"></div>
                    </div>
                  </div>
                  
              </div>
            </div>
          </div>
        </section>
  )
}

export default Hero
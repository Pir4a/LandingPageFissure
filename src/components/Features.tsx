import ai from "../assets/2025-05-22-170511_hyprshot.png"
import db from "../assets/db.png"
import barCode from "../assets/barc.png"
import planning from "../assets/2025-05-22-171511_hyprshot.png"
import loupe from "../assets/icons8-loupe-100.png"
import QrCodeComponent from './QrCodeComponent'
function Features() {
  return (
    
    <section id="features" className="w-full py-12  text-white">
    <div className=" px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-[#818CF8]/20 px-3 py-1 text-sm text-[#6366F1]">Features</div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Everything you need to reach your fitness goals
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Fissure combines diet tracking and workout monitoring in one seamless experience.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-between max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
        <img
          src={barCode}
        alt="Diet tracking features"
          className="h-[550px] hidden xl:block border-2 border-[#6366F1] w-[310px] overflow-hidden rounded-xl object-cover object-fit  lg:order-last"
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="inline-block rounded-lg lg:mx-0 mx-auto bg-[#818CF8]/20 px-3 py-1 text-sm text-[#6366F1] w-fit">
            Diet Tracking
          </div>
          <h3 className="text-2xl font-bold">Nutrition Made Simple</h3>
          <ul className="grid gap-6">
            <li className="flex items-center gap-4">
              <img src={ai} className="flex h-10 w-10 shrink-0 items-center justify-center rounded">
                                    
              </img>
              <div className="space-y-1">
                <h4 className="text-lg font-medium">Ai-Powered Food Search</h4>
                <p className="text-sm text-muted-foreground">
                  Take a Picture of your Food or scan the barcode.
                </p>
              </div>
            </li>
            
            <li className="flex items-center gap-4">
            <img src={db} className="flex h-10 w-10 shrink-0 items-center justify-center rounded">
                                    
              </img>
              <div className="space-y-1">
                <h4 className="text-lg font-medium">Comprehensive Food Database</h4>
                <p className="text-sm text-muted-foreground">
                  Access millions of foods with accurate nutritional information.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4">
                <img src={planning} className="flex h-10 w-10 shrink-0 items-center justify-center rounded"/>
              <div className="space-y-1">
                <h4 className="text-lg font-medium">Meal Planning</h4>
                <p className="text-sm text-muted-foreground">
                  Plan your meals in advance and stay on track with your nutrition goals.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4">
                <img src={loupe} className="flex h-10 w-10 shrink-0 items-center justify-center rounded"/>
<div className="space-y-1">
                <h4 className="text-lg font-medium">Nutritional Insights</h4>
                <p className="text-sm text-muted-foreground">
                  Get detailed breakdowns of macros, vitamins, and minerals in your diet.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-5xl items-center justify-between
       gap-6 py-12 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="inline-block lg:mx-0 mx-auto rounded-lg bg-[#818CF8]/20 px-3 py-1 text-sm text-[#6366F1] w-fit">
            Workout Tracking
          </div>
          <h3 className="text-2xl font-bold">Train Smarter, Not Harder</h3>
          <ul className="grid gap-6">
            <li className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6366F1]">
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-medium">Customizable Workout Plans</h4>
                <p className="text-sm text-muted-foreground">
                  Create and follow workout routines tailored to your specific goals.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6366F1]">
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-medium">Progress Tracking</h4>
                <p className="text-sm text-muted-foreground">
                  Monitor your strength gains, endurance improvements, and body measurements.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6366F1]">
            
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-medium">Workout Scheduling</h4>
                <p className="text-sm text-muted-foreground">
                  Plan your workout sessions and receive reminders to stay consistent.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <img
          src="/placeholder.svg?height=1080&width=1920"
          width={550}
          height={310}
          alt="Coming Soon !"
          className="mx-auto hidden lg:block aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
      </div> <div className=" mx-auto text-center xl:text-left flex flex-col xl:flex-row max-w-5xl items-center justify-between gap-6 xl:py-12 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="inline-block rounded-xl bg-[#818CF8]/20 px-12 py-5 text-4xl font-bold text-[#6366F1] w-fit">
          Download the App
          </div>
          <h3 className="text-4xl mx-auto pt-4 font-bold">Control your Life.</h3>
          
        </div>
   <QrCodeComponent />
      </div>
    </div>
  </section>
  )
}

export default Features
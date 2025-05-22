import React from 'react'

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
            FitnessFusion combines diet tracking and workout monitoring in one seamless experience.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          width={550}
          height={310}
          alt="Diet tracking features"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="inline-block rounded-lg bg-[#818CF8]/20 px-3 py-1 text-sm text-[#6366F1] w-fit">
            Diet Tracking
          </div>
          <h3 className="text-2xl font-bold">Nutrition Made Simple</h3>
          <ul className="grid gap-6">
            <li className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6366F1]">
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-medium">Comprehensive Food Database</h4>
                <p className="text-sm text-muted-foreground">
                  Access millions of foods with accurate nutritional information.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6366F1]">
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-medium">Meal Planning</h4>
                <p className="text-sm text-muted-foreground">
                  Plan your meals in advance and stay on track with your nutrition goals.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6366F1]">
              </div>
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
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="inline-block rounded-lg bg-[#818CF8]/20 px-3 py-1 text-sm text-[#6366F1] w-fit">
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
          alt="Workout tracking features"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
      </div>
    </div>
  </section>
  )
}

export default Features
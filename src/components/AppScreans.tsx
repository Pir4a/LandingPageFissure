import screenOne from "../assets/2025-05-22-155546_hyprshot.png"
import screenTwo from "../assets/2025-05-22-155534_hyprshot.png"


function AppScreans() {
  return (
    <div className='flex rounded-xl gap-12 '>
        <img className='w-[350px] mx-auto xl:mx-0 xl:w-[500px] h-[680px] 2xl:h-[700px] rounded-3xl ' src={screenTwo} />
        <img className='w-[450px] h-[700px] rounded-3xl hidden 2xl:block' src={screenOne} />
    </div>
  )
}

export default AppScreans
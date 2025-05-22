import screenOne from "../assets/2025-05-22-155546_hyprshot.png"
import screenTwo from "../assets/2025-05-22-155534_hyprshot.png"


function AppScreans() {
  return (
    <div className='flex rounded-xl gap-12 '>
        <img className='w-[400px] h-[700px] rounded-3xl ' src={screenTwo} />
        <img className='w-[400px] h-[700px] rounded-3xl' src={screenOne} />
    </div>
  )
}

export default AppScreans
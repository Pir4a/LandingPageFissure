
import qrcode from '../assets/qrcode.png'
function QrCodeComponent() {
  return (
     <div id='qr' className="relative flex pl-5 xl:pl-0 justfiy-center items-center h-[450px] w-[300px] rounded-xl shadow-2xl sm:w-[350px] md:h-[260px] md:w-[260px] mt-16">
                  <div className="relative w-[260px] h-[260px] rounded-xl overflow-hidden">
                    <div className="absolute brightness-125 inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 animate-pulse  rounded-xl"></div>
                    <div className="absolute inset-[3px] bg-background rounded-xl">
                      <img
                        alt="App screenshot"
                        src={qrcode} 
                        className="object-cover rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="absolute z-40 top-5 lg:-top-12 lg:-left-5 w-16 h-16">
                    <div className="relative w-full h-full rotate-[-30deg]">
                      <h2 className=' absolute -top-5 left-25 w-[150px] rotate-20 text-white'>Scan to get APK !</h2>
                          <div className="absolute w-8 h-8 border-t-4 border-r-4 border-white rounded transform rotate-[130deg] translate-x-1 -translate-y-1"></div>
                           <div className="absolute w-16 h-16 border-t-4 top-11 rounded-tl-full left-24 rotate-[85deg] -scale-y-100 rounded border-white -translate-20"></div>
                    </div>
                  </div>
                  
              </div>  )
}

export default QrCodeComponent
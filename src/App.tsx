import './App.css'
import Features from './components/Features'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className='h-full min-h-[150dvh] bg-gradient-to-b from-gray-950 via-gray-900 to-black'>
      <Header/>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,102,241,0.10),transparent_40%)] font-cyber'></div>
      <Hero/>
      <Features/>
    </div>
  )
}

export default App

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className='h-full min-h-[150dvh] bg-gradient-to-b from-gray-950 via-gray-900 to-black'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_50%)]'></div>
      <Header/>
      <Hero/>
      <Hero/>
      <Hero/>
    </div>
  )
}

export default App

import './App.css'
import Background from './components/Background'
import StoreButtons from './components/StoreButtons'
import FamilyOverlay from './components/FamilyOverlay'
import SoundToggle from './components/SoundToggle'

function App() {
  return (
    <>
      <Background />
      <SoundToggle />
      <main className="content">
        <h1 className="title">Return to God</h1>
        <div className="title-underline"></div>
        <p className="subtitle">Join the Movement</p>
        <StoreButtons />
        <FamilyOverlay />
      </main>
    </>
  )
}

export default App

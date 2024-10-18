
import styles from './App.module.css'
import './index.css'
import PartcilesComponent from './components/particles/particle'

import { Teams } from './components/Teams/Teams'
import { About } from './components/About/About'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { Events } from './components/Events/Events'
import { ResourcesPage } from './components/Resources/Resource'
function App() {

  return (
    <>
      <div className={styles.App}>
      <PartcilesComponent/>
        <Navbar/>
        <About/>
        <Events/>
        <Teams/>
        <ResourcesPage/>
        <Footer/>
      </div>
    </>
  )
}

export default App

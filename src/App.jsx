import Navbar from './components/Navbar/Navbar';
import Experient from './components/Experient/Experient';
import Projects from './components/Project/Projects';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

import './App.css'
import About from './components/About/About';


function App() {
 return (
    <div  className='container'>
      <Navbar />
      <section className='section-home' >
        <Home />
      </section>
      <section id='#about' >
        <About />
      </section>
      <section >
        <Experient />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>

    </div>
  )
}

export default App

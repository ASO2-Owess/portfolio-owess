import NavBar          from './components/NavBar.jsx'
import HeroSection     from './sections/HeroSection.jsx'
import AboutSection    from './sections/AboutSection.jsx'
import SkillsSection   from './sections/SkillsSection.jsx'
import ProjectsSection from './sections/ProjectsSection.jsx'
import ContactSection  from './sections/ContactSection.jsx'

function App() {
  return (
    <div className="bg-[#0A1628] min-h-screen text-white">

      {/* Navigation fixe en haut */}
      <NavBar />

      {/* Contenu principal */}
      <main>
        <HeroSection     id="accueil"     />
        <AboutSection    id="apropos"     />
        <SkillsSection   id="competences" />
        <ProjectsSection id="projets"     />
        <ContactSection  id="contact"     />
      </main>

    </div>
  )
}

export default App
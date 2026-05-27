import { useEffect, useState } from 'react'
import profilImageSrc from '../assets/images/moi.jpeg'

function HeroSection() {
  const titres = [
    'Développeur Web',
    'Développeur Mobile',
    'Analyste SOC Junior',
    'Administrateur Linux',
  ]

  const [titreActif, setTitreActif] = useState(0)
  const [visible, setVisible] = useState(true)
  const [profilImageChargee, setProfilImageChargee] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setTitreActif(prev => (prev + 1) % titres.length)
        setVisible(true)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [titres.length])

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      <div className="hero-bg absolute inset-0 z-0" />
      <div className="cercle-1 absolute top-20 right-10 w-96 h-96 rounded-full opacity-10" />
      <div className="cercle-2 absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-5" />

      <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="hero-content">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="badge-dot w-2 h-2 rounded-full" />
            Disponible pour un Emploi/stage
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-4">
            <span className="hero-nom">AKPA SALOMON OWESS</span>
          </h1>

          <div className="h-12 mb-6">
            <p
              className={`text-2xl font-semibold hero-titre-anime transition-all duration-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
            >
              {titres[titreActif]}
            </p>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
            Laravel · Flutter · React · Linux · Réseau · SOC. Je construis des
            applications web et mobiles sécurisées, avec une bonne base en
            administration Linux et cybersécurité pratique.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#projets"
              className="btn-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="btn-secondary px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Me contacter
            </a>
          </div>

          <div className="flex flex-wrap gap-8">
            {[
              { nombre: '7+', label: 'Projets réalisés' },
              { nombre: '3', label: 'Axes de compétences' },
              { nombre: '100%', label: 'Projets documentés' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <p className="stat-nombre text-3xl font-black">
                  {stat.nombre}
                </p>
                <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="profil-card p-8 rounded-2xl relative">
            <div className="profil-avatar w-32 h-32 rounded-full mx-auto mb-6 relative overflow-hidden">
              <img
                src={profilImageSrc}
                alt="Photo de profil"
                onLoad={() => setProfilImageChargee(true)}
                onError={() => setProfilImageChargee(false)}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${profilImageChargee ? 'opacity-100' : 'opacity-0'}`}
              />
              <span className={`flex items-center justify-center w-full h-full text-4xl font-black transition-opacity duration-300 ${profilImageChargee ? 'opacity-0' : 'opacity-100'}`}>
                AO
              </span>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-1">AKPA SALOMON OWESS</h3>
              <p className="text-gray-400 text-sm">
                Développeur Full-Stack & Sécurité
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {['Laravel', 'Flutter', 'React', 'Linux', 'Python', 'SOC'].map(
                tech => (
                  <span
                    key={tech}
                    className="tech-badge px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <a
                href="https://github.com/ASO2-Owess"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link px-4 py-2 rounded-lg text-sm transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/salomon-owess-akpa-2b6244344"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link px-4 py-2 rounded-lg text-sm transition-all duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-arrow">
        <a href="#apropos" aria-label="Aller à la section à propos">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2 mx-auto">
            <div className="w-1 h-3 bg-white/50 rounded-full scroll-dot" />
          </div>
        </a>
      </div>
    </section>
  )
}

export default HeroSection

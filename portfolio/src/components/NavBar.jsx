import { useEffect, useState } from 'react'

function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOuvert, setMenuOuvert] = useState(false)

  const liens = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'A propos', href: '#apropos' },
    { label: 'Compétences', href: '#competences' },
    { label: 'Projets', href: '#projets' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    function gererScroll() {
      setScrolled(window.scrollY > 50)
    }

    gererScroll()
    window.addEventListener('scroll', gererScroll)

    return () => window.removeEventListener('scroll', gererScroll)
  }, [])

  function gererClicLien() {
    setMenuOuvert(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A1628]/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#accueil" className="logo-text text-2xl font-bold">
          AKPA S<span className="text-[#C8A97E]">.</span> OWESS
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {liens.map(lien => (
            <li key={lien.href}>
              <a
                href={lien.href}
                className="text-sm font-medium text-gray-300 hover:text-[#C8A97E] transition-colors duration-200"
              >
                {lien.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`${import.meta.env.BASE_URL}CV_Salomon_Owess_Akpa.pdf`}
          download
          className="hidden md:block btn-cv px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
        >
          Télécharger CV
        </a>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOuvert(!menuOuvert)}
          aria-expanded={menuOuvert}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOuvert ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOuvert ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOuvert ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {menuOuvert && (
        <div className="md:hidden bg-[#0A1628]/98 backdrop-blur-md border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {liens.map(lien => (
              <li key={lien.href}>
                <a
                  href={lien.href}
                  onClick={gererClicLien}
                  className="block text-gray-300 hover:text-[#C8A97E] transition-colors py-2"
                >
                  {lien.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={`${import.meta.env.BASE_URL}CV_Salomon_Owess_Akpa.pdf`}
            download
            className="btn-cv block text-center mt-4 px-5 py-2 rounded-lg text-sm font-semibold"
          >
            Télécharger CV
          </a>
        </div>
      )}
    </nav>
  )
}

export default NavBar

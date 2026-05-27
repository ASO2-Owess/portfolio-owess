import { useState } from 'react'
import ProjetCard from '../components/ProjetCard.jsx'

function ProjectsSection() {
  const [filtreActif, setFiltreActif] = useState('Tous')

  const categories = ['Tous', 'Réseau & SOC', 'Backend', 'Mobile', 'Web App']

  const projets = [
    {
      id: 1,
      titre: 'Mini-lab Réseau & Sécurité',
      description:
        'Lab complet : SSH, Nmap, UFW, Fail2Ban, Wireshark sur VirtualBox. Simulation infrastructure entreprise.',
      categorie: 'Réseau & SOC',
      tags: ['Linux', 'SSH', 'Nmap', 'UFW', 'Fail2Ban'],
      github: 'https://github.com/ASO2-Owess/mini-lab-reseau-securite',
      highlight: false,
    },
    {
      id: 2,
      titre: 'Script Automatisation Réseau',
      description:
        'Script Python de monitoring automatique : ping, test ports, rapports CSV/JSON/Markdown horodatés.',
      categorie: 'Réseau & SOC',
      tags: ['Python', 'subprocess', 'socket', 'CSV'],
      github: 'https://github.com/ASO2-Owess/script-automatisation-reseau',
      highlight: false,
    },
    {
      id: 3,
      titre: 'Lab SOC SSH - Incident Response',
      description:
        "Simulation attaque brute-force SSH avec Hydra, analyse logs auth.log, rapport d'incident SOC.",
      categorie: 'Réseau & SOC',
      tags: ['SOC', 'Hydra', 'Fail2Ban', 'Python', 'auth.log'],
      github: 'https://github.com/ASO2-Owess/lab-soc-ssh-incident-response',
      highlight: false,
    },
    {
      id: 4,
      titre: 'API Laravel Sécurisée - Ecobank CI',
      description:
        'API REST Laravel 11 avec Sanctum, rôles admin/employé, CRUD produits financiers et tests Postman.',
      categorie: 'Backend',
      tags: ['Laravel', 'PHP', 'Sanctum', 'MySQL', 'REST'],
      github: 'https://github.com/ASO2-Owess/api-laravel-securisee',
      highlight: true,
    },
    {
      id: 5,
      titre: 'Stock Manager Flutter - CFAO CI',
      description:
        "Application Android connectée à l'API Laravel. Auth token, liste produits, CRUD admin, APK généré.",
      categorie: 'Mobile',
      tags: ['Flutter', 'Dart', 'Provider', 'SharedPreferences'],
      github: 'https://github.com/ASO2-Owess/mini-stock-manager-flutter',
      highlight: true,
    },
    {
      id: 6,
      titre: 'Drivexa - Web App Laravel MVC',
      description:
        'Application web e-commerce automobile. Auth, dashboard admin, CRUD, design moderne CSS pur.',
      categorie: 'Web App',
      tags: ['Laravel', 'Blade', 'MySQL', 'CSS', 'MVC'],
      github: 'https://github.com/ASO2-Owess/laravel-web-app',
      highlight: true,
    },
    {
      id: 7,
      titre: 'Drivexa Mobile - Flutter',
      description:
        'Version mobile Android de Drivexa. Catalogue voitures, navigation fluide, design luxe.',
      categorie: 'Mobile',
      tags: ['Flutter', 'Dart', 'Android', 'UI/UX'],
      github: 'https://github.com/ASO2-Owess/drivexa_ci',
      highlight: false,
    },
  ]

  const projetsFiltres =
    filtreActif === 'Tous'
      ? projets
      : projets.filter(projet => projet.categorie === filtreActif)

  return (
    <section id="projets" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-tag text-sm font-semibold tracking-widest uppercase mb-3">
            Ce que j'ai construit
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Mes <span className="titre-accent">projets</span>
          </h2>
          <div className="separateur mx-auto mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto">
            Chaque projet est documenté sur GitHub avec captures, rapports
            techniques et README professionnel.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setFiltreActif(cat)}
              className={`filtre-btn px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filtreActif === cat ? 'filtre-actif' : 'filtre-inactif'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetsFiltres.map(projet => (
            <ProjetCard key={projet.id} projet={projet} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

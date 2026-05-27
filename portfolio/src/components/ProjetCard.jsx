function ProjetCard({ projet }) {
  const couleurs = {
    'Réseau & SOC': 'couleur-soc',
    Backend: 'couleur-backend',
    Mobile: 'couleur-mobile',
    'Web App': 'couleur-webapp',
  }

  const githubUrl = projet.github?.startsWith('http')
    ? projet.github
    : `https://${projet.github}`

  return (
    <div
      className={`projet-card rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 ${
        projet.highlight ? 'projet-highlight' : ''
      }`}
    >
      <div className={`h-1 ${couleurs[projet.categorie] || 'couleur-webapp'}`} />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <span className="categorie-badge text-xs font-semibold px-3 py-1 rounded-full">
            {projet.categorie}
          </span>
          {projet.highlight && (
            <span className="highlight-badge text-xs font-bold px-2 py-1 rounded-full">
              ★ Featured
            </span>
          )}
        </div>

        <h3 className="text-white font-bold text-lg mb-2 leading-snug">
          {projet.titre}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {projet.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {projet.tags.map(tag => (
            <span key={tag} className="tag-badge text-xs px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link flex items-center gap-2 text-sm font-semibold transition-all duration-300 group"
        >
          <span>Voir sur GitHub</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  )
}

export default ProjetCard

function SkillBadge({ nom, couleur }) {

  const couleurs = {
    dev    : 'badge-dev',
    reseau : 'badge-reseau',
    soc    : 'badge-soc',
    defaut : 'badge-defaut',
  }

  const classe = couleurs[couleur] || couleurs.defaut

  return (
    <span className={`skill-badge ${classe} px-3 py-1
                      rounded-full text-xs font-semibold
                      transition-all duration-300`}>
      {nom}
    </span>
  )
}

export default SkillBadge
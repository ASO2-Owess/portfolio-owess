function SkillsSection() {
  const axes = [
    {
      titre: 'Développement',
      icone: '💻',
      couleur: 'axe-dev',
      skills: [
        { nom: 'Laravel / PHP', niveau: 85 },
        { nom: 'Flutter / Dart', niveau: 80 },
        { nom: 'React / JS', niveau: 75 },
        { nom: 'MySQL', niveau: 80 },
        { nom: 'API REST', niveau: 85 },
        { nom: 'Blade / HTML CSS', niveau: 80 },
      ],
    },
    {
      titre: 'Réseau & Linux',
      icone: '🌐',
      couleur: 'axe-reseau',
      skills: [
        { nom: 'Ubuntu Server', niveau: 80 },
        { nom: 'SSH / OpenSSH', niveau: 85 },
        { nom: 'Nmap', niveau: 75 },
        { nom: 'UFW / iptables', niveau: 75 },
        { nom: 'Wireshark', niveau: 70 },
        { nom: 'Python réseau', niveau: 80 },
      ],
    },
    {
      titre: 'SOC & Sécurité',
      icone: '🔒',
      couleur: 'axe-soc',
      skills: [
        { nom: 'Fail2Ban', niveau: 80 },
        { nom: 'Analyse logs SSH', niveau: 80 },
        { nom: 'Sanctum / Auth', niveau: 85 },
        { nom: 'Hydra (lab)', niveau: 70 },
        { nom: 'Rapports SOC', niveau: 85 },
        { nom: 'Git / GitHub', niveau: 85 },
      ],
    },
  ]

  const outils = [
    'VS Code',
    'Git',
    'GitHub',
    'Postman',
    'XAMPP',
    'VirtualBox',
    'Kali Linux',
    'Android Studio',
    'phpMyAdmin',
    'Wireshark',
    'Nmap',
    'Composer',
  ]

  return (
    <section id="competences" className="py-24 skills-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-tag text-sm font-semibold tracking-widest uppercase mb-3">
            Ce que je maîtrise
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Mes <span className="titre-accent">compétences</span>
          </h2>
          <div className="separateur mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {axes.map(axe => (
            <div key={axe.titre} className="skill-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{axe.icone}</span>
                <h3 className="text-lg font-bold text-white">{axe.titre}</h3>
              </div>

              <div className="space-y-4">
                {axe.skills.map(skill => (
                  <div key={skill.nom}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-400 text-sm">{skill.nom}</span>
                      <span className="text-gray-500 text-xs">
                        {skill.niveau}%
                      </span>
                    </div>
                    <div className="barre-bg h-1.5 rounded-full">
                      <div
                        className={`barre-fill ${axe.couleur} h-1.5 rounded-full`}
                        style={{ width: `${skill.niveau}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-6">
            Outils utilisés
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {outils.map(outil => (
              <span
                key={outil}
                className="outil-badge px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              >
                {outil}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

function AboutSection() {
  const infos = [
    { label: 'Localisation', valeur: "Abidjan, Côte d'Ivoire" },
    { label: 'Disponibilité', valeur: 'Stage / Alternance / Emploi' },
    { label: 'Langues', valeur: 'Français, Anglais technique' },
    {
      label: 'GitHub',
      valeur: 'github.com/ASO2-Owess',
      lien: 'https://github.com/ASO2-Owess',
    },
  ]

  const axes = [
    {
      titre: 'Développement',
      desc: 'Web Laravel, Mobile Flutter, React',
      color: 'axe-dev',
    },
    {
      titre: 'Réseau & Linux',
      desc: 'Ubuntu, SSH, Nmap, UFW, Wireshark',
      color: 'axe-reseau',
    },
    {
      titre: 'SOC & Sécurité',
      desc: 'Fail2Ban, Logs SSH, Analyse incidents',
      color: 'axe-soc',
    },
  ]

  return (
    <section id="apropos" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-tag text-sm font-semibold tracking-widest uppercase mb-3">
            Qui suis-je
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            À <span className="titre-accent">propos de moi</span> 
          </h2>
          <div className="separateur mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Profil polyvalent technique
            </h3>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
               Je suis étudiant en fin de cycle de Licence en Sciences Informatiques à ETIC University. 
               Ma formation m’a permis d’acquérir des bases solides en développement web, 
               mobile, bases de données, réseaux et systèmes.

Passionné et autodidacte, je continue de renforcer mes compétences à travers des projets pratiques avec Laravel, Flutter, Linux et la cybersécurité, afin de concevoir des applications modernes, utiles et sécurisées.
              </p>
              <p>
                Ce qui me distingue : je ne suis pas uniquement développeur.
                J'ai une formation pratique en réseaux, en administration de
                serveurs Ubuntu et en analyse SOC. En entreprise, je peux coder,
                déployer, sécuriser et maintenir une application.
              </p>
              <p>
                Tous mes projets sont documentés sur GitHub avec des rapports
                techniques, des captures et des README professionnels, comme en
                conditions réelles.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={`${import.meta.env.BASE_URL}CV_Salomon_Owess_Akpa.pdf`}
                download
                className="btn-primary px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300"
              >
                Télécharger CV
              </a>
              <a
                href="#projets"
                className="btn-secondary px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300"
              >
                Voir les projets
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="info-card p-6 rounded-xl mb-6">
              <h4 className="text-white font-semibold mb-4">Informations</h4>
              <div className="space-y-3">
                {infos.map(info => (
                  <div
                    key={info.label}
                    className="flex justify-between items-center border-b border-white/5 pb-3 gap-4"
                  >
                    <span className="text-gray-500 text-sm">{info.label}</span>
                    <span className="text-gray-300 text-sm font-medium text-right">
                      {info.lien ? (
                        <a
                          href={info.lien}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#C8A97E] transition-colors"
                        >
                          {info.valeur}
                        </a>
                      ) : (
                        info.valeur
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {axes.map(axe => (
              <div
                key={axe.titre}
                className={`axe-card ${axe.color} p-4 rounded-xl flex items-center gap-4`}
              >
                <div className="axe-dot w-3 h-3 rounded-full flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">
                    {axe.titre}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">{axe.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

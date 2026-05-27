function ContactSection() {
  const contacts = [
    {
      label: 'GitHub',
      valeur: 'github.com/ASO2-Owess',
      lien: 'https://github.com/ASO2-Owess',
    },
    {
      label: 'Email',
      valeur: 'owesssalomon08@gmail.com',
      lien: 'mailto:owesssalomon08@gmail.com',
    },
    {
      label: 'LinkedIn',
      valeur: 'linkedin.com/in/owess',
      lien: 'https://linkedin.com/in/owess',
    },
  ]

  return (
    <section id="contact" className="py-24 contact-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-tag text-sm font-semibold tracking-widest uppercase mb-3">
            Travaillons ensemble
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Me <span className="titre-accent">contacter</span>
          </h2>
          <div className="separateur mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Disponible pour un stage
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Je recherche un emploi, un stage en développement web/mobile ou en
              cybersécurité à Abidjan. N'hésitez pas à me contacter directement
              via l'un des liens ci-dessous.
            </p>

            <div className="space-y-4">
              {contacts.map(contact => (
                <a
                  key={contact.label}
                  href={contact.lien}
                  target={contact.lien.startsWith('mailto:') ? undefined : '_blank'}
                  rel={
                    contact.lien.startsWith('mailto:')
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className="contact-item flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                >
                  <div className="contact-icon w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {contact.label[0]}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">{contact.label}</p>
                    <p className="text-gray-300 text-sm font-medium group-hover:text-[#C8A97E] transition-colors">
                      {contact.valeur}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Application Drivexa</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Télécharge l'application mobile Drivexa au format APK depuis ce lien. Le fichier est stocké dans le dossier <code>public/</code>.
            </p>
            <a
              href="/app-release.apk"
              download
              className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
            >
              Télécharger Drivexa APK
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

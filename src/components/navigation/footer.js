const navigation = {
  soluciones: [
    { name: 'Marketing', href: '#' },
    { name: 'Análisis', href: '#' },
    { name: 'Comercio', href: '#' },
  ],
  soporte: [
    { name: 'Precios', href: '#' },
    { name: 'Documentación', href: '#' },
    { name: 'Guías', href: '#' },
  ],
  empresa: [
    { name: 'Acerca de', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Empleos', href: '#' },
  ],
  legal: [
    { name: 'Reclamaciones', href: '#' },
    { name: 'Privacidad', href: '#' },
    { name: 'Términos', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/AndersonStick/ArteSonoro',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
   },
  ],
}

export default function Footer() {
  return (
    //<footer className="bg-custom-blue" aria-labelledby="footer-heading">
    <footer className="bg-[#007172]" aria-labelledby="footer-heading">

      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Soluciones</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.soluciones.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-white hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Soporte</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.soporte.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-white hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Empresa</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.empresa.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-white hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-white hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              CONTACTO
            </h3>
            <p className="mt-4 text-base text-white">
            Estamos aquí para acompañarte en cada etapa de tu viaje musical. Contáctanos si necesitas asesoramiento o personalización para tus instrumentos. Tu satisfacción y conexión con la música son nuestra prioridad. Gracias por confiar en ArteSonoro.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-white rounded-md shadow-sm py-2 px-4 text-base text-white placeholder-white focus:outline-none focus:ring-custom-blue focus:border-custom-blue focus:placeholder-white"
                placeholder="Ingresa tu correo electrónico"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-white flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-custom-blue hover:bg-custom-hover-blue focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-white pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-white hover:text-white">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-white md:mt-0 md:order-1">
            2024 ArteSonoro, Grupo de Marketing y gestión de negocios digitales.
          </p>
        </div>
      </div>
    </footer>
  )
}
export default function Example() {
    return (
      <div className="relative bg-white overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                🎵✨ ¡Vive la música esta Navidad con ArteSonoro! 🎄🎁
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                🎸 Dale a tu instrumento el diseño que merece estas fiestas. ¡Descuentos exclusivos en personalizaciones únicas! 🎨
Haz que tu música brille como nunca antes. 🎶 Regala arte, regala música. 🎁
                </p>
              </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://raw.githubusercontent.com/AndersonStick/ArteSonoro/refs/heads/main/media/photos/2024/1.2/Instrumentos/guitarra.webp"
                            alt="Guitarra personalizada"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://raw.githubusercontent.com/AndersonStick/ArteSonoro/refs/heads/main/media/photos/2024/1.2/Instrumentos/guitarra2.webp"
                            alt="Guitarra personalizada 2"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://raw.githubusercontent.com/AndersonStick/ArteSonoro/refs/heads/main/media/photos/2024/1.2/Instrumentos/violin.webp"
                            alt="Violin personalizado"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://raw.githubusercontent.com/AndersonStick/ArteSonoro/refs/heads/main/media/photos/2024/1.2/Instrumentos/percusion.webp"
                            alt="Tambor personalizado"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://raw.githubusercontent.com/AndersonStick/ArteSonoro/refs/heads/main/media/photos/2024/1.2/Instrumentos/accesorios.webp"
                            alt="Accesorios musicales personalizados"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://raw.githubusercontent.com/AndersonStick/ArteSonoro/refs/heads/main/media/photos/2024/1.2/Instrumentos/percusion2.webp"
                            alt="Pandereta personalizada"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://raw.githubusercontent.com/AndersonStick/ArteSonoro/refs/heads/main/media/photos/2024/1.2/Instrumentos/bateria.webp"
                            alt="Bateria personalizada"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="/shop"
                  className="inline-block text-center bg-custom-blue border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-custom-hover-blue"
                >
                  Compra Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
export default function HomePage() {
  const listings = [
    {
      title: "Appartement lumineux à Paris",
      city: "Paris",
      price: "1 250€/mois",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Studio moderne à Lyon",
      city: "Lyon",
      price: "890€/mois",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Loft premium à Bordeaux",
      city: "Bordeaux",
      price: "1 540€/mois",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img
            src="/logo.png"
            alt="Nestory"
            className="h-14 w-auto"
          />

          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#">Explorer</a>
            <a href="#">Favoris</a>
            <a href="#">Connexion</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div
          className="h-[75vh] bg-cover bg-center flex items-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop')",
          }}
        >
          <div className="bg-black/50 absolute inset-0" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Trouvez votre location longue durée idéale
            </h1>

            <p className="mt-6 text-xl max-w-2xl text-gray-200">
              Une plateforme premium basée sur la confiance,
              les avis et la qualité de vie.
            </p>

            {/* SEARCH */}
            <div className="mt-10 bg-white rounded-full p-3 flex flex-col md:flex-row gap-3 shadow-2xl max-w-4xl">
              <input
                type="text"
                placeholder="Ville"
                className="flex-1 px-4 py-3 rounded-full outline-none text-black"
              />

              <input
                type="text"
                placeholder="Budget max"
                className="flex-1 px-4 py-3 rounded-full outline-none text-black"
              />

              <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* LISTINGS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">
            Logements populaires
          </h2>

          <a href="#" className="text-gray-500">
            Voir tout
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <div
              key={listing.title}
              className="rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-300 bg-white"
            >
              <img
                src={listing.image}
                alt={listing.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-xl">
                    {listing.title}
                  </h3>

                  <span className="text-yellow-500 font-semibold">
                    ★ 4.9
                  </span>
                </div>

                <p className="text-gray-500 mt-2">
                  {listing.city}
                </p>

                <p className="mt-4 font-bold text-lg">
                  {listing.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
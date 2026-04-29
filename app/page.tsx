const homes = [
  {
    title: "Appartement lumineux",
    city: "Paris",
    type: "Meublé longue durée",
    price: "1 250 € / mois",
    rating: "4,92",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Studio cosy rénové",
    city: "Lyon",
    type: "Studio meublé",
    price: "820 € / mois",
    rating: "4,87",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "T2 avec balcon",
    city: "Bordeaux",
    type: "Location nue",
    price: "980 € / mois",
    rating: "4,95",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Loft premium",
    city: "Marseille",
    type: "Meublé premium",
    price: "1 490 € / mois",
    rating: "4,89",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Appartement calme",
    city: "Nantes",
    type: "Longue durée",
    price: "890 € / mois",
    rating: "4,81",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <img src="/logo.png" alt="Nestory" className="h-14 w-auto" />

          <nav className="hidden md:flex items-center gap-10 font-medium">
            <a className="border-b-2 border-black pb-2">Logements</a>
            <a className="text-neutral-500 hover:text-black">Expériences</a>
            <a className="text-neutral-500 hover:text-black">Services</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden md:block font-semibold">Devenir propriétaire</button>
            <button className="h-11 w-11 rounded-full bg-neutral-100">🌐</button>
            <button className="h-11 w-11 rounded-full bg-neutral-100">☰</button>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-6 pb-6">
          <div className="flex items-center rounded-full border bg-white shadow-xl overflow-hidden">
            <div className="flex-1 px-7 py-4 border-r">
              <p className="text-xs font-bold">Destination</p>
              <p className="text-neutral-500">Rechercher une ville</p>
            </div>
            <div className="flex-1 px-7 py-4 border-r">
              <p className="text-xs font-bold">Type</p>
              <p className="text-neutral-500">Meublé, nu...</p>
            </div>
            <div className="flex-1 px-7 py-4 border-r">
              <p className="text-xs font-bold">Budget</p>
              <p className="text-neutral-500">Prix maximum</p>
            </div>
            <button className="m-2 h-14 w-14 rounded-full bg-rose-500 text-white text-xl">
              🔍
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
          Trouvez une location longue durée en toute confiance.
        </h1>
        <p className="mt-4 text-lg text-neutral-600 max-w-2xl">
          Des logements évalués sur le confort, le voisinage, la communication et l’expérience locative.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Logements populaires</h2>
          <button className="rounded-full bg-neutral-100 px-4 py-2">→</button>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {homes.map((home) => (
            <article key={home.title} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={home.image}
                  alt={home.title}
                  className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow">
                  Coup de cœur
                </div>
                <button className="absolute top-3 right-3 text-3xl text-white drop-shadow">
                  ♡
                </button>
              </div>

              <div className="mt-3">
                <div className="flex justify-between gap-3">
                  <h3 className="font-bold">{home.title} · {home.city}</h3>
                  <span>★ {home.rating}</span>
                </div>
                <p className="text-neutral-500 text-sm">{home.type}</p>
                <p className="mt-1 font-semibold">{home.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold mb-8">Pourquoi choisir Nestory ?</h2>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["🏠", "Logements mieux évalués", "Des critères précis sur le logement et le quartier."],
              ["⭐", "Avis vérifiés", "Des retours liés à de vraies expériences locatives."],
              ["💬", "Communication claire", "Réactivité et qualité des échanges prises en compte."],
              ["🛡️", "Confiance renforcée", "Droit de réponse, modération et transparence."],
            ].map(([icon, title, text]) => (
              <div key={title} className="rounded-3xl bg-white p-6 shadow-sm border">
                <div className="text-4xl">{icon}</div>
                <h3 className="mt-4 font-bold text-lg">{title}</h3>
                <p className="mt-2 text-neutral-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
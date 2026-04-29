const listings = [
  {
    title: "Appartement lumineux avec balcon",
    city: "Paris 11e",
    type: "Meublé longue durée",
    price: "1 420 € / mois",
    rating: "4,92",
    reviews: "38 avis",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1400&auto=format&fit=crop",
    tags: ["Calme", "Métro proche", "Propriétaire réactif"],
  },
  {
    title: "T2 rénové proche centre",
    city: "Lyon 6e",
    type: "Location nue",
    price: "980 € / mois",
    rating: "4,88",
    reviews: "21 avis",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
    tags: ["Balcon", "DPE C", "Quartier agréable"],
  },
  {
    title: "Studio cosy et bien isolé",
    city: "Bordeaux",
    type: "Studio meublé",
    price: "740 € / mois",
    rating: "4,96",
    reviews: "26 avis",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1400&auto=format&fit=crop",
    tags: ["Transports", "Silencieux", "Commerces"],
  },
  {
    title: "Loft premium longue durée",
    city: "Marseille",
    type: "Meublé premium",
    price: "1 560 € / mois",
    rating: "4,91",
    reviews: "17 avis",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop",
    tags: ["Vue dégagée", "Lumineux", "Sécurisé"],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#17352d]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <img src="/logo.png" alt="Nestory" className="h-16 w-auto" />

          <nav className="hidden items-center gap-10 text-sm font-semibold md:flex">
            <a className="text-[#b8872f]">Accueil</a>
            <a className="hover:text-[#b8872f]">Rechercher</a>
            <a className="hover:text-[#b8872f]">Déposer une annonce</a>
            <a className="hover:text-[#b8872f]">Favoris</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-[#17352d]/20 px-5 py-3 text-sm font-semibold md:block">
              Connexion
            </button>
            <button className="rounded-full bg-[#17352d] px-5 py-3 text-sm font-semibold text-white shadow-lg">
              S'inscrire
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
          <div>
            <p className="mb-5 inline-flex rounded-full bg-white px-5 py-2 text-sm font-bold text-[#b8872f] shadow-sm">
              Location longue durée plus transparente
            </p>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Trouvez votre futur chez-vous en toute confiance.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#45635b]">
              Nestory connecte locataires et propriétaires grâce à des avis
              vérifiés, des critères objectifs et une expérience moderne pensée
              pour la location longue durée.
            </p>

            <div className="mt-10 rounded-[2rem] bg-white p-3 shadow-2xl">
              <div className="grid gap-3 md:grid-cols-[1.2fr_1fr_1fr_auto]">
                <div className="rounded-2xl border border-black/10 px-5 py-4">
                  <p className="text-xs font-bold uppercase text-[#b8872f]">
                    Destination
                  </p>
                  <input
                    placeholder="Ville, quartier..."
                    className="mt-1 w-full bg-transparent text-sm outline-none"
                  />
                </div>

                <div className="rounded-2xl border border-black/10 px-5 py-4">
                  <p className="text-xs font-bold uppercase text-[#b8872f]">
                    Type
                  </p>
                  <input
                    placeholder="Meublé, nu..."
                    className="mt-1 w-full bg-transparent text-sm outline-none"
                  />
                </div>

                <div className="rounded-2xl border border-black/10 px-5 py-4">
                  <p className="text-xs font-bold uppercase text-[#b8872f]">
                    Budget
                  </p>
                  <input
                    placeholder="Prix max"
                    className="mt-1 w-full bg-transparent text-sm outline-none"
                  />
                </div>

                <button className="rounded-2xl bg-[#17352d] px-8 py-4 font-bold text-white transition hover:scale-[1.02]">
                  Rechercher
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop"
              alt="Appartement moderne"
              className="h-[560px] w-full rounded-[3rem] object-cover shadow-2xl"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] bg-white/95 p-5 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#45635b]">
                    Score confiance logement
                  </p>
                  <p className="text-2xl font-black">4,9 / 5</p>
                </div>
                <div className="rounded-full bg-[#fff4d8] px-4 py-2 font-bold text-[#b8872f]">
                  52 critères vérifiés
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-black">Logements populaires</h2>
            <p className="mt-2 text-[#45635b]">
              Des biens sélectionnés selon la qualité du logement, du quartier
              et de la relation locative.
            </p>
          </div>
          <button className="hidden rounded-full bg-white px-5 py-3 font-bold shadow-sm md:block">
            Voir tout →
          </button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {listings.map((listing) => (
            <article key={listing.title} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-lg">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-black shadow">
                  Coup de cœur
                </div>

                <button className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-2 text-xl shadow">
                  ♡
                </button>
              </div>

              <div className="mt-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-black leading-snug">
                    {listing.title}
                  </h3>
                  <span className="shrink-0 font-bold">★ {listing.rating}</span>
                </div>

                <p className="mt-1 text-sm text-[#45635b]">
                  {listing.city} · {listing.type}
                </p>

                <p className="mt-2 font-black">{listing.price}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {listing.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#45635b] shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[3rem] bg-[#17352d] p-8 text-white md:p-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 font-bold text-[#d8ad51]">
                Pour locataires et propriétaires
              </p>
              <h2 className="text-4xl font-black leading-tight md:text-5xl">
                Une plateforme pensée pour créer de la confiance.
              </h2>
              <p className="mt-6 leading-8 text-white/75">
                Les logements sont évalués sur des critères concrets :
                luminosité, bruit, isolation, quartier, communication,
                réactivité, état du logement et expérience locative.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["🏠", "Logements notés", "Critères objectifs sur le bien."],
                ["⭐", "Avis vérifiés", "Basés sur une vraie expérience."],
                ["💬", "Relation claire", "Communication et réactivité."],
                ["🛡️", "Modération", "Droit de réponse et sécurité."],
              ].map(([icon, title, text]) => (
                <div
                  key={title}
                  className="rounded-[2rem] bg-white/10 p-6 backdrop-blur"
                >
                  <div className="text-4xl">{icon}</div>
                  <h3 className="mt-4 font-black">{title}</h3>
                  <p className="mt-2 text-sm text-white/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[3rem] bg-white p-8 shadow-xl md:p-12">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-4xl font-black">
                Vous êtes propriétaire ?
              </h2>
              <p className="mt-4 max-w-2xl text-[#45635b]">
                Publiez votre logement, recevez des candidatures qualifiées et
                suivez la qualité de vos échanges avec les locataires.
              </p>
            </div>

            <button className="rounded-full bg-[#b8872f] px-8 py-4 font-black text-white shadow-lg transition hover:scale-[1.02]">
              Déposer une annonce
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
'use client';

import React from 'react';
import { Search, Star, ShieldCheck, MessageCircle, SlidersHorizontal, MapPin, Home, UserCheck, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const listings = [
  {
    title: 'Appartement lumineux proche Canal Saint-Martin',
    city: 'Paris 10e',
    price: '1 420 € / mois',
    type: 'Meublé longue durée',
    rating: '4,8',
    reviews: '32 avis vérifiés',
    tags: ['Calme', 'Transports', 'Propriétaire réactif'],
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'T2 rénové avec balcon',
    city: 'Lyon 6e',
    price: '980 € / mois',
    type: 'Nu longue durée',
    rating: '4,7',
    reviews: '18 avis vérifiés',
    tags: ['Quartier sûr', 'Balcon', 'Bonne isolation'],
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Studio cosy près tramway',
    city: 'Bordeaux Chartrons',
    price: '720 € / mois',
    type: 'Meublé longue durée',
    rating: '4,9',
    reviews: '24 avis vérifiés',
    tags: ['DPE C', 'Commerces', 'Communication fluide'],
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop'
  }
];

const criteria = ['Lumineux', 'Calme', 'Bonne isolation', 'Transports proches', 'Quartier agréable', 'Propriétaire réactif', 'Paiement fiable', 'Logement rendu propre'];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500 text-white">
              <Home size={20} />
            </div>
            <img src="/logo.png" alt="Nestory" className="h-16 w-auto" />
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#logements" className="hover:text-rose-500">Explorer</a>
            <a href="#confiance" className="hover:text-rose-500">Confiance</a>
            <a href="#proprietaires" className="hover:text-rose-500">Propriétaires</a>
          </nav>
          <button className="rounded-full border px-5 py-2 text-sm font-semibold shadow-sm hover:shadow-md">Connexion</button>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="mb-4 inline-flex rounded-full bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600">Location longue durée plus transparente</p>
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">Louer mieux, avec des avis vraiment utiles.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">NESTORY met en relation locataires et propriétaires grâce à des critères détaillés sur le logement, le voisinage, la communication et les expériences locatives vérifiées.</p>

          <div className="mt-8 rounded-full border bg-white p-2 shadow-xl md:flex md:max-w-3xl">
            <div className="flex flex-1 items-center gap-3 px-5 py-3">
              <Search className="text-neutral-400" size={20} />
              <input className="w-full outline-none" placeholder="Ville, quartier, métro..." />
            </div>
            <div className="flex flex-1 items-center gap-3 border-t px-5 py-3 md:border-l md:border-t-0">
              <SlidersHorizontal className="text-neutral-400" size={20} />
              <input className="w-full outline-none" placeholder="Budget, surface, critères..." />
            </div>
            <button className="m-1 rounded-full bg-rose-500 px-7 py-3 font-semibold text-white hover:bg-rose-600">Rechercher</button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="relative">
          <img className="h-[520px] w-full rounded-[2rem] object-cover shadow-2xl" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop" alt="Appartement moderne" />
          <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/95 p-5 shadow-xl backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold">Score confiance logement</p>
                <p className="text-sm text-neutral-500">48 critères analysés</p>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-rose-50 px-3 py-2 font-bold text-rose-600">
                <Star size={17} fill="currentColor" /> 4,8
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="logements" className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">Logements bien notés</h2>
            <p className="mt-2 text-neutral-600">Des appartements évalués sur le logement, le quartier et la qualité de relation.</p>
          </div>
          <button className="hidden rounded-full border px-5 py-3 font-semibold md:block">Voir tout</button>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {listings.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-[1.7rem] border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative overflow-hidden">
                <img src={item.image} alt={item.title} className="h-64 w-full object-cover transition group-hover:scale-105" />
                <button className="absolute right-4 top-4 rounded-full bg-white/90 p-3 shadow"><Heart size={18} /></button>
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <p className="flex items-center gap-1 text-sm text-neutral-500"><MapPin size={15} /> {item.city}</p>
                  <p className="flex items-center gap-1 font-bold"><Star size={16} fill="currentColor" /> {item.rating}</p>
                </div>
                <h3 className="text-lg font-bold leading-snug">{item.title}</h3>
                <p className="mt-1 text-sm text-neutral-500">{item.type}</p>
                <p className="mt-3 font-bold">{item.price}</p>
                <p className="mt-1 text-sm text-neutral-500">{item.reviews}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => <span key={tag} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold">{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="confiance" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] bg-neutral-950 p-8 text-white md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-4xl font-bold">La confiance, mais avec des faits vérifiables.</h2>
              <p className="mt-5 text-neutral-300">Les avis sont structurés pour éviter les jugements injustes : paiement à temps, état du logement, réactivité, qualité de communication, respect du bail et droit de réponse.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-5">
                  <ShieldCheck className="mb-3 text-rose-300" />
                  <p className="font-bold">Avis vérifiés</p>
                  <p className="mt-1 text-sm text-neutral-300">Liés à une vraie expérience locative.</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-5">
                  <MessageCircle className="mb-3 text-rose-300" />
                  <p className="font-bold">Communication notée</p>
                  <p className="mt-1 text-sm text-neutral-300">Réactivité et qualité des échanges.</p>
                </div>
              </div>
            </div>
            <div className="rounded-[1.5rem] bg-white p-6 text-neutral-900">
              <h3 className="text-xl font-bold">Critères pris en compte</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {criteria.map((item) => <div key={item} className="rounded-2xl border p-4 text-sm font-semibold">{item}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proprietaires" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-[1.5rem] border p-7 shadow-sm">
            <Home className="mb-4 text-rose-500" />
            <h3 className="text-xl font-bold">Publier une annonce</h3>
            <p className="mt-3 text-neutral-600">Ajoutez photos, loyer, charges, équipements, DPE, conditions et disponibilité.</p>
          </div>
          <div className="rounded-[1.5rem] border p-7 shadow-sm">
            <UserCheck className="mb-4 text-rose-500" />
            <h3 className="text-xl font-bold">Comparer les candidatures</h3>
            <p className="mt-3 text-neutral-600">Consultez les dossiers, échanges et retours d’expériences vérifiés, sans critères discriminatoires.</p>
          </div>
          <div className="rounded-[1.5rem] border p-7 shadow-sm">
            <ShieldCheck className="mb-4 text-rose-500" />
            <h3 className="text-xl font-bold">Sécuriser la relation</h3>
            <p className="mt-3 text-neutral-600">Messagerie, avis structurés, signalements, modération et droit de réponse.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

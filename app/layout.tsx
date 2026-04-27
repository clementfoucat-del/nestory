import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NESTORY - Location longue durée plus transparente',
  description: 'Plateforme de mise en relation entre propriétaires et locataires avec avis vérifiés, critères logement et confiance.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

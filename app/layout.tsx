import './styles/globals.css';
import { ReactNode } from 'react';
import Header from './components/Header';

export const metadata = {
  title: 'Portafolio de Angie Paola Yarce',
  description: 'Hoja de vida y portafolio de Angie Paola Yarce Gómez',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="flex">
        <Header /> {/* Header se renderiza solo aquí */}
        <main className="ml-0 w-full p-4 flex flex-col gap-8 h-screen"> {/* Ajuste de margen y ancho para evitar superposiciones */}
          <section className="flex-1">
            {children} {/* Aquí irá el contenido dinámico */}
          </section>
        </main>
      </body>
    </html>
  );
}

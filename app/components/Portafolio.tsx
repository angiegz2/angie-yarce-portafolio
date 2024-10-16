"use client"; // Indicamos que es un Client Component

import React, { useRef, useState } from 'react';
import { FaCode, FaPaintBrush, FaServer, FaProjectDiagram, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Portafolio = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showMore, setShowMore] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false
  });

  // Función para desplazar el contenido a la izquierda o derecha
  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 3;

      if (direction === 'left') {
        scrollRef.current.scrollTo({
          left: scrollLeft - scrollAmount,
          behavior: 'smooth',
        });
      } else {
        scrollRef.current.scrollTo({
          left: scrollLeft + scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  // Función para alternar "Leer más"
  const handleToggleReadMore = (projectId: number) => {
    setShowMore((prev) => ({ ...prev, [projectId]: !prev[projectId] }));
  };

  return (
    <section className="mt-8 flex-1 relative">
      <h2 className="text-3xl font-bold text-center">Portafolio</h2>
      <p className="text-center text-gray-600 mt-2">Aquí están algunos de los proyectos que he realizado.</p>

      {/* Contenedor de scroll horizontal */}
      <div className="relative mt-6">
        {/* Botón de desplazamiento a la izquierda */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-white p-3 rounded-full shadow-md z-10"
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Contenedor de los proyectos con scroll horizontal */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-hidden scroll-smooth"
        >
          <div className="flex space-x-6" style={{ scrollSnapType: 'x mandatory' }}>
            {/* Recuadro 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center min-w-[300px] max-w-[300px]" style={{ scrollSnapAlign: 'start' }}>
              <FaCode className="text-blue-500 mx-auto mb-2" size={40} />
              <h3 className="text-xl font-semibold">Proyecto 1</h3>
              <p className="text-gray-600">Computación móvil</p>

              {showMore[1] && (
                <>
                <p className="text-gray-500 mt-2">
                  Este proyecto fue creado como el primer laboratorio
                  de la materia de computación móvil. El entorno que se utilizó fue Android Studio
                  y se uso el lenguaje Kotlin. Es un proyecto 100% funcional.
                </p>
                <p className="text-gray-500 mt-2">
                  Enlace al proyecto: https://github.com/angiegz2/Labs
                  CM20241-Gr02.git
                </p>
              </>
              )}

              <button
                className="mt-4 text-blue-600 hover:underline"
                onClick={() => handleToggleReadMore(1)}
              >
                {showMore[1] ? 'Leer menos' : 'Leer más'}
              </button>
            </div>

            {/* Recuadro 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center min-w-[300px] max-w-[300px]" style={{ scrollSnapAlign: 'start' }}>
              <FaPaintBrush className="text-blue-500 mx-auto mb-2" size={40} />
              <h3 className="text-xl font-semibold">Proyecto 2</h3>
              <p className="text-gray-600">LifeGPS</p>

              {showMore[2] && (
                <>
                <p className="text-gray-500 mt-2">
                  Este fue un proyecto final, también para la materia de computación móvil.
                  Usamos el mismo lenguaje y entorno. El proyecto fue elegido por decisión propia y está relacionado
                  con un sistema responsivo a emergencias causadas por accidentes, en donde se le brinda
                  apoyo y primeros auxilios a las personas accidentadas mientras se llega al lugar indicado. El proyecto funciona en un 80%.
                </p>
                <p className="text-gray-500 mt-2">
                  Enlace al proyecto: https://github.com/angiegz2/Life
                  GPS.git
                </p>
              </>
              )}

              <button
                className="mt-4 text-blue-600 hover:underline"
                onClick={() => handleToggleReadMore(2)}
              >
                {showMore[2] ? 'Leer menos' : 'Leer más'}
              </button>
            </div>

            {/* Recuadro 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center min-w-[300px] max-w-[300px]" style={{ scrollSnapAlign: 'start' }}>
              <FaServer className="text-blue-500 mx-auto mb-2" size={40} />
              <h3 className="text-xl font-semibold">Proyecto 3</h3>
              <p className="text-gray-600">Calculadora básica</p>

              {showMore[3] && (
                <>
                <p className="text-gray-500 mt-2">
                  Calculadora básica realizada para la materia de
                  ingeniería web, la cual cuenta con un diseño básico y funcionalidades de igual
                  forma (suma, resta, multiplicación y división).</p>
                <p className="text-gray-500 mt-2">
                  Enlace al proyecto: https://github.com/ingenieria-web-udea-LM-20242/taller-html-angie-yarce.git
                </p>
              </>
              )}

              <button
                className="mt-4 text-blue-600 hover:underline"
                onClick={() => handleToggleReadMore(3)}
              >
                {showMore[3] ? 'Leer menos' : 'Leer más'}
              </button>
            </div>

            {/* Recuadro 4 */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center min-w-[300px] max-w-[300px]" style={{ scrollSnapAlign: 'start' }}>
              <FaProjectDiagram className="text-blue-500 mx-auto mb-2" size={40} />
              <h3 className="text-xl font-semibold">Proyecto 4</h3>
              <p className="text-gray-600">BootIA.</p>

              {showMore[4] && (
                <>
                <p className="text-gray-500 mt-2">
                  Proyecto final para la materia de proyecto integrador I.
                  Dicho proyecto se trata sobre un boot inteligente responsivo, el cual recomienda recetas, música y lecturas
                  según el estado de ánimo de las personas. El boot tiene la capacidad de reconocer emociones
                  básicas e interactuar con el usuario. El proyecto todavía se está trabajando, ya que aún no
                  es su fecha de entrega.
                </p>
                <p className="text-gray-500 mt-2">
                  Enlace al proyecto: https://github.com/Cde571/food-emotions.git
                </p>
              </>
              )}

              <button
                className="mt-4 text-blue-600 hover:underline"
                onClick={() => handleToggleReadMore(4)}
              >
                {showMore[4] ? 'Leer menos' : 'Leer más'}
              </button>
            </div>
          </div>
        </div>

        {/* Botón de desplazamiento a la derecha */}
        <button
          onClick={() => handleScroll('right')}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-white p-3 rounded-full shadow-md z-10"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Portafolio;

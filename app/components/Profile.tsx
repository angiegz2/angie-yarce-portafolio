"use client";  // Directiva para marcar el componente como Client Component

import React, { useState } from 'react';
import Image from 'next/image';

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="flex items-center justify-between bg-white p-8 rounded-lg shadow-md">
      <div>
        <h1 className="text-4xl font-bold">
          Soy <span className="text-yellow-500">Angie Yarce</span>
        </h1>
        <h2 className="text-2xl text-gray-700 mt-2">Estudiante de ingeniería en sistemas</h2>
        <p className="text-gray-600 mt-4">
          Actualmente soy estudiante de ingeniería en sistemas en la universidad de Antioquia. 
          Me enfoco principalmente en el desarrollo web, me encanta poder proyectar ideas 
          o diseños a través de la programación. Además, puedo usar diversos lenguajes.
        </p>
        <button 
          onClick={toggleModal} 
          className="mt-6 px-6 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600"
        >
          Este soy yo
        </button>
      </div>

      <div className="ml-5">
        <Image
          src="/img/profile_preview.png"
          alt="Perfil completo"
          width={800}
          height={800}
          className="object-cover"
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full"> {/* Ajusta aquí el max-w para hacerlo más ancho */}
            <h2 className="text-2xl font-bold mb-4">Más sobre mí</h2>
            <p className="text-gray-700">
              Hola, soy Angie Paola Yarce Gómez. Nací en un pequeño pueblo llamado Maceo.<br /><br />
              Soy estudiante de la Universidad de Antioquia desde 2018, actualmente hago mi 7.º semestre. 
              Aunque mi carrera abarca muchas ramas, soy totalmente más fascinada por el diseño web, 
              me encanta diseñar prototipos para después llevarlos a codificar.<br /><br />
              Tengo conocimientos en inglés básico, en dibujo, globofexia y diferentes manualidades.<br /><br />
              Entre mis hobbies preferidos están la lectura, la música, visualización de películas, 
              deportes, manualidades y la cocina.<br /><br />
              Espero graduarme y ejercer mi carrera como profesional. Comprar mi propia casa e ir de viajes
              a través del mundo.
            </p>
            <button 
              onClick={toggleModal} 
              className="mt-6 px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;


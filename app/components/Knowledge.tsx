import { FaCode, FaPaintBrush, FaHeadphones, FaGamepad, FaCamera, FaBullhorn } from 'react-icons/fa';

{/* Sección de conocimientos */}
const Knowledge = () => {
  return (
    <section className="mt-8">
      <h2 className="text-3xl font-bold text-center">Mis conocimientos</h2>
      <p className="text-center text-gray-600 mt-2">
        Aqui encontraras un poco acerca de los conocimientos que he obtenido en 
        lo que va a de mi carrera.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="text-yellow-500 mb-2">
            <FaCode size={40} />
          </div>
          <h3 className="text-xl font-semibold">Desarrollo web</h3>
          <p className="text-gray-600">Desarrollo de páginas web</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="text-yellow-500 mb-2">
            <FaPaintBrush size={40} />
          </div>
          <h3 className="text-xl font-semibold">Diseño</h3>
          <p className="text-gray-600">Diseño de páginas o prototipos para diferentes fines</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="text-yellow-500 mb-2">
            <FaHeadphones size={40} />
          </div>
          <h3 className="text-xl font-semibold">Edición de sonido</h3>
          <p className="text-gray-600">Edición de audio, voz superpuesta y creación de mix</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="text-yellow-500 mb-2">
            <FaGamepad size={40} />
          </div>
          <h3 className="text-xl font-semibold">Globofexia</h3>
          <p className="text-gray-600">Elaboración de figuras y decoración de eventos</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="text-yellow-500 mb-2">
            <FaCamera size={40} />
          </div>
          <h3 className="text-xl font-semibold">Fotografía</h3>
          <p className="text-gray-600">Edición de imágenes y todo lo relacionado con ellas</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="text-yellow-500 mb-2">
            <FaBullhorn size={40} />
          </div>
          <h3 className="text-xl font-semibold">Dibujo</h3>
          <p className="text-gray-600">
            Realización de dibujos manuales
          </p>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;

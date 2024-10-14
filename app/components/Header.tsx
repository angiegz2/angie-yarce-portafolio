import Image from 'next/image';

const Header = () => {
  return (
    <aside className="w-[25%] h-screen bg-gray-100 p-4 flex flex-col items-center">
      {/* Foto de perfil */}
      <div className="ml-9">
        <Image
          src="/img/perfil.jpg"
          alt="Foto de perfil"
          width={150}
          height={100}
          className="rounded-full object-cover"
        />
      </div>

      {/* Nombre y descripción */}
      <h1 className="text-2xl font-bold text-center">Angie Paola Yarce Gómez</h1>
      <p className="text-lg mb-6 text-center">Estudiante de ingeniería en sistemas</p>

      {/* Información personal */}
      <div className="w-full mb-6">
      <div className="flex justify-between">
          <span>Universidad:</span>
          <span>UdeA</span>
        </div>
        <div className="flex justify-between">
          <span>Edad:</span>
          <span>24</span>
        </div>
        <div className="flex justify-between">
          <span>Residencia:</span>
          <span>Maceo, Antiqouia</span>
        </div>
        <div className="flex justify-between">
          <span>Teléfono:</span>
          <span>3207780367</span>
        </div>
        <div className="flex justify-between">
          <span>Email:</span>
          <span>angie.yarceg@udea.edu.co</span>
        </div>
      </div>

      {/* Idiomas */}
      <div className="w-full mb-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Idiomas</h2>
        <div className="mb-4">
          <span>Español</span>
          <span className="block text-sm text-black text-center mb-1">100%</span> {/* Porcentaje arriba de la barra */}
          <div className="relative w-full bg-gray-300 h-2">
            <div className="bg-yellow-500 h-2" style={{ width: '100%' }}></div>
          </div>
        </div>
        <div>
          <span>Inglés</span>
          <span className="block text-sm text-black text-center mb-1">60%</span> {/* Porcentaje arriba de la barra */}
          <div className="relative w-full bg-gray-300 h-2">
            <div className="bg-yellow-500 h-2" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>

      {/* Lenguajes de programación */}
      <div className="w-full mb-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Lenguajes de programación</h2>
        <div className="mb-4">
          <span>JavaScript</span>
          <span className="block text-sm text-black text-center mb-1">80%</span> {/* Porcentaje arriba de la barra */}
          <div className="relative w-full bg-gray-300 h-2">
            <div className="bg-yellow-500 h-2" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="mb-4">
          <span>HTML</span>
          <span className="block text-sm text-black text-center mb-1">75%</span> {/* Porcentaje arriba de la barra */}
          <div className="relative w-full bg-gray-300 h-2">
            <div className="bg-yellow-500 h-2" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div>
          <span>C++</span>
          <span className="block text-sm text-black text-center mb-1">60%</span> {/* Porcentaje arriba de la barra */}
          <div className="relative w-full bg-gray-300 h-2">
            <div className="bg-yellow-500 h-2" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>

      {/* Habilidades extras */}
      <div className="w-full">
        <h2 className="text-xl font-semibold mb-4 text-center">Habilidades extras</h2>
        <ul className="list-disc list-inside">
          <li>Desarrollo web</li>
          <li>Diseño en Figma</li>
          <li>Bases de datos (MongoDB)</li>
        </ul>
      </div>
    </aside>
  );
};

export default Header;

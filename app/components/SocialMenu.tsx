import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

{/* Sección de links sociales con iconos */}
const SocialMenu = () => {
  return (
    <div className="mt-8 text-center">
      <h3 className="text-gray-800 text-xl font-semibold mb-4">Conéctate conmigo</h3>
      <div className="flex justify-center gap-6">
        <a href="https://www.linkedin.com/in/angie-yarce-g-747259248/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={35} className="text-blue-600 hover:text-blue-400" />
        </a>
        <a href="https://github.com/angiegz2" target="_blank" rel="noopener noreferrer">
          <FaGithub size={35} className="text-gray-800 hover:text-gray-600" />
        </a>
        <a href="https://www.instagram.com/angieyarceg/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={35} />
        </a>
        <a href="https://www.facebook.com/angieyarceg/" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={35} className="text-blue-800 hover:text-blue-600" />
        </a>
      </div>
    </div>
  );
};

export default SocialMenu;



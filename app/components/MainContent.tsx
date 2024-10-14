import Profile from './Profile'; 
import Education from './Education'; 
import Portfolio from './Portafolio';
import Knowledge from './Knowledge';
import SocialMenu from './SocialMenu';

const MainContent = () => {
  return (
    <main className="flex-grow p-4">
      {/* Sección de perfil */}
      <Profile />

      {/* Sección de conocimientos */}
      <Knowledge /> 

      {/* Sección de educación */}
      <Education /> 

      {/* Sección del portafolio */}
      <Portfolio /> 

      {/* Sección de contactame */}
      <SocialMenu /> 
    </main>
  );
};

export default MainContent;

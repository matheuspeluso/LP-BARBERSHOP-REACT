import YellowButton from "../YellowButton/YellowButton.jsx";
import Logo from "../../assets/logo.png"

import "./Header.scss"

const Header = () => {
  const redirectToInstagram = () => {
    window.open('https://www.instagram.com/', '_blank');
  };

  const redirectToTikTok = (e) => {
    window.open('https://www.tiktok.com/', '_blank');
  };

  const redirectToYouTube = () => {
    window.open('https://www.youtube.com/', '_blank');
  };

  const redirectContact = () => {
    window.open('https://web.whatsapp.com/', '_blank');
  };

  return (
    <div className='container-pai'>
      <div className="container">
        <div className="links">
          <a href="https://www.instagram.com/matheuspeluso2000/" target="_blank" rel="noopener noreferrer" onClick={redirectToInstagram}>
            <i className="bi bi-instagram icon"></i>
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" onClick={redirectToTikTok}>
            <i className="bi bi-tiktok icon"></i>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" onClick={redirectToYouTube}>
            <i className="bi bi-youtube icon"></i>
          </a>
        </div>

        <div className="logo">
          <img src={Logo} alt="BarberShop" />
        </div>

        <div className="agendar-horario">
          {/* Substituí LollowButton por YellowButton para consistência com o exemplo abaixo */}
          <YellowButton id="btn-agenda" text="Agendar Horário" click={redirectContact}/>
        </div>

      </div>

      <div className="chamada">
        <h2 className="el title">ESTILO É UM REFLEXO DA SUA ATITUDE <br/> E PERSONALIDADE.</h2>
        <p className="el horario">Horário de funcionamento: 09:00 às 20:00</p>
        {/* Corrigido o ID para estar dentro do atributo */}
        <YellowButton id="agendar" text="Agendar Horário" click={redirectContact}/>
      </div>
    </div>
  );
}

export default Header;
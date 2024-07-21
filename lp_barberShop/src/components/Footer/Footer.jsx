import "./Footer.scss"
import Logo from "../../assets/logo.png"

const Footer = () => {

  const redirectToInstagram = () => {
    window.open('https://www.instagram.com/', '_blank');
  };

  const redirectToTikTok = (e) => {
    window.open('https://www.tiktok.com/', '_blank');
  };

  const redirectToYouTube = () => {
    window.open('https://www.youtube.com/', '_blank');
  };


  return (
    <div className="container-footer">
        <div className="logo-links">
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

        <div className="logo-barber">
                <img src={Logo} alt="BarberShop" />
        </div>
        <di className="copy">
            <p>Copyright 2023 | LP-BARBERSHOP - Todos direitos reservados.</p>
            <p>Site Desenvolvido por : Dev Matheus Peluso</p>
        </di>

    </div>
  )
}

export default Footer

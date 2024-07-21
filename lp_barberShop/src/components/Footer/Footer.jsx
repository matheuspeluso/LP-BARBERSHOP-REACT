import "./Footer.scss"
import Logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className="container-footer">
        <div className="logo-links">
            <i className="bi bi-instagram icon"></i>
            <i className="bi bi-tiktok icon"></i>
            <i className="bi bi-youtube icon"></i>
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

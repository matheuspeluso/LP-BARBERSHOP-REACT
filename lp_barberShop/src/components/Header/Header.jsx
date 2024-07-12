import LollowButton from "../LollowButton/LollowButton.jsx";
import YellowButton from "../YellowButton/YellowButton.jsx";
import Logo from "../../assets/logo.png"

import "./Header.scss"

const Header = () => {
  return (
    <>
      <div className='container-pai'>
        <div className="container">
            <div className="links">
              <i className="bi bi-instagram icon"></i>
              <i className="bi bi-tiktok icon"></i>
              <i className="bi bi-youtube icon"></i>
            </div>

            <div className="logo">
              <img src={Logo} alt="BarberShop" />
            </div>

            <div className="agendar-horario">
                <LollowButton id="btn-agenda" text="Agendar Horário"/>
            </div>

        </div>


          <div className="chamada">
            <h2 className="el title">ESTILO É UM REFLEXO DA SUA ATITUDE <br/> E PERSONALIDADE.</h2>
            <p className="el horario">Horário de funcionamento: 09:00 ás 20:00</p>
            <YellowButton className="el btn" id="agendar" text="Agendar Horário"/>
          </div>

      </div>
    
    </>
  )
}

export default Header
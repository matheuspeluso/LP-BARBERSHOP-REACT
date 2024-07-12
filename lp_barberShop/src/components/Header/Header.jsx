import LollowButton from "./LollowButton/LollowButton"

import "./Header.scss"

const Header = () => {
  return (
    <div className='container'>

        <div className="links">
            <span>link1</span>
            <span>link2</span>
            <span>link3</span>
        </div>

        <div className="logo">
            <span>Logo Centro</span>
        </div>

        <div className="agendar-horario">
            <LollowButton id="btn-agenda" text="Agendar Horário"/>
        </div>

    </div>
  )
}

export default Header
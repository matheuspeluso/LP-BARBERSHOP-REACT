import "./YellowButton.scss"

const YellowButton = ({id,text,click}) => {
  return (
    <button className='yellow-btn' id={id} onClick={click}>
        {text}
    </button>
  )
}

export default YellowButton

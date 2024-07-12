import "./YellowButton.scss"

const YellowButton = ({id,text}) => {
  return (
    <button className='yellow-btn' id={id}>
        {text}
    </button>
  )
}

export default YellowButton

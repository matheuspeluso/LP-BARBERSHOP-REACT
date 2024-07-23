import React from 'react'
import "./LollowButton.scss"

const LollowButton = ({id,text}) => {
  return (
    <button className='lollowBtn' id={id}>
        {text}
    </button>
  )
}

export default LollowButton
import React from 'react'

// eslint-disable-next-line react/prop-types
const AuthButton = ({ text, eventHandler }) => {
	return <button onClick={eventHandler}> {text} </button>
}

export default AuthButton

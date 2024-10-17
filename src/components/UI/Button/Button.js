import React from 'react'
import './button.css';

function Button({ type, text, icon, onClick }) {
    return (
        <button
            onClick={onClick}
            className={type === 'main' ? 'button__main' : 'button__sub'}>
            {type === 'sub' ? <span className='icon' >{icon}</span> : <span></span>}<span className={type === 'main' ? '' : 'text'}>{text}</span>
        </button>
    )
}

export default Button
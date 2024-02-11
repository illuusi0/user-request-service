import React from 'react'
import '../styles/Button.scss'

interface ButtonProps {
    onClick: () => void
    children: React.ReactNode
    className?: string
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
    return (
        <div className={`wrapper ${className || ''}`}>
            <button className={`button ${className || ''}`} onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default Button

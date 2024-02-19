import React from 'react'
import styles from '../styles/Button.module.css'

interface ButtonProps {
    onClick: () => void
    children: React.ReactNode
    className?: string
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '' }) => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <button className={`${styles.button} ${className}`} onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default Button

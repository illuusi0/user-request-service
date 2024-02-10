// Button.tsx
import React from 'react'
import '../styles/Button.scss' // Убедитесь, что этот путь к стилям корректен

interface ButtonProps {
    onClick: () => void // Функция, которая будет вызываться при клике
    children: React.ReactNode // Содержимое кнопки
    className?: string // Необязательный параметр для дополнительных классов CSS
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

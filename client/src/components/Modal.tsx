import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import '../styles/Modal.scss'

interface ModalProps {
    isOpen: boolean
    children: ReactNode
    onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose }) => {
    if (!isOpen) return null

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        onClose()
    }

    const handleModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()
    }

    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-window" onClick={handleModalClick}>
                <button className="close-button" onClick={onClose}>
                    ×
                </button>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root') as HTMLElement,
    )
}

export default Modal

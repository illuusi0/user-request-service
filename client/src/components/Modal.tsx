import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import styles from '../styles/Modal.module.css'

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
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div className={styles.modalWindow} onClick={handleModalClick}>
                <button className={styles.closeButton} onClick={onClose}>
                    ×
                </button>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root') as HTMLElement,
    )
}

export default Modal

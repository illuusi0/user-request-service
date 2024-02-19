import React from 'react'
import styles from '../styles/DetailsModal.module.css'

const RequestDetailsModal: React.FC<{
    request: {
        date: string
        name: string
        type: string
        description: string
        status: string
    } | null
    onClose: () => void
}> = ({ request }) => {
    if (!request) return null

    return (
        <div className="modal">
            <div className={styles.modalContent}>
                <h2>Детали обращения</h2>
                <p>
                    <strong>Имя:</strong> {request.name}
                </p>
                <p>
                    <strong>Тип:</strong> {request.type}
                </p>
                <p>
                    <strong>Описание:</strong>
                </p>
                <textarea readOnly value={request.description} />
                <p>
                    <strong>Статус:</strong> {request.status}
                </p>
            </div>
        </div>
    )
}

export default RequestDetailsModal

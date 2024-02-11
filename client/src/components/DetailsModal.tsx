import React from 'react'
import '../styles/DetailsModal.scss'

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
            <div className="modal-content">
                <p>Детали обращения</p>
                <p>Имя: {request.name}</p>
                <p>Тип: {request.type}</p>
                <p>Описание: {request.description}</p>
                <p>Статус: {request.status}</p>
            </div>
        </div>
    )
}

export default RequestDetailsModal

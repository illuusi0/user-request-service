import React from 'react'

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
                <h2>Детали обращения</h2>
                <p>
                    <strong>Имя:</strong> {request.name}
                </p>
                <p>
                    <strong>Тип:</strong> {request.type}
                </p>
                <p>
                    <strong>Описание:</strong> {request.description}
                </p>
                <p>
                    <strong>Статус:</strong> {request.status}
                </p>
            </div>
        </div>
    )
}

export default RequestDetailsModal

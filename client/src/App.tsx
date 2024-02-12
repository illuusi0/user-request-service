import React, { useEffect, useState } from 'react'

import styles from './index.module.scss'
import { FormComponent } from './components/Form'
import { RequestsTable } from './components/Table'
import Modal from './components/Modal'
import Button from './components/Button'

interface RequestItem {
    date: string
    name: string
    description: string
    type: string
    status: string
}

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [data, setData] = useState<RequestItem[]>([])

    useEffect(() => {
        fetch('http://localhost:3001/data')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error))
    }, [])

    const handleFormSubmit = (formData: RequestItem) => {
        fetch('http://localhost:3001/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then((updatedData) => {
                setData((prevData) => [...prevData, formData]) // Обновляем локальное состояние без повторного запроса
                setIsModalOpen(false)
            })
            .catch((error) => console.error('Error:', error))
    }

    return (
        <div className={styles.container}>
            <Button onClick={() => setIsModalOpen(true)}>+ создать сообщение</Button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <FormComponent onSubmit={handleFormSubmit} />
            </Modal>
            <RequestsTable requests={data} />
        </div>
    )
}

export default App
